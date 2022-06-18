import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button 
      title="Go to TrackDetail"
      onPress={() => navigation.navigate('TrackDetail')}/>
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})