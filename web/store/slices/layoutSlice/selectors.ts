/* Instruments */
import type { ReduxState } from '@/store'

/* handle select state */
export const selectIsCollap = (state: ReduxState) => state.layout.isCollap;
export const selectIsCollapProfile = (state: ReduxState) => state.layout.isCollapProfile;