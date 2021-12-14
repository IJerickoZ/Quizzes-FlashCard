import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
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
import { ScrollView } from "react-native-gesture-handler";

export default function FavoriteDetail({route}) {
  const [cardfromfavorite, setcardfromfavorite] = useState([]);
  const {id} = route.params
  let result;
  useEffect(() => {
      axios.get("http://localhost:3000/getwordfromset?search="+id)
      .then((res)=>{
        result = res.data;
        setcardfromfavorite(result);
      })
  }, []);
  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, flexDirection: "column" }}>
        {cardfromfavorite.map((item) => (
          <Card
            style={{ margin: 10 }}
          >
            <Card.Content style={{ flex: 1, flexDirection: "row" }}>
              <Title style={{ flex: 4, alignItems: "flex-start" }}>
                {item.word} = {item.meaning}
              </Title>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}
