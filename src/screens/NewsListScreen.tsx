/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import React, {FC, useRef, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ListRenderItemInfo,
  TextInput,
  View,
  I18nManager,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {fetchNews, newsItem} from '../redux/news';
import {NewsCard} from '../components/NewsCard';
import {styles} from '../components/theme/styles';
import {FooterComponent} from '../components/FooterComponent';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../localization';
import {useTheme} from '../components/theme/ThemeProvider';

export const NewsListScreen: FC = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [news, setNews] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  let ref = useRef<FlatList<newsItem>>(null);
  const {data, loading, totalResults} = useSelector((state: RootState) => state.news);
  const {theme} = useTheme();

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
    dispatch(fetchNews({language: I18nManager.isRTL ? 'ar' : 'en', page: 1, searchTxt: '',pagesize:10}));
  }, []);

  const loadMore = () => {
    if (currentPage < totalResults / 10) {
      let page = currentPage + 1;
      dispatch(
        fetchNews({language: I18nManager.isRTL ? 'ar' : 'en', page: page, searchTxt: searchTxt,pagesize:10}),
      );

      setCurrentPage(page);
    }
  };

  const fetchData = () => {
    dispatch(fetchNews({language: I18nManager.isRTL ? 'ar' : 'en', page: 1, searchTxt: searchTxt,pagesize:10}));

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
          navigation.navigate('details', {item: item});
        }}
      />
    );
  };
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      {!loading || news.length > 0 ? (
        <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
          <View style={[styles.inputContainer, {backgroundColor: theme.layoutBg}]}>
            <TextInput
              style={[
                styles.input,
                {backgroundColor: theme.searchContainerBg, placeholderTextColor:theme.textColor},
              ]}
              placeholder={strings.search}
              onChangeText={(text) => {
                ref.current?.scrollToOffset({animated: true, offset: 0});
                setSearchTxt(text);
                setCurrentPage(1);
                if (text && text.length > 0) {
                  dispatch( fetchNews({language: I18nManager.isRTL ? 'ar' : 'en',page: 1,searchTxt: text,pagesize:10}),
                  );
                } else {
                  setSearchTxt('');
                  dispatch(
                    fetchNews({language: I18nManager.isRTL ? 'ar' : 'en', page: 1, searchTxt: '',pagesize:10}),
                  );
                }
              }}
              autoCorrect={false}
              value={searchTxt}
            />
          </View>
          <FlatList
            keyboardShouldPersistTaps="never"
            ref={ref}
            style={{backgroundColor: theme.layoutBg}}
            contentContainerStyle={[styles.newsListContainer, {backgroundColor: theme.layoutBg}]}
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
        <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
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
