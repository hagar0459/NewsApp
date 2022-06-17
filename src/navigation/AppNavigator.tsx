/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewsListScreen} from '../screens/NewsListScreen';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NewsListScreen" component={NewsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
