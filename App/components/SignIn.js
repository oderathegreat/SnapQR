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


     <Text style={styles.header}>Sign In here </Text>

     <TextInput   style={styles.textInput} placeholder="Enter  username" underlineColorAndroid={'transparent'}/>

      <TextInput   style={styles.textInput} placeholder="Enter  password"  secureTextEntry={true} underlineColorAndroid={'transparent'}/>


      <TouchableOpacity style={styles.button}>

    <Text style={styles.btnSignInText}> LOGIN </Text>
      </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  signin: {
   alignSelf:'stretch',


  },


header:{
fontSize:18,
color:'#fff',
paddingBottom:10,
marginBottom:40,


},

textInput:{
alignSelf:'stretch',
height:25,
marginBottom:40,
backgroundColor:'#f9fafc',
padding:30,
borderBottomColor:'#ccc',
borderBottomWidth:1,
color:'#0a1d3a',

},

btnSignInText:{

color:'#FFF',
fontWeight:'800',
textAlign:'center',

},

button:{

backgroundColor:'#0a1d3a',
paddingVertical:15,





}



});
