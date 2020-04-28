import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SportIcon from '../SportIcon';
import SportSvgIcon from '../SportSvgIcon';

export const TopMenuItem = ({menuItemData, handleSportPress}) => {

  return (
      <View style={styles.topMenuContainer}>
        <TouchableOpacity style={styles.topMenuContainer} onPress={() => handleSportPress(menuItemData.Name)}>
          <SportIcon sportTypeId={menuItemData.SportTypeId}/>
          <Text>{menuItemData.Name}</Text>
          <SportSvgIcon sportTypeId={menuItemData.SportTypeId} />
          <Text>{menuItemData.Name}</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  topMenuContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
