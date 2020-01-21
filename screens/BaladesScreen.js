import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, Button, Card, CardItem, Left, Right, Body, ListItem, List} from 'native-base';

import events from '../data/eventData'
import EventItem from '../components/EventItem'

import avatar from '../data/avatarData'

class BaladesScreen extends React.Component {
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
      <Card>
            <CardItem>
              <Left>
                <Text>Balades effectués</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <List>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
              </List>
            </CardItem>

            <CardItem>
              <Left>
                <Text>Balades effectués</Text>
              </Left>
            </CardItem>
            <List 
              dataArray={avatar} 
              renderRow={(item) =>
                <ListItem style={{borderBottomWidth: 0, marginTop:0, paddingTop:0}}>
                  <List 
                    dataArray={item.balades} 
                    horizontal={true}
                    renderRow={(balade) =>
                      <ListItem style={{borderBottomWidth: 0, marginTop:0, paddingTop:0}}>
                        <Image
                          style={{flex:1, height:280, width:160, margin:-10, padding:0}}
                          resizeMode="contain"
                          source={balade.photo}/>
                      </ListItem>
                  }>
                  </List>
                </ListItem>
            }>
            </List>


          </Card>
      </Content>

    </Content>
  );
}
}

BaladesScreen.navigationOptions = {
  title: "Mes balades",
  headerStyle: {
		marginTop:-50
	}
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BaladesScreen