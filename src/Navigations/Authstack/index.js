import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RoutePaths from '../RoutePaths';
import Login from '../../screens/AuthStack/Login';
import OtpVerification from '../../screens/AuthStack/OtpVerification';
import Loader from '../../components/Loader';
import Firstscreen from '../../screens/AuthStack/Firstscreen';

const Stack = createStackNavigator();

const Authstack = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Stack.Navigator
        initialRouteName={RoutePaths.login}
        screenOptions={{
          headerShown: false,
        }}>
           <Stack.Screen name={RoutePaths.firstscreen} component={Firstscreen} />
        <Stack.Screen name={RoutePaths.login} component={Login} />
        <Stack.Screen
          name={RoutePaths.otpVerification}
          component={OtpVerification}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Authstack;

const styles = StyleSheet.create({});
