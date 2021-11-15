import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [username, setUser] = React.useState('');
  const [password, setPass] = React.useState('');
  const [conPass, setConPass] = React.useState('');
  const navigation = useNavigation();
  
  const back = async () => {
    navigation.navigate('Login')
  }

  const loginFunc = async () => {
    let data = {
      username: username,
      password: password
    }
    if(password === conPass){
      axios.post("http://10.0.2.2:3000/regis", data)
      .then((res) => {
        if(res.status === 200){
          console.log(res.data)
        } else {
          console.log("Oh no something wrong!")
        }
      })
    } else {
      alert("Password not match!")
    }
  }

  return (
    <View >
      <TextInput
      style={{margin: 10}}
      label="Username"
      value={username}
      onChangeText={text => setUser(text)}
    />
    <TextInput
      style={{margin:10}}
      label="Password"
      value={password}
      onChangeText={text => setPass(text)}
    />
    <TextInput
      style={{margin:10}}
      label="Confirm password"
      value={conPass}
      onChangeText={text => setConPass(text)}
    />
    <Button mode="contained" onPress={loginFunc} style={{margin: 10}}>
      Confirm
    </Button>
    <Button mode="contained"  style={{margin: 10}} onPress={back}>
      Cancel
    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Register;