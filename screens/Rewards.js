import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider, Text, Drawer, Appbar, ProgressBar, Colors   } from 'react-native-paper';
import { useFonts } from "expo-font";


function Rewards({navigation}) {
  const [loaded] = useFonts({
    Kanit: require("../assets/fonts/Kanit-Regular.ttf"),
  });
  const [score, setScore] = React.useState(localStorage.getItem('score'))

  //hook when click tab navigation to re-render
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setScore(localStorage.getItem('score'))
    });
    return unsubscribe;
  }, [navigation]);

  //prevent infinite loop
  //set up progress bar
  let progress = 0;
  if(score >= 1 && score < 5){
    progress = 1
  }
  if(score >=5 && score < 10){
    progress = 2
  }
  if(score >= 10 && score < 20){
    progress = 3
  }
  if(score >= 20 && score < 30){
    progress = 4
  }
  if(score >= 30 && score < 50){
    progress = 5
  }
  if(score >= 50 && score < 70){
    progress = 6
  }
  if(score >= 70 && score < 100){
    progress = 7
  }
  if(score >= 100 && score < 125){
    progress = 8
  }
  if(score >= 125 && score < 150){
    progress = 9
  }
  if(score >= 150 && score < 200){
    progress = 10
  }
  if(score >= 200){
    progress = 11
  }
  
  return (
    <View style={{flex:1}}>
      {/* ส่วนที่ 1 */}
      <View style={{backgroundColor: "white", alignItems: 'center', justifyContent: 'center', margin: 20, borderRadius: 20}} >
        <Text style={{fontSize: 35, fontFamily: 'Kanit'}}>รางวัลความสำเร็จ</Text>
        <Text style={{fontSize: 16, fontFamily: 'Kanit'}}>แต้มชนะสะสมของคุณคือ : {score}</Text>
      </View>

      <ProgressBar progress={progress*0.091} color={Colors.yellow800} style={{height:30}}/>
      {/* ส่วนที่ 2 */}
      {/* https://materialdesignicons.com/ */}
      <View style={{ flex: 3, backgroundColor: "#9575CD", alignItems: 'center'}} >
        <Text style={{fontSize: 35, color: "#fff", fontFamily: 'Kanit'}}> ฉายา </Text>
        <ScrollView>
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 1 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 1 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="baby-face" label="เด็กฝึกหัด"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 5 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 5 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="duck" label="เป็ดเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 10 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 10 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="account" label="คนจรเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 20 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 20 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="hiking" label="กุลีเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 30 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 30 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="account-hard-hat" label="นักเล่นคำฝึกหัด"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 50 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 50 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="face-agent" label="นักเล่นคำมือฉมัง"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 70 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 70 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="incognito" label="ยอดนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 100 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 100 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="sword-cross" label="วีรชนนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 125 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 125 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="meditation" label="ตำนานนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 150 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 150 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="crown" label="เทพแห่งการเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          <Text style={{color: '', fontSize: 18, fontFamily: 'Kanit'}}>เล่นเกม Quiz ชนะ 200 ครั้ง เพื่อปลดล็อค</Text>
          {score >= 200 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="chess-king" label="เทวราชแห่งการเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
        </ScrollView>
        
      </View>
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
});

export default Rewards;