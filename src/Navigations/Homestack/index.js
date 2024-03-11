import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RoutePaths from '../RoutePaths';
import Listing from '../../screens/HomeStack/Listing';
import WeekFood from '../../screens/HomeStack/WeekFood';

const Homestack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RoutePaths.listing} component={Listing} />
      <Stack.Screen name={RoutePaths.WeekFood} component={WeekFood} />
    </Stack.Navigator>
  );
};

export default Homestack;

const styles = StyleSheet.create({});
