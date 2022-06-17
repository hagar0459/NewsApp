/* eslint-disable react-native/no-inline-styles */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React from 'react';
import {ActivityIndicator, View} from 'react-native';
export const FooterComponent = () => {
  return (
    <View style={{height: 20}}>
      <ActivityIndicator size="large" />
    </View>
  );
};
