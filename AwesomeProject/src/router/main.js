import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Test1 from '../component/test1.js'
import Flex from '../component/flex.js'

const RootNavigator = StackNavigator({
  Home: {
    screen: Test1,
  },
  Details: {
    screen: Flex,
  },
});

export default RootNavigator;