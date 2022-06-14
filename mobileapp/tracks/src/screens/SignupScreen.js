import { StyleSheet, View} from 'react-native'
import React, {useState, useContext} from 'react'
import {Text, Input, Button} from '@rneui/base'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.mainView}>
    <Spacer>
      <Text h3>SignupScreen</Text>
     </Spacer>
      <Spacer>
      <Input autoCorrect={false} autoCapitalize='none' placeholder="Email" value={email} onChangeText={setEmail} />
      </Spacer>
      <Spacer>
      <Input secureTextEntry autoCorrect={false} autoCapitalize='none' placeholder="Password" value={password} onChangeText={setPassword}/>
      </Spacer>
      <Button 
      title="Signup"
      onPress={() => {signup({email, password})}}
      />
      <Button 
      title="Go to Signin"
      onPress={() => {navigation.navigate('Signin')}}
      />
      <Button 
      title="Go to MainFlow"
      onPress={() => {navigation.navigate('mainFlow')}}
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
},
mainView:{
  justifyContent: 'center',
  alignContent:'center', 
  flex:1,
  marginHorizontal:20,
}
})