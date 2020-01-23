import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image} from 'react-native';
import {Text, Content, Thumbnail, Card, CardItem, Tab, Tabs, Button} from 'native-base';

import avatar from '../../data/avatarData'

import TabMur from './tabMur'
import TabChien from './tabChien'
import TabPhotos from './tabPhoto'

export default class ProfilScreen extends React.Component {
  render(){
    return (
      <Content>
        <Content>
              <Card style={{alignContent:'center', alignItems:'center'}} transparent>
                <Thumbnail source={avatar.profile_pic}/>
                <CardItem style={{flexDirection:'row'}}>
                  <Text>{avatar.prenom} {avatar.nom},</Text><Text> de {avatar.location}</Text>
                </CardItem>
              </Card>
          <Button>
            <Text>Modifier</Text>
          </Button>
        </Content>
        <Content>
          <Tabs>
            <Tab heading='Mur'>
             <TabMur avatar={avatar}/> 
            </Tab>
            <Tab heading='Chien'>
              <TabChien chien={avatar.chien}/>
            </Tab>
            <Tab heading='Photos'>
              <TabPhotos photos={avatar.photos}/>
            </Tab>
          </Tabs>
        </Content>
      </Content>
    );
  }
}

ProfilScreen.navigationOptions = {
  header: null,
};
