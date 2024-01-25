'use client';
import { IData, IIssue, IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import TableIssueDND from '../projectIssue';

const TableCycleDetail = () => {
    const params = useParams<IParams>();
    return <TableIssueDND query={{ cycle_id: params.cycleid }} />;
};

export default TableCycleDetail;
