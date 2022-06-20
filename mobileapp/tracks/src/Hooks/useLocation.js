import {useState,useEffect} from 'react'
import { 
Accuracy,
requestForegroundPermissionsAsync,
watchPositionAsync,
} from 'expo-location'

export default(callback)=>{
  const [error, setError] = useState('')

    const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      await watchPositionAsync({
      accuracy: Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 10, 
      }, location => 
        {
          callback(location)
        }
      );

      if(granted) {setError('')}
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      console.log("ERROR", e);
      setError(e['message']);
    }
  };

    useEffect(() => {
    startWatching();
  }, [])

return [error]
};

