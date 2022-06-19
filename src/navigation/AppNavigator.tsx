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
import {TouchableOpacity, View, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {strings} from '../localization';
import {useTheme} from '../components/theme/ThemeProvider';
import {styles} from '../components/theme/styles';
import {ActivityIndicator} from 'react-native';

const Stack = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['newsapp://'],
  config: {
    screens: {
      details: {
        path: 'details/:filtertitle',
      }
    },
  },
};
const TabButton = (props: {item: any; onPress: any; accessibilityState: any}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const {theme} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.tabContainer}>
      <View ref={viewRef} style={styles.tabContainer}>
        <View style={[styles.btn, {borderColor: theme.boder}]}>
          <View
            ref={circleRef}
            style={[
              styles.circle,
              {backgroundColor: focused ? theme.primaryColor : theme.secondaryColor},
            ]}
          />
          <Icon name={item.icon} size={20} color={focused ? theme.boder : theme.tabIconUnfocused} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const TabArr = [
  {
    route: 'NewsListScreen',
    icon: 'home',
    component: NewsListScreen,
  },
  {
    route: 'SettingsScreen',
    icon: 'settings',
    component: SettingsScreen,
  },
];
function MyTabs() {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [styles.tabBar, {backgroundColor: theme.secondaryColor}],
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
  useEffect(() => {
    strings.setLanguage(I18nManager.isRTL ? 'ar' : 'en');
  }, []);
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tabs" component={MyTabs} />
        <Stack.Screen
          name="details"
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
