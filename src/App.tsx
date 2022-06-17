/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useEffect} from 'react';
import {AppNavigator} from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
import {Platform, StatusBar} from 'react-native';
const App: FC = () => {
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(false);
    // StatusBar.setBackgroundColor("transparent");
  }
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
};
export default App;
