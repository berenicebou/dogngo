import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList, TouchableHighlight } from 'react-native';
import { Text, Content, Thumbnail, Button, Card, CardItem, Left, Right, Body, ListItem, List, View} from 'native-base';

import events from '../../data/eventData'
import EventItem from '../../components/EventItem'

import Colors from '../../constants/Colors'
import Texts from '../../constants/Texts'

import avatar from '../../data/avatarData'
import { TouchableOpacity } from 'react-native-gesture-handler';

class BaladesScreen extends React.Component {
  constructor(props){
    super(props)
  }

  _displayDetailBalade = (idEvent, type) => {
    if(type == "Effectue"){
      this.props.navigation.navigate('BaladeDetailEffectue', {idEvent : idEvent})
    } else {
      this.props.navigation.navigate("BaladeDetail" , { idEvent: idEvent})
    }
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
            <Card transparent>
              <List 
                dataArray={avatar.baladesAVenir} 
                horizontal={true}
                renderRow={(balade) =>
                  <ListItem style={{borderColor: 'transparent'}}>
                    <TouchableOpacity onPress={() => this._displayDetailBalade(balade.id, "AVenir")}>
                      <View style={styles.photoList}>
                        <Image
                            style={styles.cardPhoto}
                            resizeMode="center"
                            source={balade.photo}
                        />
                        <Text style={styles.labelPhoto}>{balade.date} à {balade.heure}</Text>              
                      </View>         
                    </TouchableOpacity>             
                  </ListItem>
                } transparent>
              </List>
            </Card>

            <CardItem transparent style={styles.titleCard}>
              <Left>
                <Text style={Texts.h2}>Balades effectués</Text>
              </Left>
            </CardItem>
            <Card transparent>
              <List
                dataArray={avatar.baladesEffectuees} 
                horizontal={true}
                renderRow={(balade) =>
                  <ListItem style={{borderColor: 'transparent'}}>
                      <TouchableOpacity onPress={() => this._displayDetailBalade(balade.id, "Effectue")}>
                      <View style={styles.photoList}>
                        <Image
                            style={styles.cardPhoto}
                            resizeMode="center"
                            source={balade.photo}
                        />
                        <Text style={styles.labelPhoto}>{balade.date} à {balade.heure}</Text>              
                      </View>         
                    </TouchableOpacity>
                      </ListItem>
                  } transparent>
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
    marginLeft:-15,
  },
  titleCard:{
    marginBottom:-40,
  },
  cardItemPhoto:{
    height:320,
  },
  listItemCard:{
    borderBottomWidth: 0, 
    marginTop:20, 
    paddingTop:0,
  },
  photoList:{
    borderBottomWidth: 0,
    marginTop:-50,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    height:380,
    width:170,
    flexDirection:'column',
    flex:1,
    margin:-1,
    marginBottom:-40,
  },
  cardPhoto:{
    flex:1, 
    height: "100%",
    width:"90%",
    padding:0, 
    alignSelf:'center' 
  },
  labelPhoto:{
    backgroundColor: Colors.tintColor,
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderBottomStartRadius:20,
    bottom:60,
    width:155,
    padding:10,
    textAlign:'center',
    justifyContent:'center',
    position:"absolute",
    color: 'white'  
  }
});

export default BaladesScreen