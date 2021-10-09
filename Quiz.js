import * as React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Divider, Text, Drawer, Appbar, ProgressBar, Colors   } from 'react-native-paper';
import Svg, {Line, Circle, G, Rect} from 'react-native-svg'

/* expo install react-native-svg */

function Quiz() {
  return (
    <View style={{flex: 1}}>
        <View style={styles.header}>
            <Text style={{fontSize: 40}}>Quiz Mode</Text>
            <Text style={{fontSize: 20, paddingTop: "10px"}}>คะแนนของคุณคือ : 0</Text>
            <Text style={{fontSize: 20, paddingTop: "10px"}}>โอกาสในการตอบเหลือ : 5</Text>
        </View>
        <View style={styles.quiz}>
            <View style={{flex: 3, alignItems: 'center', backgroundColor: '#ffe494'}}>
                {/* Hangman */}
                <Svg height="300" width="300">
                <G id="man">
                    <G id="head">
                        <Circle cx="200" cy="80" r="20" stroke="black" stroke-width="4" fill="white"/>
                    {/* ตากลมๆ */}
                    {/* <G id="rEyes">
                        <Circle cx="193" cy="80" r="4"/>
                        <Circle cx="207" cy="80" r="4"/>
                    </G> */}
                    <G id="xEyes" class="hide">
                        <Line x1="190" y1="78" x2="196" y2="84" stroke="black" strokeWidth="1"/>
                        <Line x1="204" y1="78" x2="210" y2="84" stroke="black" strokeWidth="1"/>
                        <Line x1="190" y1="84" x2="196" y2="78" stroke="black" strokeWidth="1"/>
                        <Line x1="204" y1="84" x2="210" y2="78" stroke="black" strokeWidth="1"/>
                    </G>
                    </G>
                    <G id="body">
                        <Line x1="200" y1="100" x2="200" y2="150" stroke="black" strokeWidth="4"/>
                        <Line id="armL" x1="200" y1="120" x2="170" y2="140" stroke="black" strokeWidth="4"/>
                        <Line id="armR" x1="200" y1="120" x2="230" y2="140" stroke="black" strokeWidth="4"/>
                        <Line id="legL" x1="200" y1="150" x2="180" y2="190" stroke="black" strokeWidth="4"/>
                        <Line id="legR" x1="200" y1="150" x2="220" y2="190" stroke="black" strokeWidth="4"/>
                    </G>
                </G>
                <G id="rope">
                    <Line x1="10" y1="250" x2="150" y2="250" stroke="black" strokeWidth="4"/>
                    <Line id="door1" x1="150" y1="250" x2="200" y2="250" stroke="black" strokeWidth="4"/>
                    <Line  id="door2" x1="200" y1="250" x2="250" y2="250" stroke="black" strokeWidth="4"/>
                    <Line x1="250" y1="250" x2="390" y2="250" stroke="black" strokeWidth="4"/>
                    <Line x1="100" y1="250" x2="100" y2="20" stroke="black" strokeWidth="4"/>
                    <Line x1="100" y1="20" x2="200" y2="20" stroke="black" strokeWidth="4"/>
                    <Line id="rope" x1="200" y1="20" x2="200" y2="60" stroke="black" strokeWidth="4"/>
                </G>
                </Svg>
            </View>
            {/* guess word */}
            <View style={{flex: 2, alignItems: 'flex-start', margin: 10}}>
                <Text style={{fontSize: 30}}>Guess the word</Text>
                <View style={{width: 380,borderWidth: '1px', margin: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 40, padding: 10}}>_ _ _ _ _</Text>
                </View>
            </View>
        </View>
        <View style={styles.hint}>
            <View style={{flex:1}}>
                <Text style={{fontSize: 30, padding: 10}}>Hint</Text>
            </View>
            <View style={{flex:3}}>
                <Text style={{fontSize: 20, padding: 10}}>
                โลกมันกลม สังคมมันเกเร
            </Text>
            </View>
            
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#ffe2cc',
    alignItems: 'center',
    paddingTop: "10px",
  },
  quiz: {
    flex: 3,
    backgroundColor: '#ccfff6',
  },
  hint:{
    flex: 1,
    backgroundColor: '#edccff',
    alignItems: 'center',
  }
});

export default Quiz;