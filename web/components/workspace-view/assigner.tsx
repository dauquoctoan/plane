'use client';
import React from 'react';
import TableIssue from '../issue/tableIssue';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';

const AssignerWorkspaceView = () => {
  const info = useSelector(selectInfo);
  return <>{info && <TableIssue assignees={[info?.id || '']} />}</>;
};

export default AssignerWorkspaceView;
