import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { ListItem } from "@rneui/themed";
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import React,{useContext} from 'react'

const TrackListScreen = ({ navigation }) => {
   const { state, fetchTracks } = useContext(TrackContext);
  console.log("on tracklistscreen");
  return (
    <View>
    <NavigationEvents onWillFocus={fetchTracks}/>
      <Button
      title="Go to TrackDetail"
        onPress={() => navigation.navigate('TrackDetail')} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail',{_id: item._id})}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Track List'
}

export default TrackListScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})