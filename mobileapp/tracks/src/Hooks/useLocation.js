import {useState,useEffect} from 'react'
import { 
Accuracy,
requestForegroundPermissionsAsync,
watchPositionAsync,
} from 'expo-location'

export default(shouldTrack, callback)=>{
  const [error, setError] = useState('')
  const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      const subscriber = await watchPositionAsync({
      accuracy: Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 10, 
      }, location => 
        {
          callback(location)
        }
      );
      setSubscriber(subscriber)
      if(granted) {setError('')}
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      console.log("ERROR", e);
      setError(e['message']);
    }
}

    useEffect(() => {
      if(shouldTrack) {startWatching()}
        else{
          subscriber.remove()
          setSubscriber(null)
          }
    }, [shouldTrack])

return [error]
};