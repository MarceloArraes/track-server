import '../_mockLocation';
import { StyleSheet, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import {Text, Input, Button} from '@rneui/base'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
 

const TrackCreateScreen = () => {
  const [error, setError] = useState('')

  useEffect(() => {
    startWatching();
  }, [])


  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync({
      accuracy: Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 10, 
      }, location => {console.log(location);});
      if(granted) {setError('')}
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      console.log("ERROR", e);
      setError(e['message']);
    }
  };


  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.text}>Track Create</Text>
      <Map/>
      <Text style={styles.textError}>{error}</Text>
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
text:{
  fontSize: 36,
},
textError:{
  fontSize: 24,
  color: 'red',
},
})