import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button, Image } from 'react-native';

export default function HomeDetailScreen(props) {

//const name = props.route.params.name || 'nothing get'
const passProps = props.route.params.passProps || 'nothing get'
  return (
    <View style={styles.container}>
<Text>HomeDetailScreen</Text>
<Text>{passProps.note}</Text>

{/* <Button
title ="go back"
onPress={()=> props.navigation.pop()}
/>
<Text>{name}</Text>
<Button
title='change first page food'
onPress={()=> props.route.params.functionA('Donut')}
/> */}
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
  
});
