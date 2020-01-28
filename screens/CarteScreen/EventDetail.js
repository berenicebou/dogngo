// Components/EventDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Image} from 'react-native'
import { Text, Content, Thumbnail, Left, Body, CardItem, Card, Right, List, ListItem, Button } from 'native-base'

import event from "../../data/eventData"
import chiens from '../../data/chienData'
import Texts from "../../constants/Texts"
import Colors from '../../constants/Colors'

class EventDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			event: undefined, 
			isLoading: false 
		}
	}
	
	componentDidMount(){
		const {navigation} = this.props;
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
	  title: navigation.getParam('titleEvent'),
	  headerStyle: {
		marginTop:-50
	}
    };
  };
    
	render() {
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
											<Text style={{color:"white"}}>{this.props.navigation.getParam('parcoursEvent')} km</Text>
										</ListItem>
										<ListItem style={{borderColor: 'white', borderRightWidth:1,  borderBottomWidth:0, padding:10}}>
											<Text style={{color:"white"}}>{this.props.navigation.getParam('dureeEvent')} minutes</Text>
										</ListItem>
										<ListItem style={{padding:10}}>
											<Text style={{color:"white"}}>{this.props.navigation.getParam('dateEvent')}</Text>
										</ListItem>
									</List>
								</View>
							</Content>
 
							<Content>
								<Image style={{height: 300, width: null, flex: 1}} source={require('../../assets/images/map.png')}/>
							</Content>

							<Card transparent>
								<CardItem>		
								<Left style={{marginTop:-10}}>
									<Text style={Texts.txtLight}>{this.props.navigation.getParam('typeEvent')}</Text>
									<Thumbnail style={{height:20, width:20, marginLeft:5}} source={require('../../assets/images/earth.png')}/>
								</Left>
								<Body>
									<Content style={{marginTop:-40}}>
											<Button rounded style={{backgroundColor: Colors.buttonColor, height:50}}>
												<Text>Participer</Text>
											</Button>
									</Content>
								</Body>
								<Right style={{flexDirection:'row'}}>
									
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