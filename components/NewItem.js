// Components/NewItem.js

import React from 'react'

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Col, Grid, Row } from 'native-base';
import Colors from '../constants/Colors';

class NewItem extends React.Component {
  render() {
    const news = this.props.new
    return (
        <Content>
          <Card transparent style={{marginBottom:-30}}>
          <CardItem style={{paddingTop:2}}>
              <Left>
                <Thumbnail source={news.profile_photo} />
                <Body>
                  <Text>{news.pseudo}</Text>
                  <Text note>Il y a {news.release_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{margin:-3}}>
              <Image source={news.photo} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Grid style={{flex:1, height:60, alignItems:'flex-end', zIndex:5}}>
              <Row style={{margin:5, marginTop:-19, alignItems:'center'}}>
              {news.avatarLikes ? (
                <Icon active type="AntDesign" style={{color:Colors.tintColor}} name="heart"/>
              ): <Icon active type="AntDesign" style={{color:Colors.tintColor}} name="hearto"/> }

                <Text style={{color:Colors.tintColor, marginLeft:5}}>{news.likes}</Text>
              </Row>
            </Grid>
          </Card>
        </Content>
    )
}
}

export default NewItem;
