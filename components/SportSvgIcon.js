import React from 'react';
import { Text } from 'react-native';

import SvgUri from 'react-native-svg-uri';

export default function SportSvgIcon({sportTypeId}) {
  const iconClasses = {
    1: require('../assets/svg_icons/icon-soccer.svg'),
    4: require('../assets/svg_icons/icon-tennis.svg'),
    12: require('../assets/svg_icons/icon-basketball.svg'),
    '-1': require('../assets/svg_icons/icon-other.svg')
  }

  let icon = iconClasses[sportTypeId]

  return (
    <SvgUri 
      width="26"
      height="26"
      source={icon}
    />  

  );
}
