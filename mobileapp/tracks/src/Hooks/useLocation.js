import {useState,useEffect} from 'react'
import {
Accuracy,
requestForegroundPermissionsAsync,
watchPositionAsync,
} from 'expo-location'

export default(shouldTrack, callback)=>{
  const [error, setError] = useState('')

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
          throw new Error('Location permission not granted');
        }
      subscriber = await watchPositionAsync({
      accuracy: Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 10,
      },
      callback
      );
      if(granted) {setError('')}
    } catch (e) {
      console.log("ERROR", e);
      setError(e);
    }
}

    if (shouldTrack) {
      startWatching()
    }
    else {
      if (subscriber) {
        subscriber.remove()
      }
        subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback]);

return [error]
};