/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @flow
 * Created by Hagar Abdelghafar on 18.06.2022
 */

import React, {FC, useState} from 'react';
import {Image, SafeAreaView, View, Text, I18nManager} from 'react-native';
import {styles} from '../components/theme/styles';
import {Switch} from 'react-native-switch';
import {strings} from '../localization';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {useTheme} from '../components/theme/ThemeProvider';

export const SettingsScreen: FC = ({}) => {
  const {theme, toggleTheme} = useTheme();
  const [languageValue, setLanguageValue] = useState(I18nManager.isRTL ? false : true);
  const changeLanguage = (value: string | undefined) => {
    I18nManager.forceRTL(value === 'ar' ? true : false);
    strings.setLanguage(value);
    RNRestart.Restart();
  };
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
        <Image
          style={styles.settingsImage}
          resizeMode="stretch"
          source={{
            uri: 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=',
          }}
        />
        <View style={styles.settingsItem}>
          <Text style={[styles.settingsItemText, {color: theme.textColor}]}>
            {strings.language}
          </Text>

          <Switch
            value={languageValue}
            onValueChange={() => {
              if (languageValue) {
                changeLanguage('ar');
              } else {
                changeLanguage('en');
              }
              setLanguageValue(!languageValue);
            }}
            disabled={false}
            circleBorderWidth={1}
            backgroundActive={theme.switchOffColor}
            backgroundInactive={theme.switchOffColor}
            circleActiveColor={theme.switchOnColor}
            circleInActiveColor={theme.switchOnColor}
            circleSize={40}
            circleBorderActiveColor={theme.switchOnColor}
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
        <View style={styles.settingsItem}>
          <Text style={[styles.settingsItemText, {color: theme.textColor}]}>
            {strings.change_theme}
          </Text>

          <Switch
            value={theme.name === 'dark'}
            onValueChange={(val) => {
              toggleTheme(val);
            }}
            disabled={false}
            circleBorderWidth={1}
            backgroundActive={theme.switchOffColor}
            backgroundInactive={theme.switchOffColor}
            circleActiveColor={theme.switchOnColor}
            circleInActiveColor={theme.switchOnColor}
            circleSize={40}
            circleBorderActiveColor={theme.switchOnColor}
            switchLeftPx={4} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={3} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30}
            inActiveText={strings.dark_theme}
            activeText={strings.light_theme}
            renderActiveText={true}
            renderInActiveText={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
