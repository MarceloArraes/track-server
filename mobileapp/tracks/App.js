import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen,
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="list" size={24} color="black" />
}

const switchNavigator = createSwitchNavigator({
ResolveAuth: ResolveAuthScreen,
loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
}),
mainFlow: createBottomTabNavigator({
  trackListFlow: trackListFlow,
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen,
}),
})

const App = createAppContainer(switchNavigator);

export default ()=> {
  return (
    <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=>{setNavigator(navigator)}}/>
      </AuthProvider>
      </LocationProvider>
    </TrackProvider>
)
}
/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
//