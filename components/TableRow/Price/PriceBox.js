import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'
import Betslip from '../../../store/betslip';
import {observer} from 'mobx-react';

@observer
export default class PriceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  onPriceClickHandler = () => {
    this.setState({ isSelected: !this.state.isSelected}, function() {
      this.state.isSelected ? Betslip.increment() : Betslip.decrement()
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.priceBlock, this.state.isSelected ? styles.priceSelected : styles.priceNotSelected ]}
          onPress={() => this.onPriceClickHandler()}>
          <View>
            <Text 
              style={this.state.isSelected ? styles.priceSelectedText : styles.priceText }>
                {this.props.price.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  priceBlock: {
    alignItems: 'center',
    padding: 12,
    marginRight: 5,
    borderRadius: 3
  },
  priceNotSelected: {
    backgroundColor: '#DDDDDD',
  },
  priceSelected: {
    backgroundColor: '#767676',
    color: 'white'
  },
  priceText: {
    color: Colors.priceColor,
    fontWeight: 'bold'
  },
  priceSelectedText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})