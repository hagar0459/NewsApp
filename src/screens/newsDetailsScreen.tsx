/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC} from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity, Linking} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

const height = Dimensions.get('window').height;

export const newsDetailsScreen: FC = ({}) => {
  const {item} = useRoute()?.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
            <Text style={{color: 'white', marginBottom: 3}}>{item.author}</Text>
            <Text style={{color: 'white'}}>{item.publishedAt}</Text>
          </View>
        </ImageBackground>
      </SharedElement>
      <View style={{padding: 10}}>
        <Text style={styles.itemHeader}>{item.title}</Text>
        <Text style={{marginTop: 5}}>{item.description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text> Open Article </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};