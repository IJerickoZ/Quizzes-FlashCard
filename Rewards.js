import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider, Text, Drawer, Appbar, ProgressBar, Colors   } from 'react-native-paper';

function Rewards() {
  return (
    <View style={{flex:1}}>
      {/* Header */}
      <Appbar.Header style={{backgroundColor: "#9575CD"}}>
        <Appbar.Content title="รางวัลฉายา" subtitle={'ท่านสามารถดูฉายาที่ปลดล็อคได้ที่นี้'} style={{font: "white"}}/>
      </Appbar.Header>

      {/* ส่วนที่ 1 */}
      <View style={{backgroundColor: "white", alignItems: 'center', justifyContent: 'center', margin: 20}} >
        <Text style={{fontSize: 35}}>ระดับความสำเร็จ</Text>
      </View>

      <ProgressBar progress={0.1} color={Colors.yellow800} style={{height:30}}/>
      {/* ส่วนที่ 2 */}
      {/* https://materialdesignicons.com/ */}
      <View style={{ flex: 3, backgroundColor: "#9575CD", alignItems: 'center'}} >
        <Text style={{fontSize: 35, color: "white"}}> ฉายา </Text>
        <ScrollView>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-outline" label="คนจรเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-circle" label="กุลีเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-circle-outline" label="ยาจนกเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star" label="เด็กหัดพูด"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star" label="เด็กหัดพูด"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="trophy" label="บุตรเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="trophy-outline" label="สามัญชนเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="shield-star" label="คหบดีเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="shield-star-outline" label="องค์รักษ์เล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-box" label="เสนาธิแห่งการเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="star-box-outline" label="อุปราชนักเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="ticket" label="รัชทายาทนักเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="ticket-outline" label="จักรพรรดิ์นักเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="decagram-outline" label="วีรชนนักเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="check-decagram" label="ตำนานนักเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="crown" label="เทพแห่งการเล่นคำ"/>
          <Drawer.Item style={{ backgroundColor: 'white', width: 300 }} icon="chess-king" label="เทวราชแห่งการเล่นคำ"/>
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