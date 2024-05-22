/* Instruments */
import type { ReduxState } from '@/store'

/* handle select state */
export const selectOpenModalNewCycle = (state: ReduxState) => state.modal.newCycle
export const selectOpenModalNewIssue = (state: ReduxState) => state.modal.newIssue
export const selectOpenModalNewModule = (state: ReduxState) => state.modal.newModule
export const selectOpenModalNewProject = (state: ReduxState) => state.modal.newProject
export const selectOpenModalProjectViews = (state: ReduxState) => state.modal.newProjectView
export const selectOpenModalProjectPage = (state: ReduxState) => state.modal.newPage


/* handle select default */
export const selectDefaultValueCycle = (state: ReduxState) => state.modal.defaultValueCycle
export const selectDefaultValueIssue = (state: ReduxState) => state.modal.defaultIssue
export const selectDefaultValueModule = (state: ReduxState) => state.modal.defaultValueModule
export const selectDefaultValueProject = (state: ReduxState) => state.modal.defaultValueProject
export const selectDefaultValueProjectViews = (state: ReduxState) => state.modal.defaultValueProjectView

