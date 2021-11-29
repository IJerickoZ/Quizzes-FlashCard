import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Svg, { Line, Circle, G } from "react-native-svg";

const VictoryScreen = (props) => {
  console.log(props);
  const [loaded] = useFonts({
    MochiyPopPOne: require("../assets/fonts/MochiyPopPOneRegular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
            <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: '#fff',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text
        style={{ fontFamily: "MochiyPopPOne", fontSize: 36, color: "rgb(255, 249, 77)" }}
      >
        Congrantulation!!!
      </Text>
      <Text style={{ fontFamily: "MochiyPopPOne", fontSize: 30 }}>
        You win this round
      </Text>
      </View>

      <View style={{ flex: 2, alignItems: "center" }}>
            <Svg height="200" width="400">
        <G id="body">
          <G id="head">
            <Circle
              cx="200"
              cy="80"
              r="20"
              stroke="black"
              strokeWidth="4"
              fill="white"
            />
          </G>
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

              <G id="rEyes">
                <Circle cx="193" cy="80" r="4" stroke="black" strokeWidth="1" />
                <Circle cx="207" cy="80" r="4" stroke="black" strokeWidth="1" />
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
                y2="100"
                stroke="black"
                strokeWidth="4"
              />

              <Line
                id="armR"
                x1="200"
                y1="120"
                x2="230"
                y2="100"
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
        </G>
      </Svg>
      </View>

      <Text style={{ fontSize: 30, fontFamily: "MochiyPopPOne", alignSelf: 'center', padding: 5 }}>
          The answer is
        </Text>

        <View style={{ flex: 2, backgroundColor: "#fff", borderRadius: 20, borderWidth:2, borderColor: 'black' }}>
        <Text style={{ fontSize: 36, fontFamily: "MochiyPopPOne" }}>
          {" "}{props.answer}
        </Text>
        <Text style={{ fontSize: 24, fontFamily: "MochiyPopPOne" }}>
          {" "}
          Meaning :{" "}
        </Text>
        <Text style={{ fontSize: 24, color: "#2eab00", margin: 5 }}>
          {props.def}
        </Text>
      </View>  

      <View style={{ flex: 1, paddingTop: 10, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#6200ee",
            width: 390,
            height: 40,
            borderRadius: 20,
            marginTop: 10,
          }}
          onPress={() => {
            props.GameReset();
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontFamily: "MochiyPopPOne",
            }}
          >
            Play agian
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(149, 117, 205, 0.3)",
  },
});

export default VictoryScreen;
