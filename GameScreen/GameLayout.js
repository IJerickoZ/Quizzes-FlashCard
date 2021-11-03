import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectMode from '../screens/SelectMode'
import Quiz from './Quiz';
import Rewards from '../Rewards';
import GameScreen from './GameScreen';

function GameLayout() {
  return (
    <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: "#ffe494"}}>
            <Text>Zone 1</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "red"}}>
            <Text>Zone 2</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "green"}}>
            <Text>Zone 3</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "blue"}}>
            <Text>Zone 4</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

export default GameLayout;
