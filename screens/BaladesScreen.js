import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, Button, Card, CardItem, Left, Right, Body, ListItem, List} from 'native-base';

import events from '../data/eventData'
import EventItem from '../components/EventItem'

import Colors from '../constants/Colors'
import Texts from '../constants/Texts'

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
      <Text style={Texts.h1}>Mes balades</Text>
      <Content style={styles.page}>
      <Card transparent>
            <CardItem transparent style={styles.titleCard}>
              <Left>
                <Text style={Texts.h2}>Balades à venir</Text>
              </Left>
            </CardItem>
            <Card transparent style={styles.cardItemPhoto}>
            <List 
              dataArray={avatar} 
              renderRow={(item) =>
                <ListItem style={styles.listItemCard} transparent>
                  <List 
                    dataArray={item.baladesAVenir} 
                    horizontal={true}
                    renderRow={(balade) =>
                      <ListItem style={styles.photoList}>
                        <Image
                          style={styles.cardPhoto}
                          resizeMode="center"
                          source={balade.photo}/>
                        <Text style={styles.labelPhoto}>{balade.date} à {balade.heure}</Text>
                      </ListItem>
                  }>
                  </List>
                </ListItem>
            }>
            </List>
            </Card>

            <CardItem transparent style={styles.titleCard}>
              <Left>
                <Text style={Texts.h2}>Balades effectués</Text>
              </Left>
            </CardItem>
            <Card transparent style={styles.cardItemPhoto}>
            <List 
              dataArray={avatar} 
              renderRow={(item) =>
                <ListItem style={styles.listItemCard} transparent>
                  <List 
                    dataArray={item.baladesEffectuees} 
                    horizontal={true}
                    renderRow={(balade) =>
                      <ListItem style={styles.photoList} transparent>
                        <Image
                          style={styles.cardPhoto}
                          resizeMode="center"
                          source={balade.photo}/>
                          <Text style={styles.labelPhoto}>{balade.date} à {balade.heure}</Text>
                      </ListItem>
                  } transparent>
                  </List>
                </ListItem>
            }>
            </List>
            </Card>

          </Card>
      </Content>

    </Content>
  );
}
}

BaladesScreen.navigationOptions = {
  header: null,
  headerStyle: {
    marginTop:-50,
	}
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page:{
    marginLeft:-15
  },
  cardItemPhoto:{
    height:300,
    marginLeft:-10,
    marginBottom:-40
  },
  listItemCard:{
    borderBottomWidth: 0, 
    marginTop:-50, 
    paddingTop:0,
  },
  photoList:{
    borderBottomWidth: 0,
    marginTop:0,
    justifyContent:'center',
    alignContent:'center',
    height:300,
    width:150,
    flexDirection:'column',
    flex:1,
    margin:-10,
  },
  cardPhoto:{
    flex:1, 
    height: "100%",
    width:"105%",
    padding:0, 
    margin:10, 
  },
  labelPhoto:{
    backgroundColor: Colors.tintColor,
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderBottomStartRadius:20,
    padding:10,
    textAlign:'center',
    marginTop:-50,
    width:140,
  }
});

export default BaladesScreen