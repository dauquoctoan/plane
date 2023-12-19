'use client';
import TableIssue from '@/components/issue/tableIssue';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const page = () => {
    const info = useSelector(selectInfo);
    return <TableIssue createBys={[info?.id || '']} />;
};

export default page;
