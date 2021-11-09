import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useFonts } from 'expo-font';




const VictoryScreen = (props) => {
  console.log(props)
  const [loaded] = useFonts({
    MochiyPopPOne: require('../assets/fonts/MochiyPopPOneRegular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'MochiyPopPOne', fontSize: 36}}>Congrantulation!!!</Text>
      <Text style={{fontFamily:'MochiyPopPOne', fontSize: 36}}>You win</Text>
      <View style={{paddingTop: 10}}>
        <Button title="Try again?" onPress={()=>{
          props.reset()
        }}></Button>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VictoryScreen;
