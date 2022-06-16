import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React, { useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import Authform from '../components/Authform'
import Navlink from '../components/Navlink'


const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)

  return (
    <View style={styles.mainView}>
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

link:{
  color:'blue',

}
})