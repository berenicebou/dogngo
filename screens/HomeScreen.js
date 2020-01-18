import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { 
  Container, 
  Text, 
  Button,
  Content,
  Input,
  Item,
  Thumbnail,
  Left, 
} from 'native-base';

import news from '../data/newsData';

import NewItem from './NewItem';
import AdItem from './AdItem';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Content>
          <Content>
            <Left>
              <Thumbnail source={require('../assets/images/avatar/avatar.jpg')} style={{flex: 1}}/>
            </Left>
            <Content>
              <Item regular>
                <Input placeholder="Ecrire quelque chose..." />
              </Item>
            </Content>
          </Content>
          <Content>
            <Button rounded>
              <Text>Poster</Text>
            </Button>
          </Content>
        </Content>

        <View style={styles.sponso}>
        <Content>
          <AdItem />
        </Content>
        </View>

        <Content>
        <FlatList
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NewItem new={item}/>}
        />
        </Content>
        
      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  formposts: {
    flex:1,
    flexDirection:'row',
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:50,
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin:10,
    padding:10,
  },
});
