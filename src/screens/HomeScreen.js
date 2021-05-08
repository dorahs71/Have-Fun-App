import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button, Image, Flatlist } from 'react-native';

var MOCKED_DATA = [
  {
    id:'1',
    note:'恭喜完成寫完ＡＰＰ成就!!',
    date:'2021/4/30 12:30'
  },
  {
    id:'2',
    note:'終於邁入人生下一階段',
    date:'2021/7/30 12:30'
  },
  {
    id:'3',
    note:'台北雨綿綿',
    date:'2021/8/20 10:30'
  },
  {
    id:'4',
    note:'山河令好看',
    date:'2021/8/30 12:30'
  },
  {
    id:'5',
    note:'龔郡超美～～～',
    date:'2021/9/10 12:30'
  },
  {
    id:'6',
    note:'受個性超穩重> <',
    date:'2021/9/23 10:30'
  },
  {
    id:'7',
    note:'覺得很甜',
    date:'2021/9/27 12:30'
  },
  {
    id:'8',
    note:'最近變胖了',
    date:'2021/9/30 12:30'
  },
  {
    id:'9',
    note:'希望一切早點塵埃落定',
    date:'2021/10/03 10:30'
  },
  {
    id:'10',
    note:'母親節吃大餐',
    date:'2021/10/15 12:30'
  },
  {
    id:'11',
    note:'期待新劇～～',
    date:'2021/10/16 12:30'
  },
  {
    id:'12',
    note:'終於最後一個了',
    date:'2021/10/20 10:30'
  },
]

export default function HomeScreen(props) {

const [dataSource, setDataSource] = useState([])

useEffect(()=>{
  var book = MOCKED_DATA
setDataSource(book)
})

const showNoticeDetail=(cases)=>{
  props.navigation.push('HomeDetail', {passProps:cases})
}
const renderBook =(cases)=>{
  return(
    <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
      <View>
<View style={styles.MainView}>
{/* <Image></Image> */}

<View style={{flex:1}}>    
<Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:15,marginTop:8}}>
  {cases.note}
</Text>

<Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:13,marginTop:8, marginBottom:8}}>
{cases.date}
</Text>
</View>
<Image source={require('../../assets/image/arrow-icon.png')} style={styles.image}/>
</View>
<View style= {styles.seperator}/>
</View>
    </TouchableOpacity>
  )
}


return (
    <View>
{/* <Text>HomeScreen</Text>
<Text>{food}</Text>
<Button
title='go to next page'
onPress= {()=> props.navigation.push('HomeDetail',{name: 'Dora', functionA:(arg)=>changeFood(arg)})} //傳內頁key值
/> */}
<Flatlist
data={dataSource}
renderItem={cases => renderBook(cases.item)}
ketExtracto= {cases => cases.id}
style={{backgroundColor:'white'}}
/>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView:{
    height:80,
    flexDirection:'row',
justifyContent:'center',
alignItems:'center',
backgroundColor:'white',
padding:8
  },
  seperator:{
    height:1,
    backgroundColor:'chocolate'
  },
  image:{
    width: 20,
  height:20
  }
});


