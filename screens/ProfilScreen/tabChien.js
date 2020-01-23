
import React from 'react'

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Text, Icon, Button, Card, CardItem, Thumbnail} from 'native-base';

import Texts from '../../constants/Texts'
import Colors from '../../constants/Colors'


export default class TabChien extends React.Component {
  render() {
    const chien = this.props.chien
        return (
            <Content> 
                <Card style={{alignContent:'center', alignItems:'center'}} transparent>
                    <Thumbnail source={chien.photo}/>
                    <CardItem style={{flexDirection:'row'}}>
                        <Text>{chien.prenoms}</Text>
                        <Text>{chien.age}</Text>
                        <Text>{chien.race}</Text>
                    </CardItem>
                    <Text>Description :</Text>
                    <Text>{chien.description}</Text>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    
})