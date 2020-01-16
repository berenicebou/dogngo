import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default function BaladesScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

BaladesScreen.navigationOptions = {
  title: 'Balades',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
