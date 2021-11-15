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
  const [correctWord, setCorrect] = useState("");
  const [defination, setDef] = useState("");
  /* const word = [];
  const definition = []; */
  
  const GameEndHandler = ( condition, answer, def ) => {
    setStatus(condition);
    setCorrect(answer);
    setDef(def);
  };

  const GameReset = () => {
    setStatus();
    setCorrect('');
    setDef('');
  };

  let content = (
    <GameScreen
      GameEndHandler={GameEndHandler}
      /* sentWord={word}
      sendDef={definition} */
    ></GameScreen>
  );

  if (status == true) {
    content = <GameOverScreen answer={correctWord} GameReset={GameReset} def={defination}></GameOverScreen>;
  }
  else if(status == false){
    content = <VictoryScreen answer={correctWord} GameReset={GameReset} def={defination}></VictoryScreen>
  }

  return <View style={{ flex: 1 }}>{content}</View>;
};

export default Quiz;
