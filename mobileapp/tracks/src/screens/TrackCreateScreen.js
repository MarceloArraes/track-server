import '../_mockLocation';
import { StyleSheet } from 'react-native'
import React,{ useContext} from 'react'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus  } from 'react-navigation'
import {Text} from '@rneui/base'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../Hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
  const {state, addLocation} = useContext(LocationContext);
  const [error] = useLocation(isFocused, (location)=>{
  addLocation(location, state.recording);
}); 
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.text}>Track Create</Text>
      <Map/>
      <Text style={styles.textError}>{error}</Text>
      <TrackForm/>
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({
text:{
  fontSize: 36,
},
textError:{
  fontSize: 24,
  color: 'red',
},
})