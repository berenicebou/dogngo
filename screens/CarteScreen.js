import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, Button, Container, Header, Item, Icon, Input, Card } from 'native-base';

import events from '../data/eventData'
import EventItem from '../components/EventItem'

import Colors from '../constants/Colors'

class CarteScreen extends React.Component {
  constructor(props){
    super(props)
  }
  _displayDetailEvent = (idEvent, titleEvent, typeEvent) => {
    console.log(idEvent, titleEvent)
    this.props.navigation.navigate("EventDetail" , { idEvent: idEvent, titleEvent: titleEvent, typeEvent :typeEvent })
  }
  render(){
  let {height, width} = Dimensions.get('window');   
  return (
    <Content>

      <Card style={styles.searchBar}>
          <Item>
            <Input />
            <Button style={{backgroundColor:Colors.tintColor}}>
              <Text>Chercher</Text>
            </Button>
          </Item>
    </Card>
      <Content>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <EventItem event={item} displayDetailEvent={this._displayDetailEvent}/>}  
        />
      </Content>
      
      <Image style={[styles.backgroundImage, {height:height, width: width}]} source={require('../assets/images/fakemap.png')}/>
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