import { ICycle, IIssue, IIssueViews, IModule, IProject } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalSlice {
  newIssue: {
    isShow: boolean;
    isDraft: boolean;
  };
  newModule: boolean;
  newProject: boolean;
  newCycle: boolean;
  newProjectView: boolean;
  newPage: boolean;

  //default value
  defaultIssue?: Partial<IIssue>;
  defaultValueModule?: IModule;
  defaultViews?: Partial<IIssueViews>;
  defaultValueProject?: IProject;
  defaultValueCycle?: ICycle;
  defaultValueProjectView?: IIssueViews;
}

const initialState: IModalSlice = {
  newIssue: {
    isShow: false,
    isDraft: false,
  },
  newModule: false,
  newProject: false,
  newCycle: false,
  newProjectView: false,
  newPage: false,

  //default value
  defaultIssue: undefined,
  defaultValueModule: undefined,
  defaultValueProject: undefined,
  defaultValueCycle: undefined,
  defaultValueProjectView: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    //View
    togleProjectViews: state => {
      state.newProjectView = !state.newProjectView;
    },
    setViews: (state, action: PayloadAction<IIssueViews | undefined>) => {
      state.defaultViews = action.payload;
    },
    //Cycle
    togleProjetCycle: state => {
      state.newCycle = !state.newCycle;
    },
    setCycle: (state, action: PayloadAction<ICycle | undefined>) => {
      state.defaultValueCycle = action.payload;
    },
    //module
    togleProjetModule: state => {
      state.newModule = !state.newModule;
    },
    setModule: (state, action: PayloadAction<IModule | undefined>) => {
      state.defaultValueModule = action.payload;
    },
    //issue
    togleNewIssue: (
      state,
      action: PayloadAction<{ isShow: boolean; isDraft: boolean }>
    ) => {
      state.newIssue = action.payload;
    },
    setIssue: (state, action: PayloadAction<Partial<IIssue> | undefined>) => {
      state.defaultIssue = action.payload;
    },
    //page
    togleNewPage: state => {
      state.newPage = !state.newPage;
    },
  },
});
