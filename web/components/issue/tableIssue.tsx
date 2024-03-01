'use client';
import issueService from '@/services/issue-services';
import { IData, IIssue, IUser, Istate, ILabel, IFillterIssue } from '@/types';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { ITableConfigs } from '../ui/table';
import Table from '../ui/table/table';
import Select from '../ui/select/select';
import { TableConfigs, optionLevel } from '@/constants/issue';
import SelectMemberTable from '../module/selectMember';
import SelectLabels from '../module/selectLabels';
import DatepickerTable from '../module/datepickerTable';
import moment from 'moment';
import FilterTableIssue from './filterTableIssue';
import { useSelector } from '@/store';
import {
    selectListIssue,
    selectlsDisableTable,
} from '@/store/slices/issueView/selectors';
import ListTableIssue from './listTableIssue';
import SelectState from '../module/selectState';
import { usePathname } from 'next/navigation';

export interface IPropsTable extends IFillterIssue {
    // keyApi: string;
}

const IssueTableFilter: React.FC<IPropsTable> = ({ ...res }) => {
    const lsDisable = useSelector(selectlsDisableTable);
    const pathName = usePathname();
    const {
        data: issue,
        isLoading,
        isValidating,
    } = useSWR(pathName, (e) => {
        return issueService.findIssues<IIssue[]>({ ...res });
    });
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
                    data={issue}
                />
            </div>
        </div>
    );
};

export default IssueTableFilter;
