import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image, StyleSheet} from 'react-native';
import {Text, Content, Thumbnail, Card, CardItem, Tab, Tabs, Button} from 'native-base';

import avatar from '../../data/avatarData'

import TabMur from './tabMur'
import TabChien from './tabChien'
import TabPhotos from './tabPhoto'
import Colors from '../../constants/Colors';

export default class ProfilScreen extends React.Component {
  render(){
    return (
      <Content>
        <Content>
              <Card style={styles.profileHead} transparent>
                <Thumbnail style={{width:80, height:80}} source={avatar.profile_pic}/>
                <CardItem style={{flexDirection:'row'}}>
                  <Text>{avatar.prenom} {avatar.nom},</Text><Text> de {avatar.location}</Text>
                </CardItem>
              </Card>
          <Button>
            <Text>Modifier</Text>
          </Button>
        </Content>
        <Content>
          <Tabs tabBarUnderlineStyle={{backgroundColor:Colors.darkBlue}}>
            <Tab heading='Mur' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabText}>
             <TabMur avatar={avatar}/> 
            </Tab>
            <Tab heading='Chien' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabText}>
              <TabChien chien={avatar.chien}/>
            </Tab>
            <Tab heading='Photos' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabText}>
              <TabPhotos photos={avatar.photos}/>
            </Tab>
          </Tabs>
        </Content>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  profileHead:{
    alignContent:'center',
    alignItems:'center',
    height:150
  },
  tabColor:{
    backgroundColor:"white"
  },
  tabText:{
    color:"black"
  }
})

ProfilScreen.navigationOptions = {
  header: null,
};

