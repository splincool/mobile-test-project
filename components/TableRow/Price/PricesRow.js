import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PriceBox from './PriceBox'

export default function PricesRow({eventItems}) {
  return (
    <View style={styles.container}>
      {
        eventItems && eventItems.Items.map((item) => {
          return <PriceBox price={item.Price} key={item.Id}/>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  }
})