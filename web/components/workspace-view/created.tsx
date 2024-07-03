'use client';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import TableIssue from '../issue/tableIssue';

const CreatedWrkspaceView = () => {
  const info = useSelector(selectInfo);
  return <TableIssue createBys={[info?.id || '']} />;
};

export default CreatedWrkspaceView;
