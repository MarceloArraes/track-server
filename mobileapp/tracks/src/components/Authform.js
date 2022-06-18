import { StyleSheet, View } from 'react-native'
import {Text, Input, Button} from '@rneui/base'
import React,{useState} from 'react'
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation'

const Authform = ({navigation, headerText, errorMessage, onSubmit, buttonText}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  return (
    <View>
      <Spacer>
      <Text h3>{headerText}</Text>
     </Spacer>
      <Spacer>
      <Input autoCorrect={false} autoCapitalize='none' placeholder="Email" value={email} onChangeText={setEmail} />
      <Input secureTextEntry autoCorrect={false} autoCapitalize='none' placeholder="Password" value={password} onChangeText={setPassword}/>
      <Input secureTextEntry autoCorrect={false} autoCapitalize='none' placeholder="Name" value={name} onChangeText={setName}/>
      {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
      <Text> {email} 
      {password} 
      {name}</Text>
      </Spacer>
      
      <Button 
      title={buttonText}
      onPress={()=>onSubmit({email, password, name})}
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

export default withNavigation(Authform)

const styles = StyleSheet.create({
errorMessage:{
  color:'red',
  fontSize:16,
  marginLeft:15,
  marginTop:15,
},
})