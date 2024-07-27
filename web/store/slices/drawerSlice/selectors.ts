/* Instruments */
import type { ReduxState } from '@/store';

/* handle select state */
export const selectItemIssueSelected = (state: ReduxState) =>
  state.drawer.issueSelected;
export const selectShowDrawer = (state: ReduxState) => state.drawer.showDrawer;
