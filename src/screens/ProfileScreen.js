import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'


export default function ProfileScreen(props) {

  const [myListCount, setMyListCount] = useState(0)
  const [myListName, setMyListName] = useState([])

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      loadStorage()
    })
    return unsubscribe

  }, [myListCount])

  const showNoticeDetail = (cases) => {
    props.navigation.push('ProfileDetail', { passProps: cases })
  }

  const loadStorage = async () => {
    let listsGet = await StorageHelper.getMySetting('myList')
    let a = JSON.parse(listsGet)

    //方法2
    setMyListCount(a.length)
    setMyListName(a)

  }

  return (
    <View>
      <View style={styles.favorite}>
        <Text style={{ fontSize: 18, color: '#6a5acd', fontWeight: '500' }}>就是想去玩</Text>
        <View style={styles.favoritesNum}>
          <Text style={styles.num}>{myListCount}</Text>
        </View>
      </View>

      {
        myListName.map((cases, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => showNoticeDetail(cases)}>
              <View>
                <View style={styles.MainView}>
                  <Image
                    source={{ uri: cases.Photo }}
                    style={styles.thumbnail} />
                  <View flex={1} justifyContent='center' style={{ marginLeft: 16 }}>

                    <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: '#1e90ff', fontSize: 15, marginTop: 8 }}>
                      {cases.City + cases.Town}</Text>

                    <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'navy', marginTop: 8, fontSize: 12, marginBottom: 8 }}>
                      {cases.Name}</Text>

                  </View>
                  <Image source={require('../../assets/image/arrow-icon.png')} style={styles.image} />
                </View>
                <View style={styles.seperator} />
              </View>
            </TouchableOpacity>
          )
        })
      }
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
  favorite: {
    borderBottomColor: '#f0f0f0',
    //borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  favoritesNum: {
    backgroundColor: '#4169e1',
    borderRadius: 8,
    padding: 5,
    marginLeft: 5,
  },
  num: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  MainView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  thumbnail: {
    width: 50,
    height: 60,
    marginRight: 20
  },
  seperator: {
    height: 1,
    backgroundColor: '#f08080'
  },
  image: {
    width: 20,
    height: 20
  },
});