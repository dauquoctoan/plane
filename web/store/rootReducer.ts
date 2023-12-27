/* Instruments */
import { counterSlice, layoutSlice, authSlice, issueViewSlice } from './slices'

export const reducer = {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    layout: layoutSlice.reducer,
    issueView: issueViewSlice.reducer
}