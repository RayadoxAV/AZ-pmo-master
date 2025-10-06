/*
  PMO Master
  Raymundo Paz
  October 5th, 2025
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowSlice {
  contextMenu: {
    visible: boolean;
    x: number;
    y: number;
  }
}

const initialState: WindowSlice = {
  contextMenu: {
    visible: false,
    x: 0,
    y: 0
  }
};

export const WindowSlice = createSlice({
  name: 'window',
  initialState: initialState,
  reducers: {
    setContextMenuProps: (state, action: PayloadAction<{ visible: boolean, x: number, y: number }>): void => {
      state.contextMenu.visible = action.payload.visible;
      state.contextMenu.x = action.payload.x;
      state.contextMenu.y = action.payload.y;
    }
  }
});

export const { setContextMenuProps  } = WindowSlice.actions;

export default WindowSlice.reducer;
