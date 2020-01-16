import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default function CarteScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

CarteScreen.navigationOptions = {
  title: 'Carte',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
