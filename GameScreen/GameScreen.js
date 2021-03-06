import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  TextInput,
  Title,
  Button,
} from "react-native-paper";
import Svg, { Line, Circle, G } from "react-native-svg";
import axios from "axios";
import { random } from "./random";
import { metaData } from "./random";
import { useFonts } from 'expo-font';
import { color } from "react-native-reanimated";


const GameScreen = (props) => {
  const [loaded] = useFonts({
    MochiyPopPOne: require('../assets/fonts/MochiyPopPOneRegular.ttf'),
    Kanit: require('../assets/fonts/Kanit-Regular.ttf'),
    kanit_Extralight: require('../assets/fonts/Kanit-ExtraLight.ttf')
  });
  

  //check props recive
  //console.log(props);
  //set up before game start
  const wordList = [];
  const [score, setScore] = useState(localStorage.getItem('score'));
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
      <Text key={index} style={{ fontSize: 20, margin: 10, color: "HEXCODE" }}>
        {correctWord.includes(item) ? item : "_"}
      </Text>
    );
  });

  //check input user
  const guessInput = (inputText) => {
    setEntered(inputText);
    let g = enteredGuess;
    //console.log(g);
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
        setScore(localStorage.getItem('score'))
      });
  

  

  };


  //check input
  const checkAnswer = () => {
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
    } else {
      //wrong answer
      setWrongCount(wrongCount + 1);
      setLP(lifePoint - 1);
    }
  };

  //Game ending condition
  if (lifePoint <= 0) {
    //sent trigger
    props.GameEndHandler(true, word, hint);
  }
  if (correctCount == victoryTrigger) {
    //sent func to quiz to victory screens
    //sent trigger
    props.GameEndHandler(false, word, hint);
    //
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={styles.headerZone}
      >
        <Text style={{fontFamily:'MochiyPopPOne', fontSize: 36, color: 'rgb(98, 0, 238)' }}>
          H a n g
          <Text style={{fontFamily:'MochiyPopPOne', fontSize: 36}}>
           {" "}M a n
            <Text style={{fontFamily:'MochiyPopPOne', fontSize: 36, color: 'red' }}>
              !?
          </Text>
          </Text>
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'kanit' }}>
          ?????????????????????????????????????????????????????? : {score}
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'kanit' }}>
          ?????????????????????????????????????????????????????? : {lifePoint}
        </Text>
      </View>
      {/* Hang man */}
      <View
        style={{ flex: 2, alignItems: "center" }}
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
        <View
          style={styles.guessZone}
        >
          {status ? null : (
            <Text style={{ fontSize: 30, fontFamily: 'MochiyPopPOne'}}>
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
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              borderWidth: 1,
            }}
            placeholder= "Enter a letter here"
            label = "Guess the word"
            keyboardType="default"
            maxLength={1}
            blurOnSubmit
            editable={InputStatus}
            value={enteredGuess}
            onChangeText={(text) => guessInput(text)}
          ></TextInput>
          {status ? (

            
            <TouchableOpacity style={{
              alignItems: "center",
              backgroundColor: "#6200ee",
              borderRadius: 20,
              marginTop: 10,
              width: 390,
              height: 40,
              marginTop: 10,
              justifyContent: 'center'  
            }}
              onPress={checkAnswer}
              >
               <Text style={{fontSize: 24, color: 'white', fontFamily: 'MochiyPopPOne'}}>Guess</Text>
            </TouchableOpacity>

          ) : (
            <TouchableOpacity style={{
              alignItems: "center",
              backgroundColor: "#6200ee",
              width: 390,
              height: 40,
              borderRadius: 20,
              marginTop: 10,
              justifyContent: 'center'
              }}
              onPress={StartGame}
              >
                <Text style={{fontSize: 24, color: 'white', fontFamily: 'MochiyPopPOne'}}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* Hint Zone */}
      <View style={styles.hintZone}>
        <Title style={{ fontSize: 30, fontFamily: 'MochiyPopPOne', zIndex: 5}}> Hint : ???????????????</Title>
        <ScrollView>
          <Text style={{ fontSize: 24, paddingLeft: 5, color:'#ff4545' }}>
          {hint}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(149, 117, 205, 0.3)',
  },
  hintZone: { 
    flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    overflow: "hidden"
  },
  guessZone : {
    borderWidth: "2px",
    margin: 5,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: '#fff',
  },
  headerZone : { 
    flex: 1, 
    alignItems: "center", 
    backgroundColor: '#fff', 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default GameScreen;
