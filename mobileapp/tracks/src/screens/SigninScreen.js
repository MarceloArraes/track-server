import { StyleSheet, View} from 'react-native'
import React, { useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import Authform from '../components/Authform'
import Navlink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext)

  return (
    <View style={styles.mainView}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <Authform headerText='Signin Screen' errorMessage={state.errorMessage} onSubmit={signin} buttonText='Signin' />
      <Navlink linkText='Dont have an account? Signup instead!' routeTo='Signup' />
    </View>
  )
}
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;

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

