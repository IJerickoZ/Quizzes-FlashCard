import React, { useState } from "react";
import axios from "axios";
import { View, Text, ScrollView } from "react-native";
import { Searchbar, Appbar, DataTable } from "react-native-paper";

export default function Dictionary() {
  const [searchquery, setsearchquery] = useState("");
  const [result, setresult] = useState([]);
  function getmeaning(){
    axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/"+searchquery
    ).then((response) => {
      console.log(response.data[0].meanings[0].definitions[0].definition);
      setresult([...result,response.data[0]]);
    });
  }
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Dictionary" subtitle="Dictionary Mode" />
        <Appbar.Action icon="magnify" onPress={()=>{
          getmeaning();
        }}/>
        <Appbar.Action icon="dots-vertical"/>
      </Appbar.Header>
      <Searchbar
        style={{ marginTop: 10 }}
        placeholder="Find Word Here"
        onChangeText={(val) => {
          setsearchquery(val);
        }}
        value={searchquery}
      />
      <DataTable style={{}}>
        <DataTable.Header>
          <DataTable.Title>Vocabulary</DataTable.Title>
          <DataTable.Title>Meanning</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {result.map((item)=>
             <DataTable.Row>
             <DataTable.Cell>{item.word}</DataTable.Cell>
             <DataTable.Cell>{item.meanings[0].definitions[0].definition}</DataTable.Cell>
           </DataTable.Row>   
          )}
        </ScrollView>
      </DataTable>
    </View>
  );
}
