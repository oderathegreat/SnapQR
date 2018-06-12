import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './App/components/SignIn';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

                  <SignIn/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex:1,
    backgroundColor:'#4f90f2',
    justifyContent:'center',
    padding:20,



  },
});
