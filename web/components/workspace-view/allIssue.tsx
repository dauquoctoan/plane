'use client'
import React, { useEffect } from 'react';
import TableIssue from '../issue/tableIssue';
import { issueViewSlice, useDispatch } from '@/store';

const AllIssueWorkspaceView = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(
      issueViewSlice.actions.setDisableTable(getLocalStorage()||[])
    );
  },[])
  
  function getLocalStorage():string[]{
    const properties = localStorage?.getItem('display-table') || null
    return JSON.parse(properties || '{}')?.properties
  }
  return <TableIssue />;
};

export default AllIssueWorkspaceView;
