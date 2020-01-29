import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Content, Thumbnail, CheckBox, Button, Container, Header, Item, Icon, Input, Card, View, List } from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Col, Row, Grid } from "react-native-easy-grid";


import eventsData from '../../data/eventData'
import EventItem from '../../components/EventItem'

import Colors from '../../constants/Colors'  

class CarteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      filtre: undefined,
      events: [],
    }
  }

  componentDidMount(){
    this.setState({
        events : eventsData
      })
}
  
  _displayDetailEvent = (idEvent, titleEvent) => {
    console.log(idEvent, titleEvent)
    this.props.navigation.navigate("EventDetail" , { idEvent: idEvent, titleEvent: titleEvent})
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  SelectEvent = (typeEvent) => {
    this.setState({
      events: eventsData.filter(data => data.type === typeEvent),
      filtre : typeEvent,
      show: false,
    })
  }

  render(){
  let {height, width} = Dimensions.get('window')
  events = this.state.events
  return (
    <Content>
      
     
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
                onCalloutPress={() => this._displayDetailEvent(marker.id, marker.title)}
              />
            ))}     
      </MapView> 
      
      <View style={styles.headerSearch}>
        <Card style={styles.searchBar} transparent>
            <Item transparent style={{borderWidth:0, borderColor: 'transparent'}}>
              <Input backgroundColor="white" style={{borderRadius:20}} />
              <Button rounded style={{backgroundColor:Colors.tintColor, marginLeft:-40, height:50}}>
                <Text>Chercher</Text>
              </Button>
            </Item>     
        </Card>
        <Card transparent style={{flexDirection:'row', marginTop:-5}}>
        <Button title="Hide/Show Component" onPress={this.ShowHideComponent} transparent>
              <Icon style={{color:"black"}} name="ios-arrow-forward" type="Ionicons"/>
              <Text style={{color:'balck', marginLeft:-20}}>Filtre</Text>
        </Button>
        {this.state.filtre ? (
        <Button rounded disabled style={{backgroundColor:Colors.tintColor, marginTop:8, height:30}}>
          <Text uppercase={false}>{this.state.filtre}</Text>
        </Button>
        ) : null }
        </Card>
      </View>

      {this.state.show ? (
          <View style={styles.filtreContent}>  
              <Button transparent>
                <Text uppercase={false} style={{fontSize:20, fontWeight: "bold",color:"black"}}>Filtres</Text>
                <Icon name="cross" type="Entypo" style={{color:"black"}} onPress={this.ShowHideComponent}/>
              </Button>
              <Grid style={{margin:30, marginTop:10}}>
                <Col> 
                  <Button rounded style={styles.btnFiltres}>
                    <Text uppercase={false} style={styles.textFiltres} onPress={() => this.SelectEvent("Balades")}>Balades</Text>  
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
    borderRadius:50,
    borderWidth:0,
  },
  headerSearch:{
    position:'absolute',
    top:10,
    bottom:0,
    left:20,
    right:20,
    borderWidth:0
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