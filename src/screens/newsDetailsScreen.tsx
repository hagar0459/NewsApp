/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC} from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity, Linking} from 'react-native';
import {styles} from '../components/theme/styles';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../localization';
import {useTheme} from '../components/theme/ThemeProvider';

const height = Dimensions.get('window').height;

export const NewsDetailsScreen: FC = ({}) => {
  const {item} = useRoute()?.params;
  const navigation = useNavigation();
  const {theme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      <SharedElement id={`item${item.urlToImage}.image`}>
        <ImageBackground
          style={{width: '100%', height: height / 2}}
          source={{uri: item.urlToImage}}
          resizeMode={'cover'}>
          <TouchableOpacity
            style={styles.closeButttonContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            {item?.author && (
              <Text style={{color: 'white', marginBottom: 3, textAlign: 'left'}}>
                {item?.author}
              </Text>
            )}
            <Text style={{color: 'white', textAlign: 'left'}}>{item.publishedAt}</Text>
          </View>
        </ImageBackground>
      </SharedElement>
      <View style={{padding: 10}}>
        <Text style={styles.itemHeader}>{item.title}</Text>
        <Text style={{marginTop: 5, textAlign: 'left'}}>{item.description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{marginVertical: 10, color: 'blue', textAlign: 'left'}}>
            {strings.open_article}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
