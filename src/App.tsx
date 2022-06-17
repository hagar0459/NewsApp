/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */

import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};

export default App;
