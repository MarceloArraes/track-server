import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from '@rneui/base'
import React,{useContext} from 'react'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../Hooks/useLocation';

const TrackForm = () => {
  const {
 state:{name, recording, locations},
 startRecording,
 stopRecording,
 changeName
} = useContext(LocationContext);
  //const [error] = useLocation(true, addLocation);

  console.log("length of locations: ", locations.length);

  return (
    <View>
      <Spacer>
      <Input value={name} placeholder='Track Name' onChange={changeName}/>
      </Spacer>
      {!recording ? 
      <Button title='Start Recording' onPress={startRecording}/>:
      <Button title='Stop' onPress={stopRecording} />
      }
    </View>
  )
}

export default TrackForm

const styles = StyleSheet.create({})