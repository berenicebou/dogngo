// BaladesScreen/BaladeDetailEffectue.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Image, Dimensions} from 'react-native'
import { Text, Content, Thumbnail, Left, Body, CardItem, Card, Right, List, ListItem, Button, Icon } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import event from "../../data/eventData"
import chiens from '../../data/chienData'
import Texts from "../../constants/Texts"
import Colors from '../../constants/Colors'

export default class BaladeDetailEffectue extends React.Component {
	state = {
		image: null,
	};

	constructor(props) {
		super(props)
		this.state = {
			balade: undefined, 
			isLoading: true,
		}
        
	}
	
	componentDidMount(){
        const {navigation} = this.props;
        this.setState({
            balade: event.find(data => data.id === this.props.navigation.getParam('idEvent')),
            isLoading: false
		  })
		this.getPermissionAsync();
		console.log('hi');
	}
	
	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
		  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		  if (status !== 'granted') {
			alert('Sorry, we need camera roll permissions to make this work!');
		  }
		}
	  }
	
	  _pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
		  mediaTypes: ImagePicker.MediaTypeOptions.All,
		  allowsEditing: true,
		  aspect: [3, 3],
		  quality: 1
		});
	
		if (!result.cancelled) {
		  this.setState({ image: result.uri });
		}
	  };
    
   
  _displayLoading() {
    if (this.state.isLoading) {
    	return (
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  
  
  static navigationOptions = ({ navigation }) => {
    return {
	    headerStyle: {
		marginTop:-50
	}
    };
  };
    
  _displayBalade() {
	let { image } = this.state;

    if (this.state.balade != undefined) {
      return (
        <Content style={styles.main_container}>
            <Card transparent>
			<CardItem>		
				<Left>
					<Thumbnail source={require("../../assets/images/portrait2.png")}/>
					<Body>
						<Text>Paul Lemaire</Text>
						<Text note>et son bichon</Text>
					</Body>
				</Left>
				<Right style={{flexDirection:'row'}}>
					<Thumbnail style={{marginRight:-20, zIndex:3}} source={require("../../assets/images/portrait3.png")}/>
					<Thumbnail style={{marginRight:-20, zIndex:2}} source={require("../../assets/images/portrait4.png")}/>
					<Thumbnail style={{marginRight:-20, zIndex:1}} source={require("../../assets/images/portrait5.png")}/>
								</Right>
								<Text>+23</Text>
								</CardItem>
							</Card>
						
							<Content>
								<View style={{flex: 1, justifyContent: 'center'}}>
									<List style={{ flexDirection:'row', justifyContent: 'center', backgroundColor:Colors.tintColor}}>
										<ListItem style={{borderColor: 'white', borderRightWidth:1, borderBottomWidth:0, padding:10}}>
											<Text style={{color:"white"}}>{this.state.balade.parcours} km</Text>
										</ListItem>
										<ListItem style={{borderColor: 'white', borderRightWidth:1,  borderBottomWidth:0, padding:10}}>
											<Text style={{color:"white"}}>{this.state.balade.duree} minutes</Text>
										</ListItem>
										<ListItem style={{padding:10}}>
											<Text style={{color:"white"}}>{this.state.balade.date}</Text>
										</ListItem>
									</List>
								</View>
							</Content>
 
							<Content>
								<Image style={{height: 300, width: null, flex: 1}} source={require('../../assets/images/map.png')}/>
							</Content>

							<Content style={{marginTop:-10}}>
								<Button disabled style={{ height:50, backgroundColor: Colors.buttonColor, flex:1}} full>
									<Text>Effectue</Text>
                                    <Icon name="checkcircleo" type="AntDesign"/>
								</Button>
							</Content>																
							
							
						

						<Content>
							<Card transparent>
								<Text style={Texts.h1}>Les chiens présents</Text>
								<List dataArray={chiens} horizontal={true}
                    renderRow={(chien) =>
									<ListItem style={{borderBottomWidth: 0, marginTop:0, paddingTop:0}}>
											<Left>
												<Thumbnail source={chien.img}/>
												<Body>
													<Text>{chien.nom}</Text>
													<Text note>{chien.race}, {chien.age} ans</Text>
												</Body>
											</Left>
									</ListItem>
									}>
								</List>
								<CardItem>
									
								</CardItem>
							</Card>
						</Content>

						<Content>
							<Text style={Texts.h1}>Les photos de la balade</Text>
							<Grid>
								<List
									numColumns={3}
									dataArray={this.state.balade.photos} 
									renderRow={(photo) =>
										<Col>
											<Image
											style={styles.image}
											source={photo.photo}/>
										</Col>
									}>
								</List>
							</Grid>
							<Grid>
								<Col>{image &&
								<Image source={{uri: image}} style={styles.image} />}</Col>
							</Grid>
							<View style={{alignContent:'center', alignItems:'center', margin:10}}>
								<Button rounded style={{backgroundColor:Colors.tintColor, width:250}} onPress={this._pickImage}>
									<Icon name="add-a-photo" type="MaterialIcons"/>
									<Text>Ajouter une photo</Text>
								</Button>
							</View>
						</Content>
          </Content>
        )
      }
    }
    render() {
        return (
		<Content>	
          <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayBalade()}
          </View>
		  
		</Content>	

        )
      }
    }
    
const styles = StyleSheet.create({
	image: {
        width: (Dimensions.get('window').width / 3) - 8,
        height: 130,
        margin: 3,
    },
    main_container: {
		flex: 1,
		marginTop:0,
    },
    loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
    }
})
