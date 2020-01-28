// BaladesScreen/BaladeDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Image} from 'react-native'
import { Text, Content, Thumbnail, Left, Body, CardItem, Card, Right, List, ListItem, Button, Icon } from 'native-base'

import event from "../../data/eventData"
import chiens from '../../data/chienData'
import Texts from "../../constants/Texts"
import Colors from '../../constants/Colors'

export default class BaladeDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			balade: undefined, 
			isLoading: true 
        }
        
	}
	
	componentDidMount(){
        const {navigation} = this.props;
        this.setState({
            balade: event.find(data => data.id === this.props.navigation.getParam('idEvent')),
            isLoading: false
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
  
  
  static navigationOptions = ({ navigation }) => {
    return {
        title: "Domaine de la Castille",
	    headerStyle: {
		marginTop:-50
	}
    };
  };

  _displayBalade() {
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
									<Text>Je participe</Text>
                                    <Icon name="checkcircleo" type="AntDesign"/>
								</Button>
							</Content>	

							<Card transparent>
								<CardItem>		
								<Left style={{marginTop:-10}}>
									<Text style={Texts.txtLight}>{this.state.balade.type}</Text>
									<Thumbnail style={{height:20, width:20, marginLeft:5}} source={require('../../assets/images/earth.png')}/>
								</Left>
								<Body>
									<Content style={{marginTop:-5}}>
											<Button disabled rounded style={{height:50}}>
												<Text>Annuler</Text>
											</Button>
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

          </Content>
      )
    }
  }
    
  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
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
