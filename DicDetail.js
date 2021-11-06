import React from "react";
import { View, Text } from "react-native";
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
} from "react-native-paper";

export default function DicDetail({ route }) {
  const { word, meaning } = route.params;
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
            <IconButton
              icon="star"
              size={50}
              color={Colors.yellow500}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </Card.Content>
      </Card>
      {/*{meaning.map((item) => (
        <View>
          <Text>Part of Speech: {item.partOfSpeech}</Text>
          <Text>Definitions: {item.definitions[0].definition}</Text>
          <Text>Example: {item.definitions[0].example}</Text>
        </View>
      ))}*/}
      {/*<View style={{ flex: 1 }}>
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
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
            </View>*/}
    </View>
  );
}
