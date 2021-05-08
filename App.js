import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyHomeStack(){
  return(
  <Stack.Navigator
    initialRouteName='Home'
screenOptions={{
   headerStyle:{backgroundColor:'tomato'},
   headerBackTitle:'返回',
   headerTintColor:'white'
 }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{title:'My Home'}} />
    
    </Stack.Navigator>
  )
}

function MyProfileStack(){
  return(
    <Stack.Navigator
      initialRouteName='Profile'
  screenOptions={{
     headerStyle:{backgroundColor:'tomato'},
     headerBackTitle:'return',
     headerTintColor:'white'
   }}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{title:'My Profile'}} />
      
      </Stack.Navigator>
    )

}
export default function App() {

  return (
<NavigationContainer> 
<Tab.Navigator
initialRouteName='Profile'
screenOptions ={({route})=>({
tabBarIcon:({color, focused}) => {
  let iconName
if(route.name =='Home') {
//iconName = focused? 'ios-information-circle':'ios-trophy'
return <Image source ={{uri:'https://stickershop.line-scdn.net/stickershop/v1/product/1287660/LINEStorePC/main.png;compress=true'}}
style={{width:30, height:30}}
/>

}else if(route.name =='Profile'){
  iconName = focused? 'ios-options':'ios-list'
return <Ionicons name ={iconName} size={25} color={color}/>
}
}
})}
tabBaroptions={{
activeTintColor:'coral',
inactiveTintColor:'white',
}}
>
  <Tab.Screen name="Home" component={MyHomeStack} />
  <Tab.Screen name="Profile" component={MyProfileStack} />
</Tab.Navigator>
</NavigationContainer>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})
