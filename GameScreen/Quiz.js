import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import GameOverScreen from "./GameOverScreen";
import GameScreen from "./GameScreen";
import VictoryScreen from "./VictoryScreen";


const Quiz = (props) => {
  /* set up */
  const [status, setStatus] = useState();
  const [correctWord, setCorrect] = useState("")
  /* const word = [];
  const definition = []; */
  
  const GameEndHandler = ( condition, answer ) => {
    setStatus(condition);
    setCorrect(answer)
  };

  const GameReset = () => {
    setStatus();
    setCorrect('');
  };

  let content = (
    <GameScreen
      GameEndHandler={GameEndHandler}
      /* sentWord={word}
      sendDef={definition} */
    ></GameScreen>
  );

  if (status == true) {
    content = <GameOverScreen answer={correctWord}></GameOverScreen>;
  }
  else if(status == false){
    content = <VictoryScreen reset={GameReset}></VictoryScreen>
  }

  return <View style={{ flex: 1 }}>{content}</View>;
};

export default Quiz;
