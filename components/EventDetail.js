// Components/EventDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Image} from 'react-native'
import { Text, Content, Thumbnail, Left, Body, CardItem, Card, Right, List, ListItem, Button } from 'native-base'

import event from "../data/eventData"
import chiens from '../data/chienData'
import Texts from "../constants/Texts"
import Colors from '../constants/Colors'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: undefined, 
      isLoading: false 
    }
	}
	
	componentDidMount(){
		 
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
    
      render() {
        return (
          <Content style={styles.main_container}>

            {this._displayLoading()}

							<Card transparent>
								<CardItem>		
								<Left>
									<Thumbnail source={require("../assets/images/portrait2.png")}/>
									<Body>
										<Text>Paul Lemaire</Text>
										<Text note>et son bichon</Text>
									</Body>
								</Left>
								<Right style={{flexDirection:'row'}}>
									<Thumbnail source={require("../assets/images/portrait2.png")}/>
									<Thumbnail source={require("../assets/images/portrait2.png")}/>
									<Thumbnail source={require("../assets/images/portrait2.png")}/>
								</Right>
								</CardItem>
							</Card>
						
							<Content>
								<List style={{flexDirection:'row', flex :1 , backgroundColor:Colors.tintColor}}>
									<ListItem>
										<Text>2.4 km</Text>
									</ListItem>
									<ListItem>
										<Text>35 minutes</Text>
									</ListItem>
									<ListItem>
										<Text>25/01/20</Text>
									</ListItem>
								</List>
							</Content>
 
							<Content>
								<Image style={{height: 300, width: null, flex: 1}} source={require('../assets/images/map.png')}/>
							</Content>

							
							<Content style={{alignSelf:'center', marginTop:-20}}>
								<Button rounded style={{backgroundColor: Colors.buttonColor}}>
									<Text>Participer</Text>
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

EventDetail.navigationOptions = {
	title: "Domaine de la Castille",
	headerStyle: {
		marginTop:-50

	}
};

export default EventDetail