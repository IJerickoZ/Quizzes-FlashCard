import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Svg, { Line, Circle, G } from "react-native-svg";
import { useFonts } from 'expo-font';

const GameOverScreen = (props) => {
  console.log(props)
  const [loaded] = useFonts({
    MochiyPopPOne: require('../assets/fonts/MochiyPopPOneRegular.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, fontFamily: 'MochiyPopPOne', color: 'red'}}>Game Over</Text>
      <Text style={{fontSize: 24, fontFamily: 'MochiyPopPOne'}}>You lose</Text>
      <Text style={{fontSize: 24, fontFamily: 'MochiyPopPOne'}}>Correct word is</Text>
      <Text style={{fontSize: 36, fontFamily: 'MochiyPopPOne'}}>{props.answer}</Text>
      <Text style={{fontSize: 24, color: '#2eab00', margin: 5}}>{props.def}</Text>
      <Svg height="300" width="300">
        <G id="man">
          <G id="head">
            <Circle
              cx="200"
              cy="80"
              r="20"
              stroke="black"
              strokeWidth="4"
              fill="white"
            />

            <G id="xEyes">
              <Line
                x1="190"
                y1="78"
                x2="196"
                y2="84"
                stroke="black"
                strokeWidth="1"
              />
              <Line
                x1="204"
                y1="78"
                x2="210"
                y2="84"
                stroke="black"
                strokeWidth="1"
              />
              <Line
                x1="190"
                y1="84"
                x2="196"
                y2="78"
                stroke="black"
                strokeWidth="1"
              />
              <Line
                x1="204"
                y1="84"
                x2="210"
                y2="78"
                stroke="black"
                strokeWidth="1"
              />
            </G>
          </G>
          <G id="body">
            <Line
              id="midBody"
              x1="200"
              y1="100"
              x2="200"
              y2="150"
              stroke="black"
              strokeWidth="4"
            />

            <Line
              id="armL"
              x1="200"
              y1="120"
              x2="170"
              y2="140"
              stroke="black"
              strokeWidth="4"
            />

            <Line
              id="armR"
              x1="200"
              y1="120"
              x2="230"
              y2="140"
              stroke="black"
              strokeWidth="4"
            />

            <Line
              id="legL"
              x1="200"
              y1="150"
              x2="180"
              y2="190"
              stroke="black"
              strokeWidth="4"
            />

            <Line
              id="legR"
              x1="200"
              y1="150"
              x2="220"
              y2="190"
              stroke="black"
              strokeWidth="4"
            />
          </G>
        </G>
        <G id="rope">
          <Line
            x1="10"
            y1="250"
            x2="150"
            y2="250"
            stroke="black"
            strokeWidth="4"
          />
          <Line
            id="door1"
            x1="150"
            y1="250"
            x2="200"
            y2="250"
            stroke="black"
            strokeWidth="4"
          />
          <Line
            id="door2"
            x1="200"
            y1="250"
            x2="250"
            y2="250"
            stroke="black"
            strokeWidth="4"
          />
          <Line
            x1="250"
            y1="250"
            x2="390"
            y2="250"
            stroke="black"
            strokeWidth="4"
          />
          <Line
            x1="100"
            y1="250"
            x2="100"
            y2="20"
            stroke="black"
            strokeWidth="4"
          />
          <Line
            x1="100"
            y1="20"
            x2="200"
            y2="20"
            stroke="black"
            strokeWidth="4"
          />

          <Line
            id="rope"
            x1="200"
            y1="20"
            x2="200"
            y2="60"
            stroke="black"
            strokeWidth="4"
          />
        </G>
      </Svg>
      <View style={{ paddingTop: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#6200ee",
            width: 390,
            height: 40,
            borderRadius: 20,
            marginTop: 10,
          }}
          onPress={()=>{
            props.GameReset()
          }}
        >
          <Text style={{fontSize: 24, color: 'white', fontFamily: 'MochiyPopPOne'}}>Try agian?</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
