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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Quiz = (props) => {
  /* set up */
  const [status, setStatus] = useState();
  const [correctWord, setCorrect] = useState("");
  const [defination, setDef] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token'))
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

  const incScore = () => {
    let user_token = {
      token : token
    }
    // in EM use => "http://10.0.2.2:3000/" + route path
    axios.put("http://localhost:3000/score", user_token)
    .then((res) => {
      if(res.status === 200){
        let score_s = res.data.score
        AsyncStorage.setItem('score', score_s)
      } else {
        console.log("Error found!?")
      }
    })
  }


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
    incScore();
    content = <VictoryScreen answer={correctWord} GameReset={GameReset} def={defination}></VictoryScreen>
  }

  return <View style={{ flex: 1 }}>{content}</View>;
};

export default Quiz;
