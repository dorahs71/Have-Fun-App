import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'

export default function HomeDetailScreen(props) {

  const passProps = props.route.params.passProps || 'Nothing Get'
  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceVertical={true} keyboardDismissMode='on-drag'>
        <Image source={{ uri: passProps.Photo }}
          style={styles.img} />
        <Text style={{ fontSize: 18, color: 'coral', marginTop: 10 }}>
          {passProps.Name}</Text>
        <Text style={{ fontSize: 15, color: '#20b2aa', marginTop: 10 }}>
          {passProps.City + " " + passProps.Town}</Text>
        <Text style={{ fontSize: 13, color: '#778899', marginTop: 10 }}>
          景點介紹：{passProps.Introduction}</Text>
        <Text style={styles.text}>
          地址：{passProps.Address}</Text>
        <Text style={styles.text}>
          電話：{passProps.Tel}</Text>

      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    width: 450,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: 'gray',
    fontSize: 12,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',

  }

});
