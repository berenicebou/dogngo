import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, CheckBox, Button, Container, Header, Item, Icon, Input, Card, View, List } from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Col, Row, Grid } from "react-native-easy-grid";


import events from '../../data/eventData'
import EventItem from '../../components/EventItem'

import Colors from '../../constants/Colors'  

class CarteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      filtre: undefined,
    }
  }
  _displayDetailEvent = (idEvent, titleEvent, typeEvent, dureeEvent, parcoursEvent, dateEvent) => {
    console.log(idEvent, titleEvent)
    this.props.navigation.navigate("EventDetail" , { idEvent: idEvent, titleEvent: titleEvent, typeEvent :typeEvent, dureeEvent: dureeEvent, parcoursEvent: parcoursEvent, dateEvent: dateEvent })
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render(){
  let {height, width} = Dimensions.get('window');   
  return (
    <Content>
      <Card style={styles.searchBar} transparent>
          <Item>
            <Input />
            <Button style={{backgroundColor:Colors.tintColor}}>
              <Text>Chercher</Text>
            </Button>
          </Item>     
      </Card>
      <Button rounded transparent title="Hide/Show Component" onPress={this.ShowHideComponent}>
            <Icon name="ios-arrow-forward" type="Ionicons"/>
            <Text>Filtre</Text>
      </Button>

      {/* <Content>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <EventItem event={item} displayDetailEvent={this._displayDetailEvent}/>}  
        />
      </Content> */}
      
      {/* <Image style={[styles.backgroundImage, {height:height, width: width}]} source={require('../assets/images/fakemap.png')}/> */}

     
      <MapView 
        style={{flex:1, height:height, width:width}}
        initialRegion={{
          latitude: 43.124830, 
          longitude: 5.928624,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
            {events.map(marker => (
    <Marker
      coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
      title={marker.title}
      description={marker.type}
      image={marker.icon}
      onCalloutPress={() => this._displayDetailEvent(marker.id, marker.title, marker.type, marker.duree, marker.parcours, marker.date)}
    //   image={marker.icon}
    />
  ))}
        
    
       
      </MapView> 
      
      {this.state.show ? (
          <View style={styles.filtreContent}>  
              <Button transparent>
                <Text uppercase={false} style={{fontSize:20, fontWeight: "bold",color:"black"}}>Filtres</Text>
                <Icon name="cross" type="Entypo" style={{color:"black"}} onPress={this.ShowHideComponent}/>
              </Button>
              <Grid style={{margin:30, marginTop:10}}>
                <Col> 
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Balades</Text>  
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Dogsitting</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text  uppercase={false} style={styles.textFiltres}>Evenements</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Magasins</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Toiletteurs</Text>
                  </Button>
                </Col>
                <Col>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Hotel</Text>  
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Dressage</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text  uppercase={false} style={styles.textFiltres}>Vétérinaires</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Eleveurs</Text>
                  </Button>
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres}>Bars/Restaurant</Text>
                  </Button>
                </Col>
            </Grid>
          </View>
        ) : null}


    </Content>
  );
}
}

CarteScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor:'transparent',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  marqueur:{
    zIndex:2
  },
  searchBar:{
    backgroundColor: 'transparent',
  },
  filtreContent:{
    backgroundColor: 'rgba(255,255,255,0.6)',
    position:'absolute',
    alignContent:'center',
    alignItems:'center',
    top:0,
    bottom:0,
    left:0,
    right:0,
    paddingTop:130
  },
  btnFiltres:{
    margin:5,
    backgroundColor:"white",
    borderColor:Colors.tintColor,
    borderWidth: 2,
    width:150,
    height:40
  },
  textFiltres:{
    color:"black",
  
  }
});

export default CarteScreen