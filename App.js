import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectMode from './screens/SelectMode'
import Quiz from './Quiz';
import Rewards from './Rewards';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <Dictionary></Dictionary>
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
