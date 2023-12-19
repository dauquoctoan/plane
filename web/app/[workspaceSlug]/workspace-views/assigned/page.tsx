'use client';
import TableIssue from '@/components/issue/tableIssue';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React from 'react';

const page = () => {
    const info = useSelector(selectInfo);
    return <>{info && <TableIssue assignees={[info?.id || '']} />}</>;
};

export default page;
