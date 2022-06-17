/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {newsListScreen} from '../screens/newsListScreen';
import {newsDetailsScreen} from '../screens/newsDetailsScreen';

const Stack = createSharedElementStackNavigator();

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NewsListScreen" component={newsListScreen} />
        <Stack.Screen
          name="NewsDetailsScreen"
          component={newsDetailsScreen}
          sharedElements={(route) => {
            const {item} = route.params;
            return [`item${item.urlToImage}.image`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
