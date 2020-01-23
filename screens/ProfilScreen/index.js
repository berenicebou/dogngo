import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image, StyleSheet} from 'react-native';
import {Text, Content, Thumbnail, Card, CardItem, Tab, Tabs, Button, Left, Right} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import avatar from '../../data/avatarData'

import TabMur from './tabMur'
import TabChien from './tabChien'
import TabPhotos from './tabPhoto'
import Colors from '../../constants/Colors';

export default class ProfilScreen extends React.Component {
  render(){
    return (
      <Content>

        <Content style={styles.profileHeadContent}>
              <Card style={styles.profileHead} transparent>
                <Thumbnail style={{width:90, height:90}} source={avatar.profile_pic}/>
                <CardItem style={{flexDirection:'row'}}>
                  <Text>{avatar.prenom} {avatar.nom},</Text><Text style={{color:"grey"}}> de {avatar.location}</Text>
                </CardItem>
              </Card>
              <Content style={{alignSelf:'center', marginTop:-20, marginBottom:20}}>
                <Button rounded style={{backgroundColor: Colors.buttonColor}}>
                  <Text>Modifier</Text>
                </Button>
              </Content>
              <Grid>
                <Col><Text style={styles.headInfo}>43</Text><Text style={styles.headInfo}>Amis</Text></Col>
                <Col><Text style={styles.headInfo}>27</Text><Text style={styles.headInfo}>Balades</Text></Col>
              </Grid>
        </Content>

        <Content>
          <Tabs tabBarUnderlineStyle={{backgroundColor:Colors.darkBlue}} tabContainerStyle={{elevation: 0, marginBottom:5}}>
            <Tab heading='Mur' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabTextAct}>
             <TabMur avatar={avatar}/> 
            </Tab>
            <Tab heading='Chien' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabTextAct}>
              <TabChien chien={avatar.chien}/>
            </Tab>
            <Tab heading='Photos' tabStyle={styles.tabColor} activeTabStyle={styles.tabColor} textStyle={styles.tabText} activeTextStyle={styles.tabTextAct}>
              <TabPhotos photos={avatar.photos}/>
            </Tab>
          </Tabs>
        </Content>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  profileHeadContent:{
    marginBottom:15,
  },
  profileHead:{
    alignContent:'center',
    alignItems:'center',
    height:150,
  },
  headInfo:{
    textAlign:'center',
    fontSize:16,
    fontWeight:"bold",
  },
  tabColor:{
    backgroundColor:"white",
  },
  tabText:{
    color:"black",
    fontSize:20,
  },
  tabTextAct:{
    color:'black',
    fontSize:20,
    fontWeight:"bold",
  }
})

ProfilScreen.navigationOptions = {
  header: null,
};

