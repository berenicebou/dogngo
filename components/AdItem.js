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
                <ListItem>
                    <Image
                    style={{height:210, width:150}}
                    source={ad.img}/>
                </ListItem>
            }>
            </List>
        </Content>
    )
}
}

export default AdItem;
