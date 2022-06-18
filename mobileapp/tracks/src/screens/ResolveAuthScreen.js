import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
  const { tryLocalSignin} = useContext(AuthContext)
    useEffect(() => {
    console.log("ENtered on ReSolveAuthScreen")
    tryLocalSignin();
  }, [])
  return null;
}

export default ResolveAuthScreen

const styles = StyleSheet.create({})