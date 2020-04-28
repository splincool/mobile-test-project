import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { TopMenuItem } from './TopMenuItem'

export const TopMenu = ({menuDate, handleSportPress}) => {
  return (
    <View style={styles.topMenuContainer}>
        {
          menuDate.map(function(item, index) {
            return <TopMenuItem key={index} menuItemData={item} handleSportPress={handleSportPress} />
          })
        }
    </View>
  )
}

const styles = StyleSheet.create({
  topMenuContainer: {
    flex: 1,
    flexDirection: 'row'
  }
})