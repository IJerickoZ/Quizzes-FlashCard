import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Searchbar,
  Appbar,
  DataTable,
  TextInput,
  IconButton,
  Colors,
  Card,
  Title,
  Provider,
  Portal,
  Modal,
} from "react-native-paper";

export default function Favorite({navigation}) {
  const [card, setcard] = useState([]);
  const [listcard, setlistcard] = useState(false);
  const [cardName, setcardName] = useState("");
  const [num, setnum] = useState(1);
  let result = [];
  const getCard = useCallback(async() => {
    let data = {
      token: await AsyncStorage.getItem("token")
    }
    await axios.post("http://localhost:3000/getcardItemAll", data).then((res) => {
      console.log(res.data);
      if(res.data.length === 0){
        setcard(res.data);
      } else {
        result = res.data;
        setcard(result);
        setnum(result[result.length - 1].cardSetNum + 1);
      }
    })
  }, [])
  useEffect(() => {
    getCard();
  }, [getCard]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, flexDirection: "column" }}>
        {card.map((item, index) => (
          <Card key={index} style={{ margin: 10 }} onPress={()=>{
            navigation.navigate("FavoriteDetail", {id : item.cardSetNum})
          }}>
            <Card.Content style={{ flex: 1, flexDirection: "row" }}>
              <Title style={{ flex: 4, alignItems: "flex-start" }}>
                {item.cardname}
              </Title>
              <IconButton
                icon="minus"
                size={50}
                color={Colors.red500}
                onPress={async() => {
                  await axios
                    .delete(
                      "http://localhost:3000/deletecard/" + item.cardSetNum
                    )
                    .then((res) => {
                      console.log("delete complete");
                      getCard();
                    });
                }}
              />
            </Card.Content>
          </Card>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          margin: 10,
        }}
      >
        <IconButton
          icon="plus"
          size={50}
          color={Colors.yellow500}
          onPress={() => {
            setlistcard(!listcard);
          }}
        />
        {listcard && (
          <TextInput
            label="List Name"
            onChangeText={(val) => {
              setcardName(val);
            }}
          />
        )}
        {listcard && (
          <Button
            title="Enter"
            onPress={async() => {
              setlistcard(!listcard);
              let token = await AsyncStorage.getItem("token")
              let data = {
                cardname: cardName,
                cardSetNum: num,
                cardOpen: true,
                token: token,
                cardList: [
                ],
              };
              let number = {
                lek: num,
              };
              await axios.post("http://localhost:3000/setcard", data).then((res) => {
                console.log(res.data);
                getCard();
              });
              setnum(num + 1);
            }}
          />
        )}
      </View>
    </View>
  );
}
