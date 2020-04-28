import React, {useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native'
import Upcoming from '../components/TopSports/Upcoming'
import Highlights from '../components/TopSports/Highlights'

export default function EventsScreen() {


  return (
    <View>
      <ScrollView>
        <Highlights />
        <Upcoming />
      </ScrollView>
    </View>
  )
}

EventsScreen.navigationOptions = {
  title: 'Events',
};
