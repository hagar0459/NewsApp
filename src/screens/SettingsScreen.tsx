/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @flow
 * Created by Hagar Abdelghafar on 18.06.2022
 */

import React, {FC, useState, useEffect} from 'react';
import {Image, SafeAreaView, View, Text, Platform, I18nManager} from 'react-native';
import {styles} from './styles';
import {Switch} from 'react-native-switch';
import {strings} from '../localization';
import RNRestart from 'react-native-restart'; // Import package from node modules

export const SettingsScreen: FC = ({}) => {
  const [switchValue, setswitchValue] = useState(I18nManager.isRTL ? false : true);
  const changeLanguage = (value: string | undefined) => {
    I18nManager.forceRTL(value === 'ar' ? true : false);
    strings.setLanguage(value);
    RNRestart.Restart();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={{height: 300, width: '100%'}}
          resizeMode="stretch"
          source={{
            uri: 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>{strings.language}</Text>
          {/* <Selector /> */}

          <Switch
            value={switchValue}
            onValueChange={(val) => {
              if (switchValue) {
                changeLanguage('ar');
              } else {
                changeLanguage('en');
              }
              setswitchValue(!switchValue);
            }}
            disabled={false}
            circleBorderWidth={1}
            backgroundActive={'grey'}
            backgroundInactive={'grey'}
            circleActiveColor={'blue'}
            circleInActiveColor={'#f5f5f5'}
            circleSize={40}
            circleBorderActiveColor={'blue'}
            switchLeftPx={4} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={3} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30}
            inActiveText={'En'}
            activeText={'ع'}
            renderActiveText={true}
            renderInActiveText={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
