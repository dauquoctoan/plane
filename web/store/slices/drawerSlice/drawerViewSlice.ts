/* Core */

import { IIssue } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IDrawerSlice {
  issueSelected?: IIssue;
  showDrawer: boolean;
}

const initialState: IDrawerSlice = {
  showDrawer: false,
  issueSelected: undefined,
};

export const drawerViewSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: state => {
      state.showDrawer = true;
    },
    closeDrawer: state => {
      state.showDrawer = false;
      state.issueSelected = undefined;
    },
    setIssueSlected: (state, action: PayloadAction<IIssue>) => {
      state.issueSelected = action.payload;
    },
  },
});
