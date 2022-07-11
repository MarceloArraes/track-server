import * as Location from 'expo-location'

const tenMeterWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 984432512,
    coords: {
      latitude: -3.7718384 - increment * tenMeterWithDegrees,
      longitude: -38.4862449 + increment * tenMeterWithDegrees ,
      altitude: 48.5,
      accuracy: 5,
      heading: 0,
      speed: 0,
      altitudeAccuracy: 5,
    },
}
}
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged',
    {
  watchId: Location._getCurrentWatchId(),
  location: getLocation(counter)})
  counter++;
}, 1000);