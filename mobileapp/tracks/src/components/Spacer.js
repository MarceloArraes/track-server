import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({children}) => {
  return (
    <View style={styles.spacer}>
      {children}
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({
spacer:{
  margin: 20,
}
})