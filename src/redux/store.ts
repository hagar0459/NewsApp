/**
 * @flow
 * Created by Hagar Abdelghafar on 17.06.2022
 */

import {configureStore} from '@reduxjs/toolkit';
import newsReducer from './news';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
