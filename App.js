import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Text, Header, Left, Right, Thumbnail, Icon, Root} from 'native-base';
import Colors from './constants/Colors';


import StatusBar from './components/StatusBar';
import AppNavigator from './navigation/AppNavigator';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.tintColor} barStyle="light-content" />
        <Header style={styles.header}>
          <Left>
            <Image
              source={require('./assets/images/burgermenu.png')}
              fadeDuration={0}
              style={{width: 30, height: 20}}
            />
          </Left>
          <Right>
            <Image
              source={require('./assets/images/loupe.png')}
              fadeDuration={0}
              style={{width: 30, height: 30, marginRight:10}}
            />
            <Image
              source={require('./assets/images/notif.png')}
              fadeDuration={0}
              style={{width: 30, height: 30, marginRight:10}}
            />
            <Image
              source={require('./assets/images/friends.png')}
              fadeDuration={0}
              style={{width: 30, height: 30, marginRight:10}}
            />
          </Right>
        </Header>
        <Root>
        <AppNavigator />
        </Root>
      </Container>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([

    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }),
  ]);
}



function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: "white",
      elevation:10,
      shadowOpacity: 10,
      shadowOffset: {
        height: 5,
      },
      shadowRadius: 3,
    },
  appNavigator: {
    elevation:0
  }
});