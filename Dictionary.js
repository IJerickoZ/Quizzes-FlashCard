import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Searchbar, Appbar, DataTable } from "react-native-paper";

export default function Dictionary() {
  const [searchquery, setsearchquery] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Dictionary" subtitle="Dictionary Mode" />
        <Appbar.Action icon="dots-vertical" />
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
          <DataTable.Row>
            <DataTable.Cell>Frozen</DataTable.Cell>
            <DataTable.Cell>เย็นไอสัส</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Hot</DataTable.Cell>
            <DataTable.Cell>ร้อนไอสัส</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Wind</DataTable.Cell>
            <DataTable.Cell>ลมไอสัส</DataTable.Cell>
          </DataTable.Row>
        </ScrollView>
      </DataTable>
    </View>
  );
}
