import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView,{Polyline} from 'react-native-maps'

const Map = () => {
  let points = [];
  for (let i =0;i<20;i++){
    points.push({
      latitude: -3.7252174-i*0.001,
      longitude: -38.5237544+i*0.001,
    })
  }

  return (
    <View>
      <Text>Im a Map</Text>
      <MapView style={styles.map} 
      initialRegion={
      { latitude:-3.7252174, longitude: -38.5237544,
      latitudeDelta: 0.2, longitudeDelta: 0.2
      }}
      ><Polyline coordinates={points} /></MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
map:{
  height: 300,
  width: '100%',
}
})