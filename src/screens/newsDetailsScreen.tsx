/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Linking,
  I18nManager,
} from 'react-native';
import {styles} from '../components/theme/styles';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../localization';
import {useTheme} from '../components/theme/ThemeProvider';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../redux/news';
import {RootState} from '../redux/store';

const height = Dimensions.get('window').height;

export const NewsDetailsScreen: FC = ({}) => {
  const {item} = useRoute()?.params;
  const [onLoadImage, setLoadImage] = useState(false);
  const imageLoading = () => {
    setLoadImage(true);
  };
  const filtertitle = useRoute()?.params?.filtertitle;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.news);
  const {theme} = useTheme();
  const [itemDetails, setItemDetails] = useState(item);
  useEffect(() => {
    if (
      typeof item !== 'undefined' &&
      item !== null &&
      typeof filtertitle !== 'undefined' &&
      filtertitle !== null &&
      filtertitle.length > 0
    ) {
      dispatch(
        fetchNews({
          language: I18nManager.isRTL ? 'ar' : 'en',
          page: 1,
          searchTxt: filtertitle,
          pagesize: 1,
        }),
      );
    }
  }, [filtertitle]);

  useEffect(() => {
    if (
      typeof item !== 'undefined' &&
      item !== null &&
      typeof filtertitle !== 'undefined' &&
      filtertitle !== null &&
      filtertitle.length > 0
    ) {
      if (data.length > 0) {
        setItemDetails(data[0]);
      }
    }
  }, [data, item, filtertitle]);

  return (
    <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      <SharedElement id={`item${itemDetails?.urlToImage}.image`}>
        <ImageBackground
          style={{width: '100%', height: height / 2}}
          source={
            onLoadImage && typeof itemDetails?.urlToImage!== 'undefined' && itemDetails?.urlToImage !== null
              ? {uri: itemDetails?.urlToImage}
              : require('../../imgs/default.jpg')
          }
          onLoad={() => imageLoading()}

          resizeMode={'cover'}>
          <TouchableOpacity
            style={styles.closeButttonContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            {itemDetails?.author && (
              <Text style={{color: 'white', marginBottom: 3, textAlign: 'left'}}>
                {itemDetails?.author}
              </Text>
            )}
            <Text style={{color: 'white', textAlign: 'left'}}>{itemDetails?.publishedAt}</Text>
          </View>
        </ImageBackground>
      </SharedElement>
      <View style={{padding: 10}}>
        <Text style={styles.itemHeader}>{itemDetails?.title}</Text>
        <Text style={{marginTop: 5, textAlign: 'left'}}>{itemDetails?.description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(itemDetails?.url)}>
          <Text style={{marginVertical: 10, color: 'blue', textAlign: 'left'}}>
            {strings.open_article}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
