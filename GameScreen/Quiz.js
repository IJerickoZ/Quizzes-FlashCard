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
import GameScreen from "./GameScreen";
/* expo install react-native-svg */

const Quiz = (props) => {
  /* set up */
  /* const word = ["A","N","T"];
  const wordList = [];
  const hint = "a small insect that lives in highly organized groups.";
  const [wrongCount, setWrongCount] = useState(0);
  const [lifePoint, setLP] = useState(7);
  const [correctWord, setCorrect] = useState([]);
  const [enteredGuess, setEntered] = useState("");
   */
  const [status, setStatus] = useState(false);
  const word = [];
  const definition = [];
  axios.get("https://random-words-api.vercel.app/word").then((response) => {
    console.log(response);
    let randomWord = response.data[0].word;
    console.log(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
      word.push(randomWord.substring(i, i + 1).toUpperCase());
    }
    definition.push(response.data[0].definition)
    console.log(word);
  });

  
  /* Generate Word */

  /* word.forEach((item, index) => {
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
  }; */

  /* const checkAnswer = () => {
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
  }; */

  const GameoverHandler = () => {
    setStatus(true);
  };

  let content = (
    <GameScreen
      sentBack={GameoverHandler}
      sentWord={word}
      sendDef={definition}
    ></GameScreen>
  );

  if (status == true) {
    content = <GameOverScreen></GameOverScreen>;
  }

  return <View style={{ flex: 1 }}>{content}</View>;
};

export default Quiz;
