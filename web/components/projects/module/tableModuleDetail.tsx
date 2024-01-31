'use client';
import { IData, IIssue, IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import TableIssueDND from '../projectIssue';

const TableModuleDetail = () => {
    const params = useParams<IParams>();
    return <TableIssueDND query={{ module_id: params.moduleid }} />;
};

export default TableModuleDetail;