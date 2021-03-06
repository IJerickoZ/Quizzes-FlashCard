import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  Searchbar,
  Appbar,
  DataTable,
  Button,
  TextInput,
  IconButton,
  Colors,
  Card,
  Title,
  Paragraph,
  List,
} from "react-native-paper";

export default function DicDetail({ route }) {
  const { word, meaning } = route.params;
  const [card, setcard] = useState([]);
  const [wordcheck, setwordcheck] = useState([]);
  const navigation = useNavigation();
  let result;
  let check;
  let sup = ["aa", "bb"]
  let num;
  useEffect(() => {
    const fetchData = async () => {
      let data = {
        token: await AsyncStorage.getItem("token"),
      };
      axios.post("http://localhost:3000/getcardItemAll", data).then((res) => {
        console.log(res.data);
        result = res.data;
        setcard(result);
      });
    };
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Title>Vocabulary : {word}</Title>
          <Paragraph>Meaning</Paragraph>
          {meaning.map((item) => (
            <View>
              <Text>Part of Speech: {item.partOfSpeech}</Text>
              <Text>Definitions: {item.definitions[0].definition}</Text>
              <Text>Example: {item.definitions[0].example}</Text>
            </View>
          ))}
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {/*<IconButton
              icon="star"
              size={50}
              color={Colors.yellow500}
              onPress={()=>{

              }}
            />*/}
            <List.Accordion title="Add This Word">
              {card.map((item) => (
                <List.Item
                  title={item.cardname}
                  onPress={() => {
                    let data = {
                      word: word,
                      meaning: meaning[0].definitions[0].definition,
                      in: item.cardSetNum,
                    };
                    axios
                      .get(
                        "http://localhost:3000/getcardItem?search=" + data.in
                      )
                      .then((res) => {
                        //console.log(res.data.cardList);
                        //setwordcheck(res.data.cardList);
                        check = res.data.cardList
                        console.log(check.length)
                        num = check.length
                        console.log(num);
                        if(num != 0){
                          for (let i = 0; i < num; i++) {
                            if (word == check[i].word) {
                              console.log("No");
                            }else if (i == check.length-1 && check[i].word != word) {
                              axios
                                .put("http://localhost:3000/updatecard", data)
                                .then((res) => {
                                  alert("Add Complete");
                                  navigation.navigate("Dictionary");
                                });
                            }else if(i == check.length-1 && check[i].word == word){
                              alert("this word is has in this card")
                            }
                          }
                        }else{
                          axios.put("http://localhost:3000/updatecard", data)
                      .then((res)=>{
                        alert("Add Complete")
                        navigation.navigate('Dictionary')
                      })
                        }
                      });
                    /*axios.put("http://localhost:3000/updatecard", data)
                  .then((res)=>{
                    alert("Add Complete")
                    navigation.navigate('Dictionary')
                  })*/
                  }}
                />
              ))}
              {/*<List.Item title="First item" />
              <List.Item title="Second item" />*/}
            </List.Accordion>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}
