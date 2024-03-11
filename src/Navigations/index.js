import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authstack from './Authstack';
import Homestack from './Homestack';
import {useSelector} from 'react-redux';

const Router = () => {
  // const [isLoggedIn , setisLoaggedin] = useState(true)

  const {isLoggedIn} = useSelector(state => state.auth);

  console.log(isLoggedIn);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? <Homestack /> : <Authstack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;

const styles = StyleSheet.create({});
