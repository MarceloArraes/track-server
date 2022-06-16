import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Text} from '@rneui/base'
import Spacer from '../components/Spacer'

const Navlink = ({navigation, linkText, routeTo}) => {
  return (
    <View>
      <Spacer>
        <TouchableOpacity onPress={()=> navigation.navigate({routeTo})}>
          <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  )
}

export default Navlink

const styles = StyleSheet.create({})