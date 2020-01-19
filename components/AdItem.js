// Components/AddItem.js

import React from 'react'
import ads from '../data/adData';

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';

class AdItem extends React.Component {
  render() {
    return (
        <Content > 
            <List dataArray={ads} horizontal={true}
                    renderRow={(ad) =>
                <ListItem style={{borderBottomWidth: 0, marginTop:0, paddingTop:0}}>
                    <Image
                    style={{flex:1, height:280, width:160, margin:-10, padding:0}}
                    resizeMode="contain"
                    source={ad.img}/>
                </ListItem>
            }>
            </List>
        </Content>
    )
}
}

export default AdItem;
