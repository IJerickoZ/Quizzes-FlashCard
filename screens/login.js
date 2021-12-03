import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Animated, Text, TouchableOpacity } from "react-native";
import { Input, Header, Button, Icon } from "../components";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { height } = Dimensions.get("screen");

export default function test() {
  const [alignment, setAlignment] = useState(new Animated.Value(0));
  const [username, setUser] = React.useState('');
  const [password, setPass] = React.useState('');
  const [token, setToken] = React.useState('');
  const [username2, setUser2] = React.useState('');
  const [password2, setPass2] = React.useState('');
  const [conPass, setConPass] = React.useState('');
  const navigation = useNavigation();

  const clearState = () => {
    setUser2('');
    setPass2('');
    setConPass('');
  }
  const loginFunc = async () => {
    let data = {
      username: username,
      password: password
    }
    if(username === '' || password === '') {
        return alert('Please fill in all fields');
    }
    // axios.post("http://10.0.2.2:3000/login/", data)
    axios.post("http://localhost:3000/login/", data)
    .then((res) => {
      if(res.status === 200){
        let token_v = res.data.token
        let score_s = res.data.score
        AsyncStorage.setItem('token', token_v)
        AsyncStorage.setItem('score', score_s)
        setToken(token_v)
        if(token.length > 0){
            navigation.navigate('Dictionary')
          }
      }
    })
    .catch((err) => {
        alert('Incorrect username or password')
    })
  }

  const regisFunc = async () => {
    let data = {
      username: username2,
      password: password2
    }
    if(password2.length === 0 || username2.length === 0 || conPass.length === 0){
        alert('Please fill all the input')
    } else if(password2 === conPass){
      // axios.post("http://10.0.2.2:3000/regis", data)
      axios.post("http://localhost:3000/regis", data)
      .then((res) => {
        console.log(res)
        if(res.status === 200){
          console.log(res.data)
          alert('success!')
          backToMainComponent()
        }
      })
      .catch((err) => {
          alert('Username already exist.')
      })
    } else {
      alert("Password not match!")
    }
  }

  const toDocumentsPage = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const backToMainComponent = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(); 
  };

  const heightIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  const opacityIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const documentPageOpacityIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const documentPageHeightIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const mainContainerStyle = {
    height: heightIntropolate,
    opacity: opacityIntropolate,
  };

  const documentContainerStyle = {
    height: documentPageHeightIntropolate,
    opacity: documentPageOpacityIntropolate,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mainContainer, mainContainerStyle]}>
        <View style={{ width: "100%" }}>
          <Header title="Sign In" subTitle="H A N G M A N !" />
        </View>
        <View>
          <Input secureTextEntry={false} icon="md-person" placeholder="Username" value={username} onChangeText={text => setUser(text)}/>
          <Input secureTextEntry={true} icon="lock-closed" placeholder="Password" value={password} onChangeText={text => setPass(text)} />
        </View>
        <Button onPress={() => {loginFunc()}} title="Sign in" />
        <Button onPress={() => toDocumentsPage()} title="Sign Up" background="#fff" color="black"/>
      </Animated.View>
      <Animated.View style={[styles.mainContainer, documentContainerStyle]}>
        <Icon
          name="chevron-left"
          onPress={() => backToMainComponent()}
          size={30}
        />
        <View style={{ width: "100%" }}>
          <Header
            title="Sing Up"
            subTitle="Create Your Account Now"
          />
        </View>
        <View>
            <Input icon="md-person" placeholder="Username" value={username2} onChangeText={text => setUser2(text)} secureTextEntry={false}/>
          <Input icon="lock-closed" placeholder="Password" value={password2} onChangeText={text => setPass2(text)} secureTextEntry={true}/>
          <Input icon="lock-closed" placeholder="Confirm Password" value={conPass} onChangeText={text => setConPass(text)} secureTextEntry={true}/>
        </View>
        <Button title="NEXT" onPress={() => {regisFunc()}}/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});