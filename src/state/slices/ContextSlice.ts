/*
  PMO Master
  Raymundo Paz
  October 20th, 2025
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContextSlice {
  currentPage: 'home' | 'project_list' | 'workplan' | 'settings';
  currentlyFocusedElement: string;
  focusPath: string[];
}

const initialState: ContextSlice = {
  currentPage: 'home',
  currentlyFocusedElement: 'window',
  focusPath: ['window'],
};

export const ContextSlice = createSlice({
  name: 'context',
  initialState: initialState,
  reducers: {},
});

export const {} = ContextSlice.actions;

export default ContextSlice.reducer;
