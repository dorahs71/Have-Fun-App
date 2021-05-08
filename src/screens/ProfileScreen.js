import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button, Image } from 'react-native';



export default function ProfileScreen(props) {

  return (
    <View style={styles.container}>
<Text>ProfileScreen</Text>
<Button
title='go to Profile Detail Screen'
onPress={() => props.navigation.push('ProfileDetail')}
/>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
