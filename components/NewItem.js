// Components/NewItem.js

import React from 'react'

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class NewItem extends React.Component {
  render() {
    const news = this.props.new
    return (
        <Content>
          <Card>
          <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/avatar/avatar.jpg')} />
                <Body>
                  <Text>{news.pseudo}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Image source={require('../assets/images/avatar/avatar.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
}
}

export default NewItem;
