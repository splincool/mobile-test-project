import React, {Component} from 'react';
import { View, Text, Button } from 'react-native'

import {observer} from 'mobx-react';
import Betslip from '../store/betslip'

@observer
export default class BetslipScreen extends Component {

  onBtnClickHandler = () => {
    Betslip.clearAll()
  }

  render() {
    return (
      <View>
        <Text>Betslip</Text>
        {/* <Button 
          title="Clear all"
          onPress={() => Betslip.clearAll()}/> */}
      </View>
    )
  }
}

BetslipScreen.navigationOptions = {
  title: 'Betslip',
};
