import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILayoutSlice {
    isCollap: boolean;
    isCollapProfile: boolean;
}


const initialState: ILayoutSlice = {
    isCollap: false,
    isCollapProfile: false,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setToggleCollap: (state) => {
            state.isCollap = !state.isCollap;
        },
        setToggleCollapProfileSetting: (state, action: PayloadAction<boolean>) => {
            state.isCollapProfile = action.payload;
        }
    },
})
