import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUser] = React.useState('');
  const [password, setPass] = React.useState('');
  const [token, setToken] = React.useState('');
  const navigation = useNavigation();
  const loginFunc = async () => {
    let data = {
      username: username,
      password: password
    }
    // axios.post("http://10.0.2.2:3000/login/", data)
    axios.post("http://localhost:3000/login/", data)
    .then((res) => {
      if(res.status === 200){
        let token_v = res.data
        AsyncStorage.setItem('token', token_v)
        setToken(token_v)
        if(token.length > 0){
            navigation.navigate('Dictionary')
          }
      } else {
        console.log("Oh no something wrong!")
        alert('Incorrect username or password')
      }
    })
  }

  const regis = async () => {
    navigation.navigate('Register')
  }

  return (
    <View >
      <TextInput
      style={{margin: 10}}
      label="username"
      value={username}
      onChangeText={text => setUser(text)}
    />
    <TextInput
      style={{margin:10}}
      label="password"
      value={password}
      onChangeText={text => setPass(text)}
    />
    <Button mode="contained" onPress={loginFunc} style={{margin: 10}}>
      Login
    </Button>
    <Button mode="contained" onPress={regis} style={{margin: 10}}>
      Sign up
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
export default Login;