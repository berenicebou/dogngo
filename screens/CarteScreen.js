import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, Button, Container, Header, Item, Icon, Input, Card, View } from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


import events from '../data/eventData'
import EventItem from '../components/EventItem'

import Colors from '../constants/Colors'  

class CarteScreen extends React.Component {
  constructor(props){
    super(props)
  }
  _displayDetailEvent = (idEvent, titleEvent, typeEvent, dureeEvent, parcoursEvent, dateEvent) => {
    console.log(idEvent, titleEvent)
    this.props.navigation.navigate("EventDetail" , { idEvent: idEvent, titleEvent: titleEvent, typeEvent :typeEvent, dureeEvent: dureeEvent, parcoursEvent: parcoursEvent, dateEvent: dateEvent })
  }
  render(){
  let {height, width} = Dimensions.get('window');   
  return (
    <Content>

      <Card style={styles.searchBar} transparent>
          <Item>
            <Input />
            <Button style={{backgroundColor:Colors.tintColor}}>
              <Text>Chercher</Text>
            </Button>
          </Item>
      </Card>

      {/* <Content>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <EventItem event={item} displayDetailEvent={this._displayDetailEvent}/>}  
        />
      </Content> */}
      
      {/* <Image style={[styles.backgroundImage, {height:height, width: width}]} source={require('../assets/images/fakemap.png')}/> */}

     
      <MapView 
        style={{flex:1, height:height, width:width}}
        initialRegion={{
          latitude: 43.124830, 
          longitude: 5.928624,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}>
        <Marker 
          coordinate={{latitude: 43.124830, longitude: 5.928624}} 
          description={'Test'}
          title={'TEst'}
        />
      </MapView> 
      
    </Content>
  );
}
}

CarteScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor:'transparent',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  marqueur:{
    zIndex:2
  },
  searchBar:{
    backgroundColor: 'transparent',
  }
});

export default CarteScreen