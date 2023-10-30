/* Core */import { IInfo, IUser } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getUsertAsync } from './thunks';

interface IAuthSlice {
    info?: IInfo | null;
    statusCode: number;
    isLoading: boolean;
    test: {
        name: string;
        age: number
    }
}

const initialState: IAuthSlice = {
    info: null,
    statusCode: 0,
    isLoading: false,
    test: {
        name: '',
        age: 0
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<IInfo>) => {
            state.info = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsertAsync.pending, (state) => {
                // state.isLoading = true;
            })
            .addCase(getUsertAsync.fulfilled, (state, action) => {
                // state.info = action.payload || null;
                // state.isLoading = false;
                state.test.name = 'vai cal lon'
                state.test.age = 100
            })
    },
})
