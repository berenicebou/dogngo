import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, Button } from 'native-base';

import events from '../data/eventData'
import EventItem from '../components/EventItem'

class CarteScreen extends React.Component {
  constructor(props){
    super(props)
  }
  _displayDetailEvent = (idEvent) => {
    console.log(idEvent)
    this.props.navigation.navigate("EventDetail" , { idEvent: idEvent })
  }
  render(){
  let {height, width} = Dimensions.get('window');   
  return (
    <Content>
      <Content>
      <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <EventItem event={item} displayDetailEvent={this._displayDetailEvent}/>}
          />
      </Content>

      <Image style={[styles.backgroundImage, {height:height, width: width}]} source={require('../assets/images/fakemap.png')}/>
      <Thumbnail style={{position:'absolute', alignSelf:'center'}} source={require('../assets/images/icone-menu-balade2.png')}/>
    </Content>
  );
}
}

CarteScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CarteScreen