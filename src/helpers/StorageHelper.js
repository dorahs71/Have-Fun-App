import { AsyncStorage } from 'react-native'

//{string}name
//{bool} isLogin

//export const setUserToken = (key,value) => AsyncStorage.setItem(key,value)
export const getMySetting = (key) => AsyncStorage.getItem(key)
export const setMySetting = (key, value) => AsyncStorage.setItem(key, value)





