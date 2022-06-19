/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Config from 'react-native-config';
export type newsItem = {
  source: {id: string};
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (props: {language: string; page: number; searchTxt: string; pagesize: number}) => {
    debugger;
    let URL =
      Config.API_URL +
      '/top-headlines?language=' +
      props?.language +
      '&apiKey=' +
      Config.API_KEY +
      '&page=' +
      props?.page +
      '&pageSize=' +
      props?.pagesize;

    if (props.searchTxt.length > 0) {
      URL += '&q=' + props?.searchTxt + '&searchIn=title';
    }
    debugger;
    const response = await fetch(URL);
    debugger;
    return await response.json();
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    loading: false,
    data: [] as newsItem[],
    totalResults: 0,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.data = action.payload.articles.length > 0 ? action.payload.articles.reverse() : [];
      state.totalResults = action.payload.totalResults;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
