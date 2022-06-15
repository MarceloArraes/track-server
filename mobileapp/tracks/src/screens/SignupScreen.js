import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React, {useState, useContext} from 'react'
import {Text, Input, Button} from '@rneui/base'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <View style={styles.mainView}>
    <Spacer>
      <Text h3>SignupScreen</Text>
     </Spacer>
      <Spacer>
      <Input autoCorrect={false} autoCapitalize='none' placeholder="Email" value={email} onChangeText={setEmail} />
      <Input secureTextEntry autoCorrect={false} autoCapitalize='none' placeholder="Password" value={password} onChangeText={setPassword}/>
      <Input secureTextEntry autoCorrect={false} autoCapitalize='none' placeholder="Name" value={name} onChangeText={setName}/>
      {state.errorMessage?<Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
      </Spacer>
      
      <Button 
      title="Signup"
      onPress={() => {signup({email, password, name})}}
      />
      <Button 
      title="Go to Signin"
      onPress={() => {navigation.navigate('Signin')}}
      />
      <Button 
      title="Go to MainFlow"
      onPress={() => {navigation.navigate('mainFlow')}}
      />
      <Spacer>
      <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
      <Text style={styles.link}>Already have an account? Signin instead!</Text>
      </TouchableOpacity>
      </Spacer>
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
},
errorMessage:{
  color:'red',
  fontSize:16,
  marginLeft:15,
  marginTop:15,
},
link:{
  color:'blue',

}
})