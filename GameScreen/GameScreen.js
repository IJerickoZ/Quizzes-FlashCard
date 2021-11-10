import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Modal,
  Alert,
} from "react-native";
import {
  Divider,
  Drawer,
  Appbar,
  ProgressBar,
  Colors,
  Button,
  Portal,
  Provider,
} from "react-native-paper";
import Svg, { Line, Circle, G } from "react-native-svg";
import axios from "axios";
import { random } from "./random";
import { metaData } from "./random";

const GameScreen = (props) => {
  //check props recive
  console.log(props);
  //set up before game start
  const wordList = [];
  const [word, setWord] = useState([]);
  const [hint, setHint] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [lifePoint, setLP] = useState(7);
  const [correctWord, setCorrect] = useState([]);
  const [enteredGuess, setEntered] = useState("");
  const [status, setStatus] = useState(false);
  const [victoryTrigger, setVictory] = useState(99);
  const [correctCount, setCorrectCount] = useState(0);
  const [InputStatus, setInputStatus] = useState(false);

  //create puzzle word
  word.forEach((item, index) => {
    wordList.push(
      <Text key={index} style={{ fontSize: 20, margin: 10 }}>
        {correctWord.includes(item) ? item : "_"}
      </Text>
    );
  });

  //check input user
  const guessInput = (inputText) => {
    setEntered(inputText);
    let g = enteredGuess;
    console.log(g);
  };

  //get ramdom word
  const getRandom = () => {
    let randomIndex = Math.floor(Math.random() * (metaData.length - 1));
    return random(randomIndex);
  }

  //game start set up
  const StartGame = () => {

    //get defination
    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + getRandom()).then((response) => {
        console.log(response);
        const randomWord = response.data[0].word;
        console.log(randomWord);
        const splitWord = [];
        for (var i = 0; i < randomWord.length; i++) {
          splitWord.push(randomWord.substring(i, i + 1).toUpperCase());
        }
        console.log(splitWord);
        setStatus(true),
        setWord(splitWord),
        setHint(response.data[0].meanings[0].definitions[0].definition),
        setVictory(response.data[0].word.length),
        setInputStatus(true),
        setLP(7)
      });
  

  

  };


  //check input
  const checkAnswer = () => {
    console.log("Upper case is " + enteredGuess.toUpperCase());
    //reset input
    setEntered("");
    //to debug correct count char
    let count = 0;
    //correct answer
    if (word.includes(enteredGuess.toUpperCase())) {
      //debug count correction if IN PUZZLE HAVE DUPLICATE CHAR
      for (var i = 0; i < word.length; i++) {
        if (enteredGuess.toUpperCase() === word[i]) {
          count += 1;
        }
      }
      const tester = correctWord;
      tester.push(enteredGuess.toUpperCase());
      setCorrectCount(correctCount + count);
      setCorrect(tester);
      setEntered("");
      console.log("Char in corect list : " + correctWord);
      console.log("Wordlist length = " + wordList.length);
      console.log("Correct count = " + correctCount);
    } else {
      //wrong answer
      setWrongCount(wrongCount + 1);
      setLP(lifePoint - 1);
    }
  };

  //Game ending condition
  if (lifePoint <= 0) {
    //sent trigger
    props.GameEndHandler(true, word);
  }
  if (correctCount == victoryTrigger) {
    //sent func to quiz to victory screens
    //sent trigger
    props.GameEndHandler(false, word);
    //
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{ flex: 0.5, backgroundColor: "#ffe494", alignItems: "center" }}
      >
        <Text style={{ fontSize: 20 }}>
          คะแนนของคุณคือ : 0
        </Text>
        <Text style={{ fontSize: 20 }}>
          โอกาสในการตอบเหลือ : {lifePoint}
        </Text>
      </View>
      {/* Hang man */}
      <View
        style={{ flex: 2, backgroundColor: "#6fff00", alignItems: "center" }}
      >
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
              {wrongCount >= 2  ? (
                <G id="rEyes">
                  <Circle cx="193" cy="80" r="4" />
                  <Circle cx="207" cy="80" r="4" />
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
      {/* Guess Zone */}
      <View style={{ flex: 1.5 }}>
        <Text style={{ fontSize: 30, alignItems: "flex-start" }}>
          Guess the word
        </Text>
        <View
          style={{
            borderWidth: "2px",
            margin: 5,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {status ? null : (
            <Text style={{ fontSize: 40, justifyContent: "center" }}>
              Press Start Button
            </Text>
          )}
          {wordList}
        </View>
        {/* input zone */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              backgroundColor: "white",
              width: 390,
              height: 50,
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              borderWidth: 1,
            }}
            keyboardType="default"
            maxLength={1}
            blurOnSubmit
            editable={InputStatus}
            value={enteredGuess}
            onChangeText={(text) => guessInput(text)}
          ></TextInput>
          {status ? (
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#6200ee",
                padding: 10,
                width: 390,
                fontColor: "white"
              }}
              onPress={checkAnswer}
            >
              <Text style={{color: "white"}}>Guess</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#6200ee",
                padding: 10,
                width: 390,
                color: "white"
              }}
              onPress={() => {
                StartGame();
              }}
            >
              <Text style={{color: "white"}}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* Hint Zone */}
      <View style={{ flex: 1}}>
        <Text style={{ fontSize: 30, padding: 10 }}>Hint : คำใบ้</Text>
        <Text style={{ fontSize: 24, padding: 10, color:'#ff4545' }}>{hint}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default GameScreen;
