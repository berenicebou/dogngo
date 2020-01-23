
import React from 'react'

import { StyleSheet, View, Image, Text, Dimensions, FlatList} from 'react-native'
import { Container, Header, Content, Icon, Button, List, ListItem, Card, CardItem, Left, Right, Body, Thumbnail} from 'native-base';

import Texts from '../../constants/Texts'
import Colors from "../../constants/Colors"


export default class TabMur extends React.Component {
  render() {
    let {height, width} = Dimensions.get('window');
    const avatar = this.props.avatar   
    return (
        <Content>
            <FlatList
                data={avatar.posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                <Card transparent style={{marginBottom:-15}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={avatar.profile_pic} />
                            <Body>
                            <Text>{avatar.prenom} {avatar.nom}</Text>
                            <Text note>{item.date}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody style={{margin:-3}}>
                        <Image source={item.photo} style={{height: 250, width: null, flex: 1}}/>
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
            }/>
        </Content>

    )
}
}

