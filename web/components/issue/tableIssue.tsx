'use client';
import issueService from '@/services/issue-services';
import { IfilterIssue } from '@/types';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Table from '../ui/table/table';
import { TableConfigs } from '@/constants/issue';
import FilterTableIssue from './filterTableIssue';
import { useSelector } from '@/store';
import { selectlsDisableTable } from '@/store/slices/issueView/selectors';
import { usePathname } from 'next/navigation';

const IssueTableFilter: React.FC<IfilterIssue> = ({ ...res }) => {
  const lsDisable = useSelector(selectlsDisableTable);
  const pathName = usePathname();
  const { data: issue } = useSWR(pathName, (e) => {
    return issueService.findIssues({ ...res });
  });
  const { data } = useSWR(pathName, (e) => {
    return issueService.findIssues({ ...res });
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, []);

  TableConfigs[1].fixed = width > 768 ? 'left' : undefined;

  return (
    <div>
      <div>
        {Object.keys(res || {}).length > 0 && (
          <div className="px-3 border-t flex items-center gap-2">
            <FilterTableIssue query={{ ...res }} />
          </div>
        )}
        <Table
          lsKeyDisable={lsDisable}
          configs={TableConfigs}
          className="height-table-body"
          fixedHeader
          data={issue}
        />
      </div>
    </div>
  );
};

export default IssueTableFilter;
