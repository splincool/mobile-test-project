import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import EventStore from '../../store/eventsStore';
import {observer} from 'mobx-react';
import EventRow from '../TableRow/Event/EventRow'

@observer
export default class Highlights extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    this._isMounted && EventStore.fetchHighlightsEvents()
    // setInterval(() => {
    //   EventStore.fetchHighlightsEvents()
    // }, 5000)
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    console.log('render Highlights')
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return (
      <View>
        <Text style={styles.header}>Highlights</Text>
        <Text style={styles.sportName}>Football</Text>
        {
          EventStore.highlightsEvents.length ? EventStore.highlightsEvents.map((event) => {
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
  }
})