import React, { useState } from "react";
import axios from "axios";
import { View, Text, ScrollView } from "react-native";
import { Searchbar, Appbar, DataTable, Button, TextInput } from "react-native-paper";

export default function Dictionary({ navigation }) {
  const [searchquery, setsearchquery] = useState("");
  const [result, setresult] = useState([]);
  function getmeaning() {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + searchquery)
      .then((response) => {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setresult([...result, response.data[0]]);
      });
  }
  return (
    <View style={{ flex: 1 }}>
      <TextInput style={{marginBottom:5}}
        placeholder="Search Vocabulary Here"
        mode="outlined"
        label="Search"
        value={searchquery}
        onChangeText={(val) => {
          setsearchquery(val);
        }}
      />
      <Button
        icon="star"
        mode="contained"
        onPress={() => {
          getmeaning();
        }}
      >
        Search Here
      </Button>
      <DataTable style={{}}>
        <DataTable.Header>
          <DataTable.Title>Vocabulary</DataTable.Title>
          <DataTable.Title>Meanning</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {result.map((item) => (
            <DataTable.Row>
              <DataTable.Cell
                onPress={() => {
                  navigation.navigate("DicDetail", {
                    word: item.word,
                    meaning: item.meanings,
                  });
                }}
              >
                {item.word}
              </DataTable.Cell>
              <DataTable.Cell>
                {item.meanings[0].definitions[0].definition}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
      </DataTable>
    </View>
  );
}
