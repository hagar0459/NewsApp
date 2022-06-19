/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {newsItem} from '../redux/news';
import {SharedElement} from 'react-navigation-shared-element';
type Props = {
  item: newsItem;
  onPress(): void;
};

import {styles} from './theme/styles';
import {useTheme} from './theme/ThemeProvider';

export const NewsCard: FC<Props> = ({item, onPress}: Props) => {
  const {theme} = useTheme();
  const [onLoadImage, setLoadImage] = useState(false);
  const imageLoading = () => {
    setLoadImage(true);
  };
  const renderContent = () => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, {backgroundColor: theme.cardBg}]}
        onPress={() => {
          onPress();
        }}>
        <SharedElement id={`item${item.urlToImage}.image`}>
          <Image
            source={
              onLoadImage && typeof item?.urlToImage !== 'undefined' && item?.urlToImage !== null
                ? {uri: item?.urlToImage}
                : require('../../imgs/default.jpg')
            }
            resizeMode="cover"
            style={styles.cardImage}
            onLoad={() => imageLoading()}
          />
        </SharedElement>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      testID={'CardView'}
      style={styles.card}
      onPress={() => {
        console.log('ddd');
      }}>
      {renderContent()}
    </TouchableOpacity>
  );
};
