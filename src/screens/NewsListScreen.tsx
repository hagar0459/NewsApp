/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/**
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useRef, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ListRenderItemInfo, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {fetchNews, newsItem} from '../redux/news';
import {NewsCard} from '../components/NewsCard';
import {styles} from './styles';
import ContentLoader, {Rect} from 'react-content-loader/native';

export const NewsListScreen: FC = ({}) => {
  const dispatch = useDispatch();

  let ref = useRef<FlatList<newsItem>>(null);
  const {data, loading} = useSelector((state: RootState) => state.news);



  useEffect(() => {
    dispatch(fetchNews({language: 'en', page: 1, searchTxt: ''}));
  }, []);



  const renderNewsItem = ({item, index}: ListRenderItemInfo<newsItem>) => {
    return <NewsCard info={item} onPress={(_item: any, _geners: []) => {}} index={index} />;
  };
  return (
    <SafeAreaView>
      {!loading ? (
        <View>
          <FlatList
            keyboardShouldPersistTaps="never"
            ref={ref}
            style={styles.newsList}
            contentContainerStyle={styles.newsListContainer}
            data={data}
            // keyExtractor={(item) => `${item?.source?.id}`}
            renderItem={renderNewsItem}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ContentLoader
            speed={5}
            width={400}
            height={200}
            viewBox="0 0 340 200"
            backgroundColor="#d7d6d6"
            foregroundColor="#828282">
            <Rect x="10" y="10" rx="5" ry="5" width="300" height="190" />
          </ContentLoader>
          <ContentLoader
            speed={5}
            width={400}
            height={200}
            viewBox="0 0 340 200"
            backgroundColor="#d7d6d6"
            foregroundColor="#828282">
            <Rect x="10" y="10" rx="5" ry="5" width="300" height="190" />
          </ContentLoader>
          <ContentLoader
            speed={5}
            width={400}
            height={200}
            viewBox="0 0 340 200"
            backgroundColor="#d7d6d6"
            foregroundColor="#828282">
            <Rect x="10" y="10" rx="5" ry="5" width="300" height="190" />
          </ContentLoader>
          <ContentLoader
            speed={5}
            width={400}
            height={200}
            viewBox="0 0 340 200"
            backgroundColor="#d7d6d6"
            foregroundColor="#828282">
            <Rect x="10" y="10" rx="5" ry="5" width="300" height="190" />
          </ContentLoader>
        </View>
      )}
    </SafeAreaView>
  );
};
