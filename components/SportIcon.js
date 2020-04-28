import React, {useMemo} from 'react';

import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

import Colors from '../constants/Colors';

export default function SportIcon({sportTypeId}) {
  const iconClasses = {
    1: 'soccer-ball',
    4: 'pesapallo',
    12: 'basketball-1',
    '-1': 'trophy'
  }
  return (
    <Icon
      name={iconClasses[sportTypeId]}
      size={26}
      color={Colors.promaryText}
    />
  );
}
