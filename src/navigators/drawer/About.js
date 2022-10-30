import { View, Text } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={{height:'100%',width:'100%',backgroundColor:"grey",justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontWeight:"bold",fontSize:20}}>About</Text>
    </View>
  )
}