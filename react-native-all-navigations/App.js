import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import { Constants } from 'expo';
import { createDrawerNavigator } from 'react-navigation';
import Ionicons from '@expo/vector-icons';

import SettingsScreen from './Screens/SettingsScreen';
import TermsScreen from './Screens/TermsScreen';
import TabNavigator from './Screens/createBottomTabNavigator';

export default class App extends Component {
  render() {
    return (
      <Container>
        <MyApp />
      </Container>
    );
  }
}
const MyApp = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
  },
  Terms: {
    screen: TermsScreen,
  },
});
