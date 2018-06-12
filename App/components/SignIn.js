import React from 'react';
import {
  StyleSheet,
   Text,
    View,
    TextInput,
    TouchableOpacity


   } from 'react-native';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.signin}>


     <Text style={styles.header}>Sign In </Text>

     <TextInput   style={styles.textinput} placeholder="Enter  username" underlineColorAndroid={'transparent'}/>

      <TextInput   style={styles.textinput} placeholder="Enter  password"  secureTextEntry={true} underlineColorAndroid={'transparent'}/>


      


      </View>
    );
  }
}

const styles = StyleSheet.create({
  signin: {
   alignSelf:'stretch',

  },


header:{
fontSize:24,
color:'#fff',
paddingBottom:10,
marginBottom:40,
borderBottomColor:'#0e2f60',
borderBottomWidth:'1',

}

textinput:{

alignSelf:'stretch',
height:40,
marginBottom:40,
color:'#fff',
borderBottomColor:'#010c1c',
borderBottomWidth:1,




}

});
