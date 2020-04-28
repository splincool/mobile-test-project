import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import Betslip from '../store/betslip';
import {observer} from 'mobx-react';


const IconWithBadge = observer(({focused, name}) => {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        {Betslip.betslipCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -8,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 10,
              width: 16,
              height: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>
              {Betslip.betslipCount}
            </Text>
          </View>
        )}
      </View>
    )
})

export default IconWithBadge