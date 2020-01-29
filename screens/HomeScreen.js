import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { 
  Container, 
  Text, 
  Button,
  Content,
  Input,
  Item,
  Thumbnail,
  Left,
  Right,
  Card,
  Fab, 
  Icon,
  List,
  ListItem
} from 'native-base';
import Colors from '../constants/Colors';
import Texts from '../constants/Texts';


import news from '../data/newsData';
import eventsData from '../data/eventData';

import NewItem from '../components/NewItem';
import AdItem from '../components/AdItem';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      balades: []
    };
  }

  componentDidMount(){
    this.setState({
      balades : eventsData.filter(data => data.type === "Balades")
    })
  }

  render() {
    return (
    <Container>
      <Content>

        {/* Partie pour écrire un post */}
        {/* <Card style={{flex:1}} transparent>
          <Content>
            <Item style={{borderBottomWidth:0, marginLeft:10}}>
              <Thumbnail source={require('../assets/images/avatar/avatar.jpg')}/>
              <Input placeholder="Ecrire quelque chose..." />
            </Item>
          </Content>

          <Content style={{alignSelf:'flex-end', marginRight:10}}>
              <Button rounded style={{backgroundColor: Colors.buttonColor}}>
                <Text>Poster</Text>
              </Button>
          </Content>
        </Card> */}

        {/* LES BALADES PROCHES */}
        <Content>
          <Text style={Texts.h1}>Les balades proches de moi</Text>
          <Card transparent>
              <List
                dataArray={this.state.balades} 
                horizontal={true}
                renderRow={(balade) =>
                  <ListItem style={{borderColor: 'transparent'}}>
                      <TouchableOpacity>
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
        </Content>

        {/* ACTUALITES */}
        <Content>
          <Text style={Texts.h1}>Les actualités</Text>
          <FlatList
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NewItem new={item}/>}
          />
        </Content>

        {/* PROMO */}
        <Content style={styles.sponso}>
          <Text style={Texts.h1}>Les promos</Text>
          <AdItem />
        </Content>

        </Content>

        {/* Floating Action Button */}
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ right:10, bottom:10 }}
            style={{ backgroundColor:Colors.tintColor}}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon type="AntDesign" name="plus"/>
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>

    </Container>
    
     
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  formposts: {
    flex:1,
    flexDirection:'row',
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:50,
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin:10,
    padding:10,
  },  
  photoList:{
    borderBottomWidth: 0,
    marginTop:-70,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    height:380,
    width:170,
    flexDirection:'column',
    flex:1,
    margin:-10,
    marginBottom:-40,
    marginRight: -20,
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
