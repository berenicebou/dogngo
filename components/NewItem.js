// Components/NewItem.js

import React from 'react'

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Colors from '../constants/Colors';

class NewItem extends React.Component {
  render() {
    const news = this.props.new
    return (
        <Content>
          <Card transparent style={{marginBottom:-15}}>
          <CardItem>
              <Left>
                <Thumbnail source={news.profile_photo} />
                <Body>
                  <Text>{news.pseudo}</Text>
                  <Text note>hier à 21:51</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{margin:-3}}>
              <Image source={news.photo} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{height:80}}>
              <Left>               
              </Left>
              <Body>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active type="MaterialCommunityIcons" color={Colors.tintColor} name="dog"/>
                  <Text style={{color:Colors.tintColor}}>12</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
}
}

export default NewItem;
