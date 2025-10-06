/*
  PMO Master
  Raymundo Paz
  October 5th, 2025
*/

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './State';

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
