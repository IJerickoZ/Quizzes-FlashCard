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

  /* function getRandom(){
        axios.get(
        "https://random-word-api.herokuapp.com/word?number=1"
      ).then((response) => {
        console.log(response.data[0]);
        randomWord = response.data[0];
        console.log(randomWord)
        for(var i=0 ; i < randomWord.length ; i++){
            word.push(randomWord.substring(i, i+1).toUpperCase())
        }

        console.log(word)
      });
    } */

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

  let content = <GameScreen sentBack={GameoverHandler}></GameScreen>;

  if (status == true) {
    content = <GameOverScreen></GameOverScreen>;
  }

  return <View>{content}</View>;
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

export default Quiz;
