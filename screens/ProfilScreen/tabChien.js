
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
                <Card style={{alignContent:'center', alignItems:'center', marginTop:25, marginLeft:15}} transparent>
                    <Thumbnail style={{height:130, width:130}} source={chien.photo}/>
                    <CardItem style={{flexDirection:'column'}}>
                        <Text style={{fontSize:18}}>{chien.prenom}</Text>
                        <Text style={{color:"grey"}}>{chien.age}</Text>
                        <Text style={{color:"grey"}}>{chien.race}</Text>
                    </CardItem>
                    <Content style={{flexDirection:'column'}}>
                        <Text style={{fontSize:20, textAlign:'left', fontWeight:'bold'}}>Description :</Text>
                        <Text>{chien.description}</Text>
                    </Content>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({

})