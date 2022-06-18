import { StyleSheet, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import {Text, Input, Button} from '@rneui/base'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.text}>TrackCreateScreen</Text>
      <Map/>
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})