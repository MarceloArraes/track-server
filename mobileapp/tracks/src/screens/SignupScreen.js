import { StyleSheet, View} from 'react-native'
import React, { useContext, useEffect} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import Authform from '../components/Authform'
import Navlink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation'
import { withNavigation } from 'react-navigation'

const SignupScreen = () => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext)
 
  return (
    <View style={styles.mainView}>
      <NavigationEvents onWillFocus={clearErrorMessage}
      onWillBlur={()=>{console.log("will blue")}}
      onDidBlur={()=>{console.log("did blue")}}
      onDidFocus={()=>{console.log("did focus")}}
      />
      <Authform headerText='Signup Screen' errorMessage={state.errorMessage} onSubmit={signup} buttonText='Signup' />
      <Navlink linkText='Already have an account? Signin instead!' routeTo='Signin' />
    </View>
  )
}
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default withNavigation(SignupScreen);

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


})