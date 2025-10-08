/*
  PMO Master
  Raymundo Paz
  October 5th, 2025
*/

import { configureStore } from '@reduxjs/toolkit';
import WindowSlice from './slices/WindowSlice';
import WorkplanSlice from './slices/WorkplanSlice';

const State = configureStore({
  reducer: {
    window: WindowSlice,
    workplan: WorkplanSlice
  }
});

export type RootState = ReturnType<typeof State.getState>;
export type AppDispatch = typeof State.dispatch;

export default State;
