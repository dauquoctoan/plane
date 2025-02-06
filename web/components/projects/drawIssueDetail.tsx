'use client';
import React from 'react';
import Drawer from '../ui/drawer';
import IssueDetail from './issueDetail/issueDetail';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectItemIssueSelected, selectShowDrawer } from '@/store/slices/drawerSlice/selectors';
import { drawerViewSlice } from '@/store';

const DrawIssueDetail = () => {
  const showDrawer = useSelector(selectShowDrawer);
  const dispatch = useDispatch();
  const itemIssueSelected = useSelector(selectItemIssueSelected);

  return (
    <Drawer
      className='w-[80%] md:w-[700px]'
      isOpen={itemIssueSelected && showDrawer}
      handleClose={() => {
        dispatch(drawerViewSlice.actions.closeDrawer());
      }}
      content={<IssueDetail issue={itemIssueSelected} />}
    />
  );
};

export default DrawIssueDetail;