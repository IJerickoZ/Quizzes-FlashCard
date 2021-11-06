import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectMode from './screens/SelectMode'
import Quiz from './Quiz';
import Rewards from './Rewards';
import Dictionary from './Dictionary';
import DicDetail from './DicDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    //<Dictionary></Dictionary>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dictionary" screenOptions={{ headerStyle: { backgroundColor: "blueviolet" } }}>
        <Stack.Screen name="Dictionary" component={Dictionary}/>
        <Stack.Screen name="DicDetail" component={DicDetail} options={
          ({route})=>{
            title:route.params.word.toString()
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
