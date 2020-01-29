// Components/EventDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Image} from 'react-native'
import { Text, Content, Thumbnail, Left, Body, CardItem, Card, Right, List, ListItem, Button, Icon,Toast } from 'native-base'

import event from "../../data/eventData"
import chiensData from '../../data/chienData'
import avatar from '../../data/avatarData'
import Texts from "../../constants/Texts"
import Colors from '../../constants/Colors'

class EventDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			event: undefined, 
			isLoading: false,
			participe: undefined,
			showToast : false,
			chiens: [],
		}
	}
	
	componentDidMount(){
		const {navigation} = this.props;
		this.setState({
            balade: event.find(data => data.id === this.props.navigation.getParam('idEvent')),
			isLoading: false,
			participe: false,
			chiens: chiensData
		  })
	}
    
  _displayLoading() {
    if (this.state.isLoading) {
    	return (
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  ClickParticipate = () => {
    if (this.state.participe == true) {
		this.setState({ 
			participe: false,
			chiens : this.state.chiens.filter(item => item.id != "9")
		});
		return (Toast.show({
			text: "Vous ne participez plus à la balade !",		
			buttonText: "Ok",
			duration: 3000
		})) 
    } else {
	  this.setState(prevState => ({ 
		  participe: true, 
		  chiens:  [ avatar.chien, ...prevState.chiens]
		}));
	  return (Toast.show({
		text: "Balade ajouté !",
		buttonText: "Ok",
		duration: 3000
	  }))
    }
  };
  
  static navigationOptions = ({ navigation }) => {
    return {
	  title: navigation.getParam('titleEvent'),
	  headerStyle: {
		marginTop:-50
	}
    };
  };
    
  _displayBalade() {
		if (this.state.balade != undefined) {
        return (
          <Content style={styles.main_container}>

            {this._displayLoading()}

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
											<Text style={{color:"white"}}>{this.state.balade.date} à {this.state.balade.heure}</Text>
										</ListItem>
									</List>
								</View>
							</Content>
 
							<Content>
								<Image style={{height: 300, width: null, flex: 1}} source={require('../../assets/images/map.png')}/>
							</Content>

							{this.state.participe ? (
								<Content style={{marginTop:-30}}>
								<Button disabled style={{ height:50, backgroundColor: Colors.buttonColor, flex:1}} full>
									<Text>Je participe</Text>
                                    <Icon name="checkcircleo" type="AntDesign"/>
								</Button>
							</Content>
							 ) : null }

							<Card transparent>
								<CardItem>		
								<Left style={{marginTop:-10}}>
									<Text style={Texts.txtLight}>{this.state.balade.type}</Text>
									<Thumbnail style={{height:20, width:20, marginLeft:5}} source={require('../../assets/images/earth.png')}/>
								</Left>
								<Body>
									<Content style={{marginTop:-5}}>
										{this.state.participe ? (
											<Button rounded style={{height:50, backgroundColor:'grey'}} onPress={ () => this.ClickParticipate()}>
												<Text>Annuler</Text>
											</Button>
										) : <Button rounded style={{height:50, backgroundColor:Colors.tintColor}} onPress={ () => this.ClickParticipate()}>
												<Text>Participer</Text>
											</Button>
										}			
									</Content>
								</Body>
								<Right style={{flexDirection:'row', marginTop:-10, right:-5}}>
									<Icon style={{color: Colors.tintColor}} name="star" type="FontAwesome"/>
									<Icon style={{color: Colors.tintColor}} name="star" type="FontAwesome"/>
									<Icon style={{color: Colors.tintColor}} name="star" type="FontAwesome"/>
									<Icon style={{color: Colors.tintColor}} name="star" type="FontAwesome"/>
									<Icon style={{color: Colors.tintColor}} name="star-half-empty" type="FontAwesome"/>
								</Right>
								</CardItem>
							</Card>
							
							
						
						{/* CHIENS PRESENTS */}
						<Content>
							<Card transparent>
								<Text style={Texts.h1}>Les chiens présents</Text>
								<List 
									dataArray={this.state.chiens} 
									horizontal={true}
									renderRow={(chien) =>
									<ListItem style={{borderBottomWidth: 0, marginTop:0, paddingTop:0}}>
											<Left>
												<Thumbnail source={chien.photo}/>
												<Body>
													<Text>{chien.nom}</Text>
													<Text note>{chien.race}, {chien.age}</Text>
												</Body>
											</Left>
									</ListItem>
									}>
								</List>
							</Card>

							{/* DESCRIPTION EVENT */}
							<Card transparent>
								<Text style={Texts.h1}>Description</Text>
									<CardItem>
										<List 
											numColumns={3}
											dataArray={this.state.balade.param}
											renderRow={(param) =>
											<Button disabled style={{height:30, backgroundColor: 'white', margin:2, borderColor:Colors.tintColor, borderWidth:2}} rounded>
												<Text uppercase={false} style={{color:'black', fontSize:15}}>{param.name}</Text>
											</Button>
										}></List>
									</CardItem>
									<CardItem style={{marginTop:0, paddingTop:0}}>
										<Text>{this.state.balade.description}</Text>
									</CardItem>
							</Card>


							{/* PHOTO DU LIEU */}
							<Card transparent>
								<Text style={Texts.h1}>Les photos du lieu</Text>
									<CardItem>
										<List
											horizontal={true}
											dataArray={this.state.balade.photoLieu}
											renderRow={(photo) =>
											<Image style={{width: 160, height: 160, margin:10}} source={photo.photo}/>
										}></List>
									</CardItem>
							</Card>

						</Content>

          </Content>
        )
	  }
	}
	render() {
		return (
		  <View style={styles.main_container}>
			{this._displayBalade()}
		  </View>
		)
	  }
	}
    
const styles = StyleSheet.create({
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

export default EventDetail