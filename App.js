import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firbase from 'firebase';


import SignIn from './App/components/SignIn';

export default class App extends React.Component {


componentWillMount(){

  const firebaseConfig = {

  apiKey:'AIzaSyCxPOgebWVUsWB7bAkGerONAUuz40U78iM',
  authDomain:'snapqr-3e14b.firebaseapp.com',





  }


firebase.initializeApp(firebaseConfig);




}




  render() {
    return (

      <View style={styles.container}>



      <View style={styles.logo}>



      </View>

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
    padding:30,




  },
});
