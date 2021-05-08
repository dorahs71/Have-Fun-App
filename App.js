import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';
import HomePage from './src/screens/HomePage'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='出去玩'
      screenOptions={{
        headerStyle: { backgroundColor: '#8fbc8f' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="出去玩" component={HomeScreen} options={{ title: '出去玩' }} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: '景點介紹' }} />

    </Stack.Navigator>
  )
}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='口袋名單'
      screenOptions={{
        headerStyle: { backgroundColor: '#8fbc8f' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="口袋名單" component={ProfileScreen} options={{ title: '口袋名單' }} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: '景點介紹' }} />

    </Stack.Navigator>
  )

}
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == '出去玩') {
              //iconName = focused? 'ios-information-circle':'ios-trophy'
              return <Image source={{ uri: 'https://64.media.tumblr.com/0973acc825eac9e5d5626bfc33f21629/692f3266fb224199-d0/s250x400/6f6cf5b4be47eaffddf0ea01f582b11476da92ed.png' }}
                style={{ width: 45, height: 45 }}
              />

            } else if (route.name == 'Home') {
              return <Image source={{ uri: 'https://img.stickers.cloud/packs/aaac3e86-d217-48ab-9608-c02c9eb2cfb4/webp/69859d5a-2439-44a8-bbb7-1e23d39c5a39.webp' }}
                style={{ width: 55, height: 55 }} />


            } else if (route.name == '口袋名單') {
              // iconName = focused ? 'ios-options' : 'ios-list'
              // return <Ionicons name={iconName} size={25} color={color} 
              return <Image source={{ uri: 'https://stickershop.line-scdn.net/stickershop/v1/product/12282/LINEStorePC/main.png;compress=true' }}
                style={{ width: 45, height: 45 }} />
            }
          }
        })}
        tabBaroptions={{
          activeTintColor: 'coral',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen name="出去玩" component={MyHomeStack} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="口袋名單" component={MyProfileStack} />
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
