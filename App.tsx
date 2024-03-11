import {StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Router from './src/Navigations';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
// import { store, persistor } from "./src/store/store";
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
