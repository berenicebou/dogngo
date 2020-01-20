import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Content, List, ListItem, Left, Body, Thumbnail, Right, Text} from 'native-base'

import Texts from '../constants/Texts'
import Colors from '../constants/Colors'

export default function MessagesScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Content>
      <Text style={Texts.h1}>Messages</Text>
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={require('../assets/images/portrait4.png')} />
        </Left>
        <Body>
          <Text>erika_jona</Text>
          <Text note>J'ai vu que tu avais partagé les photos ...</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail source={require('../assets/images/portrait1.png')} />
        </Left>
        <Body>
          <Text>juliepot</Text>
          <Text note>Tu viens à la prochaine balade au ...</Text>
        </Body>
        <Right>
          <Text note>7:43 pm</Text>
        </Right>
      </ListItem>
    </List>
  </Content>
  )
}

MessagesScreen.navigationOptions = {
  header: null
};
