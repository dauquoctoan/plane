'use client';
import { useDataFilter } from '@/hooks';
import React from 'react';
import { IItemData, IItemSelected } from '../ui/collapse/collapse';
import { ItemSelected } from './fillterQueryIssue';
import { filterSelected } from '../module/createViewIssue';

function _filter(datas: IItemData[], key: string[]): IItemSelected {
    return datas.reduce((data: IItemSelected, item) => {
        let newData: IItemSelected = { ...data };

        if (item.value && typeof key !== 'string' && key.includes(item.value)) {
            newData[item.value] = item;
        }

        if (item.children)
            newData = { ...newData, ..._filter(item.children, key) };

        return newData;
    }, {});
}

const FilterTableIssue = ({
    query,
}: {
    query?: { [e: string]: string | string[] };
}) => {
    const { data } = useDataFilter();
    const lsMoreID = ['subscribers', 'assignees', 'createBys'];

    const lsKey: string[] = Object.keys(query || {}).reduce(
        (data: string[], key) => {
            if (query && typeof query[key] === 'string') {
                const id = query[key] as string;
                if (lsMoreID.includes(key)) {
                    return [...data, key + '::' + id];
                }
                return [...data, id];
            }

            if (
                query &&
                typeof query[key] === 'object' &&
                query[key].length > 0
            ) {
                const lsID: string[] = query[key] as string[];
                if (lsMoreID.includes(key)) {
                    return [...data, ...lsID.map((e) => key + '::' + e)];
                }
                return [...data, ...lsID];
            }

            return data;
        },
        [],
    );

    const itemSlected = _filter(data, lsKey);

    return <ItemSelected dataSelected={filterSelected(data, itemSlected)} />;
};

export default FilterTableIssue;
