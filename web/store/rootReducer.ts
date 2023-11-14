/* Instruments */
import { counterSlice, layoutSlice, authSlice } from './slices'

export const reducer = {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    layout: layoutSlice.reducer
}