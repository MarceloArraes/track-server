import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext';
import MapView,{Polyline, Circle} from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);
  const track = state.find(track => track._id === _id);
  return (
    <View>
      <Text style={styles.text}>TrackDetailScreen</Text>
      <Text>{track.name}</Text>
      <Text>{track.timestamp}</Text>
      <Text>{track.locations.length}</Text>
      <MapView style={styles.map}
        initialRegion={{
          latitude: track.locations[0].coords.latitude,
          longitude: track.locations[0].coords.longitude,
          latitudeDelta: 0.01, longitudeDelta: 0.01,
        }}
      >
        <Circle center={track.locations[0].coords} radius={20}
        strokeColor='rgba(158, 158, 255, 1)'
        fillColor='rgba(158, 158, 255, 0.5)'
        />
        <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
  },
  map: {
    height: 300,
    width: '100%',
  }
})