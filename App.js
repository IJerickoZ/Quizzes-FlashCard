import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dictionary from './Dictionary';
import DicDetail from './DicDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from './GameScreen/Quiz';
import Favorite from "./Favorite";
import Rewards from './screens/Rewards';
import Login from './screens/login'
import FavoriteDetail from './FavoriteDetail';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Dictionary" component={Dictionary}
        options={{
          tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="book" size={24} color="#6200ee" />;
          },
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => {
          return <MaterialIcons name="favorite" size={24} color="#6200ee" />;
          },
        }}
      />
      <Tab.Screen name="Quiz" component={Quiz} 
          options={{
            tabBarIcon: ({ color, size }) => {
            return <Ionicons name="game-controller" size={24} color="#6200ee" />;
            },
          }}
      />
      <Tab.Screen name="Achievement" component={Rewards}
        options={{
            tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="trophy" size={24} color="#6200ee" />;
            },
          }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    //<Dictionary></Dictionary>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: "blueviolet" } }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Dictionary" component={MyTab} options={{ headerShown: false }}
        />
        <Stack.Screen name="DicDetail" component={DicDetail} options={
          ({route})=>{
            title:route.params.word.toString()
          }
        }/>
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="FavoriteDetail" component={FavoriteDetail}/>
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
