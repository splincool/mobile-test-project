import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment';

export default function EventRowPrefix({event}) {
  return (
    <View style={styles.container}>
      <Text>{moment(event.EventDate).format('DD/MM • HH:mm')}</Text>
      <Text> | </Text>
      <Text>{event.ChampName}</Text>
      <Text> • </Text>
      <Text>{event.CategoryName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})