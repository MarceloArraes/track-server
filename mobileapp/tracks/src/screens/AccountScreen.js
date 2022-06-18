import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import {Button} from '@rneui/base'
import  Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {
  const {state, signout} = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={styles.text}>AccountScreen</Text>
      <Spacer>
      <Button title='Signout' onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
text:{
  fontSize: 48,
}
})