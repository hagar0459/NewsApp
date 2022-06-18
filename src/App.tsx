/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useEffect, useState} from 'react';
import {AppNavigator} from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
import {Platform, StatusBar, I18nManager} from 'react-native';
import {strings} from './localization';

const App: FC = () => {
  const [lang, setlang] = useState('');
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(false);
  }
  useEffect(() => {
    strings.setLanguage(I18nManager.isRTL ? 'ar' : 'en');
    SplashScreen.hide();
  }, []);
 

  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
};
export default App;
