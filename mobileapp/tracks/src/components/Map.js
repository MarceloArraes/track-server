import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React,{useContext} from 'react'
import MapView,{Polyline, Circle} from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const {state:{currentLocation}} = useContext(LocationContext);
  console.log("STATE" ,currentLocation);

  const initialLocation = {
    longitude: -3.7718384,
    latitude: -38.4862449,
  };

  if(!currentLocation)return <ActivityIndicator style={{marginTop:200}} size='large'/>;

  return (
    <View>
      <Text>Im a Map</Text>
      <MapView style={styles.map} 
      initialRegion={{
      ...initialLocation, 
      latitudeDelta: 0.01, longitudeDelta: 0.01
      }}
      region={{
      ...currentLocation.coords,
      latitudeDelta:  0.01, longitudeDelta:  0.01
      }}
      >
        <Circle center={currentLocation.coords} radius={20} 
        strokeColor='rgba(158, 158, 255, 1)'
        fillColor='rgba(158, 158, 255, 0.5)'
        />
      </MapView>
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