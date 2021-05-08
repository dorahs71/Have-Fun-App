import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'

export default function HomeScreen(props) {

  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    let getAll = []

    dataSource.map(a => {
      if (a.addToMyList === true) {
        getAll.push(a)
      }
    })

    saveToStorage(getAll)
  })

  const saveToStorage = async (getMyLists) => {
    try {
      await StorageHelper.setMySetting('myList', JSON.stringify(getMyLists))
    } catch (err) {
      console.log(err)
    }

  }

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx'
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        setDataSource(responseData)
      })
      .catch((err) => {
        console.log('error 是', err)
      })
  }

  const showNoticeDetail = (cases) => {
    props.navigation.push('HomeDetail', { passProps: cases })
  }

  const pressRow = (cases) => {

    const newDatas = dataSource.map(a => {
      let copyA = { ...a }
      if (copyA.Name === cases.Name) {
        copyA.addToMyList = !copyA.addToMyList
      }

      return copyA
    }

    )

    setDataSource(newDatas)


  }


  const renderTrip = (cases) => {
    return (
      <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
        <View>
          <View style={styles.MainView}>
            <TouchableOpacity onPress={() => pressRow(cases)}>
              {cases.addToMyList === true ? <Image style={styles.imageCheck} source={require('../../assets/image/love.png')} /> : <Image style={styles.imageCheck} source={require('../../assets/image/heart.png')} />}
            </TouchableOpacity>
            <Image
              source={{ uri: cases.Photo }}
              style={styles.thumbnail}
            />

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
  }


  return (
    <View>

      <FlatList
        data={dataSource}
        renderItem={cases => renderTrip(cases.item)}
        ketExtracto={cases => cases.Name}
        style={{ backgroundColor: 'white' }}
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
  MainView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  seperator: {
    height: 1,
    backgroundColor: '#f08080'
  },
  image: {
    width: 20,
    height: 20
  },

  thumbnail: {
    width: 50,
    height: 60,
    marginRight: 10
  },
  imageCheck: {
    width: 23,
    height: 23,
    marginRight: 10,
  }
});


