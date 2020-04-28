import React from 'react';
import { View, Text } from 'react-native'

export default function ExamplePageScreen(props) {
  return (
    <View>
      <Text>{props.navigation.getParam('value')}</Text>
    </View>
  )
}

ExamplePageScreen.navigationOptions = {
  title: 'Example Page',
};
