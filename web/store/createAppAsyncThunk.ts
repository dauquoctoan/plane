/* Core */
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Instruments */
import type { ReduxState, ReduxDispatch } from './reduxStore';

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();
