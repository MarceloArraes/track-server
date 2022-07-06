import '../_mockLocation';
import { StyleSheet } from 'react-native'
import React,{ useContext, useCallback} from 'react'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus  } from 'react-navigation'
import {Text} from '@rneui/base'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../Hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
  const { state:{recording}, addLocation } = useContext(LocationContext);
  const callback = useCallback( (location)=>{
  addLocation(location, recording);
}, [ recording]);
  const [error] = useLocation(isFocused || recording, callback);
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.text}>Track Create</Text>
      <Map/>
     {error? <Text style={styles.textError}>{error}</Text>:null}
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