import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>SignupScreen</Text>
      <Button 
      title="Go to Signin"
      onPress={() => {navigation.navigate('Signin')}}
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})