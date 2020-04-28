import React, { Component } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import CounterStore from '../store/counterStore';
import {observer} from 'mobx-react';
import { padding } from '../constants/Variables';

@observer
export default class MobxExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Mobx store demo</Text>
        <Text>{CounterStore.counter}</Text>
        <View style={styles.btnsView}>
          <View style={{flex:1 , marginRight:10}}>
            <Button style={{backgroundColor: "red"}} title="Increment" onPress= {() => CounterStore.increment()} />
          </View>
          <View style={{flex:1}}>
            <Button title="Decrement" onPress= {() => CounterStore.decrement()} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: padding.lg,
    flex: 1,
    alignItems: 'center',
  },
  headerStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: padding.sm
  },
  btnsView: {
    flex: 1,
    flexDirection: 'row'
  }
})