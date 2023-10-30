/* Instruments */
import { counterSlice } from './slices'
import { authSlice } from './slices/authSlice'

export const reducer = {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
}