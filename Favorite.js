import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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

export default function Favorite() {
  const [card, setcard] = useState([]);
  const [listcard, setlistcard] = useState(false);
  const [cardName, setcardName] = useState("");
  const [num, setnum] = useState(1);
  console.log(card);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, flexDirection: "column" }}>
          {card.map((item)=>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Title>{item.cardname}</Title>
                </Card.Content>
            </Card>
          )}
        {/*<Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>คําศัพท์ชุดที่ 1</Title>
          </Card.Content>
        </Card>
        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>คําศัพท์ชุดที่ 2</Title>
          </Card.Content>
  </Card>*/}
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
        {listcard && <TextInput label="List Name" onChangeText={(val)=>{
            setcardName(val)
        }} />}
        {listcard && (
          <Button
            title="Enter"
            onPress={() => {
              setlistcard(!listcard);
              setcard([...card,{
                  cardname:cardName,
                  cardSetNum: num,
                  cardOpen: true,
                  cardList: [
                    {
                      word: "",
                      meaning: "",
                    },
                  ],
                },
              ]);
              setnum(num+1);
            }}
          />
        )}
      </View>
    </View>
  );
}
