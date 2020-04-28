import React, { Component } from 'react'
import { View, Text, ActivityIndicator,  StyleSheet, Button, TextInput} from 'react-native'
import EventStore from '../../store/eventsStore';
import {observer} from 'mobx-react';
import EventRow from '../TableRow/Event/EventRow'

@observer
export default class Upcoming extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    this._isMounted && EventStore.fetchUpcomingEvents()
    // setInterval(() => {
    //   EventStore.fetchUpcomingEvents()
    // }, 5000)
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    console.log('render Upcoming')
    return (
      <View>
        <Text style={styles.header}>Upcoming</Text>
        <Text style={styles.sportName}>Football</Text>
        <View style={styles.eventCounstContainer}>
          <Text>Events count</Text>
          <TextInput
            style={styles.eventsCountInput}
            placeholder="events count"
            onChangeText={(text) => EventStore.changeUpcomingEventsCount(text)}
            value={String(EventStore.upcomingEventsCount)}
          />
        </View>

        {
          EventStore.upcomingEvents.length ? EventStore.upcomingEvents.map((event) => {
            return (
              <EventRow event={event} key={event.Id} />
            )
          }) : <ActivityIndicator size="large"/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  sportName: {
    backgroundColor: '#f5f5f5',
    color: '#b5000d',
    fontSize: 16,
    padding: 10
  },
  eventRow: {
    borderColor: '#303030',
    borderBottomWidth: 1
  },
  eventCounstContainer: {
    flex: 1,
    padding: 5
  },
  eventsCountInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 18,
    padding: 5
  }
})