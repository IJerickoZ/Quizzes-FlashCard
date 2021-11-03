import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Divider,
  Text,
  Drawer,
  Appbar,
  ProgressBar,
  Colors,
  Button,
} from "react-native-paper";
import Svg, { Line, Circle, G, Rect } from "react-native-svg";
import axios from "axios";
import GameOverScreen from "./GameOverScreen";

const GameScreen = (props) => {
  const word = ["A", "N", "T"];
  const wordList = [];
  const hint = "a small insect that lives in highly organized groups.";
  const [wrongCount, setWrongCount] = useState(0);
  const [lifePoint, setLP] = useState(7);
  const [correctWord, setCorrect] = useState([]);
  const [enteredGuess, setEntered] = useState("");
  const [status, setStatus] = useState(false);

  word.forEach((item, index) => {
    wordList.push(
      <Text key={index} style={{ fontSize: 20, margin: 10 }}>
        {correctWord.includes(item) ? item : "_"}
      </Text>
    );
  });

  const guessInput = (inputText) => {
    setEntered(inputText);
    let g = enteredGuess;
    console.log(g);
  };

  const checkAnswer = () => {
    console.log("Upper case is " + enteredGuess.toUpperCase());
    if (word.includes(enteredGuess.toUpperCase())) {
      const tester = correctWord;
      tester.push(enteredGuess.toUpperCase());
      setCorrect(tester);
      setEntered("");
      console.log(correctWord);
      console.log(wordList);
    } else {
      setWrongCount(wrongCount + 1);
      setLP(lifePoint - 1);
    }
  };

  if(word.length == correctWord.length){
      props.sentBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40 }}>Quiz Mode</Text>
        <Text style={{ fontSize: 20, paddingTop: "10px" }}>
          คะแนนของคุณคือ : 0
        </Text>
        <Text style={{ fontSize: 20, paddingTop: "10px" }}>
          โอกาสในการตอบเหลือ : {lifePoint}
        </Text>
      </View>
      <View style={styles.quiz}>
        <View
          style={{ flex: 3, alignItems: "center", backgroundColor: "#ffe494" }}
        >
          {/* Hangman */}
          <Svg height="300" width="300">
            <G id="man">
              <G id="head">
                {wrongCount >= 2 ? (
                  <Circle
                    cx="200"
                    cy="80"
                    r="20"
                    stroke="black"
                    strokeWidth="4"
                    fill="white"
                  />
                ) : null}
                {wrongCount >= 2 && wrongCount < 7 ? (
                  <G id="rEyes">
                    <Circle cx="193" cy="80" r="4" />
                    <Circle cx="207" cy="80" r="4" />
                  </G>
                ) : null}
                {wrongCount >= 7 ? (
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
                ) : null}
              </G>
              <G id="body">
                {wrongCount >= 3 ? (
                  <Line
                    id="midBody"
                    x1="200"
                    y1="100"
                    x2="200"
                    y2="150"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : null}
                {wrongCount >= 4 ? (
                  <Line
                    id="armL"
                    x1="200"
                    y1="120"
                    x2="170"
                    y2="140"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : null}
                {wrongCount >= 5 ? (
                  <Line
                    id="armR"
                    x1="200"
                    y1="120"
                    x2="230"
                    y2="140"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : null}
                {wrongCount >= 6 ? (
                  <Line
                    id="legL"
                    x1="200"
                    y1="150"
                    x2="180"
                    y2="190"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : null}
                {wrongCount >= 7 ? (
                  <Line
                    id="legR"
                    x1="200"
                    y1="150"
                    x2="220"
                    y2="190"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : null}
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
              {wrongCount >= 1 ? (
                <Line
                  id="rope"
                  x1="200"
                  y1="20"
                  x2="200"
                  y2="60"
                  stroke="black"
                  strokeWidth="4"
                />
              ) : null}
            </G>
          </Svg>
        </View>
        {/* guess word */}
        <View style={{ flex: 2, alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 30 }}>Guess the word</Text>
          <View
            style={{
              flex: 1,
              width: 380,
              borderWidth: "1px",
              margin: 5,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {wordList}
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TextInput
              style={{ backgroundColor: "white", width: 200, height: 50 }}
              keyboardType="default"
              maxLength={1}
              blurOnSubmit
              value={enteredGuess}
              onChangeText={(text) => guessInput(text)}
            ></TextInput>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10,
                width: 390,
              }}
              onPress={checkAnswer}
            >
              <Text>Guess</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.hint}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, padding: 10 }}>Hint</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 20, padding: 10 }}>{hint}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#ffe2cc",
    alignItems: "center",
    paddingTop: "10px",
  },
  quiz: {
    flex: 3,
    backgroundColor: "#ccfff6",
  },
  hint: {
    flex: 1,
    backgroundColor: "#edccff",
    alignItems: "center",
  },
});

export default GameScreen;
