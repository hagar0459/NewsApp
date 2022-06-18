/* eslint-disable react-native/no-inline-styles */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NewsListScreen} from '../screens/NewsListScreen';
import {NewsDetailsScreen} from '../screens/NewsDetailsScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const TabButton = (props: {item: any; onPress: any; accessibilityState: any}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon name={item.icon} size={20} color={focused ? 'white' : 'grey'} />
        </View>
        <Animatable.Text ref={textRef} style={[styles.text, {color: focused ? 'blue' : 'grey'}]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};
const TabArr = [
  {
    route: 'NewsListScreen',
    label: 'News',
    icon: 'home',
    component: NewsListScreen,
  },
  {
    route: 'SettingsScreen',
    label: 'Settings',
    icon: 'settings',
    component: SettingsScreen,
  },
];
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen
          name="NewsDetailsScreen"
          component={NewsDetailsScreen}
          sharedElements={(route) => {
            const {item} = route.params;
            return [`item${item.urlToImage}.image`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});
