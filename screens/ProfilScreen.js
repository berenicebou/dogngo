import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image} from 'react-native';
import {Text, Content, Thumbnail, Card, CardItem} from 'native-base';

import avatar from '../data/avatarData'

export default class ProfilScreen extends React.Component {
  render(){
    return (
      <Content>
        { avatar.map(profile => {
          return (
            <Card style={{alignContent:'center', alignItems:'center'}}>
              <Thumbnail source={profile.profile_pic}/>
              <CardItem style={{flexDirection:'row'}}>
                <Text>{profile.prenom} {profile.nom},</Text><Text> de {profile.location}</Text>
              </CardItem>
            </Card>
          );
        })}
      </Content>
    );
  }
}

ProfilScreen.navigationOptions = {
  header: null,
};
