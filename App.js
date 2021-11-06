import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectMode from './screens/SelectMode'
import Dictionary from './Dictionary';
import DicDetail from './DicDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from './GameScreen/Quiz';
import Favorite from "./Favorite";
import Rewards from './Rewards';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Dictionary" component={Dictionary}/>
      <Tab.Screen name="Favorite" component={Favorite}/>
      <Tab.Screen name="Quiz" component={Quiz}/>
      <Tab.Screen name="Achievement" component={Rewards}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    //<Dictionary></Dictionary>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dictionary" screenOptions={{ headerStyle: { backgroundColor: "blueviolet" } }}>
        <Stack.Screen name="Dictionary" component={MyTab} options={{ headerShown: false }}
        />
        <Stack.Screen name="DicDetail" component={DicDetail} options={
          ({route})=>{
            title:route.params.word.toString()
          }
        }/>
        <Stack.Screen name="Quiz" component={Quiz} />
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
