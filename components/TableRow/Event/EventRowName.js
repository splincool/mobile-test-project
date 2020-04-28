import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function EventRowName({eventName}) {
  return (
    <View style={styles.container}>
       <Text style={styles.eventName}>{eventName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})