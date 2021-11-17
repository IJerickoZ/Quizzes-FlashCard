import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider, Text, Drawer, Appbar, ProgressBar, Colors   } from 'react-native-paper';

function Rewards() {
  const [score, setScore] = React.useState(localStorage.getItem('score'))
  const [progress, setProgress] = React.useState()

  
  return (
    <View style={{flex:1}}>
      {/* ส่วนที่ 1 */}
      <View style={{backgroundColor: "white", alignItems: 'center', justifyContent: 'center', margin: 20}} >
        <Text style={{fontSize: 35}}>รางวัลความสำเร็จ</Text>
        <Text>แต้มชนะสะสมของคุณคือ : {score}</Text>
      </View>

      <ProgressBar progress={progress} color={Colors.yellow800} style={{height:30}}/>
      {/* ส่วนที่ 2 */}
      {/* https://materialdesignicons.com/ */}
      <View style={{ flex: 3, backgroundColor: "#9575CD", alignItems: 'center'}} >
        <Text style={{fontSize: 35, color: "white"}}> ฉายา </Text>
        <ScrollView>
          <Text>เล่นเกม Quiz ชนะ 1 ครั้ง</Text>
          {score >= 1 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star" label="เด็กฝึกหัด"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 5 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star" label="เป็ดเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 10 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-outline" label="คนจรเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 20 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-circle" label="กุลีเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 30 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="trophy-outline" label="นักเล่นคำฝึกหัด"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 50 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="trophy-outline" label="นักเล่นคำฉมัง"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 70 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="trophy-outline" label="ยอดนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 100 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="decagram-outline" label="วีรชนนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 125 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="check-decagram" label="ตำนานนักเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
          {score >= 150 ? (<Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="crown" label="เทพแห่งการเล่นคำ"/>) : <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="" label="?????"/>}
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