import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import StackScreen1 from './StackScreen1'
import StackScreen2 from './StackScreen2'
const RootStack = createStackNavigator(
  {
    stack1: StackScreen1,
    stack2: StackScreen2,
  },
  {
    initialRouteName: 'stack1',
  }
);

export default class StackNavigator extends React.Component {
  render() {
    return <RootStack />;
  }
}