import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from '@rneui/base'
import React,{useContext} from 'react'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../Hooks/useLocation';
import useSaveTrack from '../Hooks/useSaveTrack';

const TrackForm = () => {
  const {
 state:{name, recording, locations},
 startRecording,
 stopRecording,
 changeName
} = useContext(LocationContext);
  //const [error] = useLocation(true, addLocation);
  const [saveTrack] = useSaveTrack();

  console.log("length of locations: ", locations.length);

  return (
    <View>
      <Spacer>
      <Input value={name} placeholder='Track Name' onChange={changeName}/>
      </Spacer>
      <Spacer>
      {!recording ?
      <Button title='Start Recording' onPress={startRecording}/>:
      <Button title='Stop' onPress={stopRecording} />
      }
      </Spacer>
      {!recording && locations.length ?(<Spacer>
        <Button title='Save' onPress={saveTrack} /></Spacer>
      ) : null}
    </View>
  )
}

export default TrackForm

const styles = StyleSheet.create({})