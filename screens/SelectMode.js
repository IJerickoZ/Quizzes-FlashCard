import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Appbar } from 'react-native-paper';

const SelectMode = (props) => {
    return (
        <View style={styles.container}>
            <Appbar style={styles.top}>
                <Appbar.BackAction onPress={() => console.log('Pressed Back')} />
                <Appbar.Content title="Select mode" />
            </Appbar>

            <Button icon="book-open-variant" mode="contained" onPress={() => console.log('Pressed')} style={styles.btn_1}>
                Dictionary 
            </Button>
            <Button icon="comment-question-outline" mode="contained" onPress={() => console.log('Pressed-2')} style={styles.btn_1}>
                Quiz
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_1 :{
        margin: 40,
        width: 300,
        height:50,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    top: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 40,
    },
});

export default SelectMode;