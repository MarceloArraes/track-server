import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext';

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
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})