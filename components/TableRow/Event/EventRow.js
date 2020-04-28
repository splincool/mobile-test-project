import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import PricesRow from '../Price/PricesRow'
import EventRowPrefix from './EventRowPrefix'
import EventRowName from './EventRowName'

export default function EventRow({event}) {
  const index1x2 = event.Items.map(function(item) {return item.Name }).indexOf('1x2')
  return (
    <View style={styles.container}>
      <EventRowPrefix event={event} />
      <EventRowName eventName={event.Name} />
      <PricesRow eventItems={event.Items[index1x2]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#afafaf',
    borderBottomWidth: 1,
    padding: 5
  }
})