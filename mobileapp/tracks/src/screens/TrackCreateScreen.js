import '../_mockLocation';
import { StyleSheet } from 'react-native'
import React,{ useContext} from 'react'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import {Text} from '@rneui/base'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../Hooks/useLocation';

const TrackCreateScreen = () => {
  const {setCurrentLocation} = useContext(LocationContext);
  const [error] = useLocation((location)=>{
    setCurrentLocation(location);
  }); //or just useLocation(setCurrentLocation)

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