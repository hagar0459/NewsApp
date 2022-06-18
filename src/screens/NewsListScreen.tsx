/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
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
import {FooterComponent} from '../components/FooterComponent';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {useNavigation} from '@react-navigation/native';

export const newsListScreen: FC = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [news, setNews] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  let ref = useRef<FlatList<newsItem>>(null);
  const {data, loading, totalResults} = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (data.length > 0 && currentPage === 1) {
      setNews(data);
    } else if (data.length > 0) {
      setNews([...news, ...data]);
    } else if (totalResults === 0) {
      setNews([]);
    }
  }, [data]);

  useEffect(() => {
    dispatch(fetchNews({language: 'en', page: 1, searchTxt: ''}));
  }, []);

  const loadMore = () => {
    if (currentPage < totalResults / 10) {
      let page = currentPage + 1;
      dispatch(fetchNews({language: 'en', page: page, searchTxt: searchTxt}));

      setCurrentPage(page);
    }
  };

  const fetchData = () => {
    dispatch(fetchNews({language: 'en', page: 1, searchTxt: searchTxt}));

    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    setCurrentPage(1);
    setNews([]);
    setSearchTxt('');
    fetchData();
  };
  const renderNewsItem = ({item}: ListRenderItemInfo<newsItem>) => {
    return (
      <NewsCard
        item={item}
        onPress={() => {
          navigation.navigate('NewsDetailsScreen', {item: item});
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      {!loading || news.length > 0 ? (
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="search..."
              onChangeText={(text) => {
                ref.current?.scrollToOffset({animated: true, offset: 0});
                setSearchTxt(text);
                setCurrentPage(1);
                if (text && text.length > 0) {
                  dispatch(fetchNews({language: 'en', page: 1, searchTxt: text}));
                } else {
                  setSearchTxt('');
                  dispatch(fetchNews({language: 'en', page: 1, searchTxt: ''}));
                }
              }}
              autoCorrect={false}
              value={searchTxt}
            />
          </View>
          <FlatList
            keyboardShouldPersistTaps="never"
            ref={ref}
            style={styles.newsList}
            contentContainerStyle={styles.newsListContainer}
            data={news}
            onRefresh={onRefresh}
            refreshing={isFetching}
            // keyExtractor={(item) => `${item?.source?.id}`}
            renderItem={renderNewsItem}
            onEndReached={loadMore}
            ListFooterComponent={totalResults > 0 ? FooterComponent : <></>}
          />
        </View>
      ) : (
        <View style={{height: '100%', width: '100%'}}>
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
