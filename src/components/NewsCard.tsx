/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {newsItem} from '../redux/news';
type Props = {
  info: newsItem;
  onPress(item: newsItem, geners: []): void;
  index: number;
};

import {styles} from '../screens/styles';

export const NewsCard: FC<Props> = ({info, onPress}: Props) => {
  const renderContent = () => {
    return (
      <View style={styles.cardContainer}>
        <Image source={{uri: info.urlToImage}} resizeMode="cover" style={styles.cardImage} />
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text style={styles.title}>{info.title}</Text>
        </View>
      </View>
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
