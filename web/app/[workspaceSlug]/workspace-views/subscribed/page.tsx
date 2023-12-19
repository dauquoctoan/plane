'use client';
import TreeSelect from '@/components/ui/treeSelect/treeSelect';
import issueService from '@/services/issue-services';
import React, { useEffect } from 'react';

const page = () => {
    const treeData = [
        {
            title: 'Priority',
            children: [
                {
                    title: 'Urgent',
                    value: 'urgent',
                },
                {
                    title: 'Hight',
                    value: 'hight',
                },
                {
                    title: 'Medium',
                    value: 'medium',
                },
                {
                    title: 'Low',
                    value: 'low',
                },
                {
                    title: 'None',
                    value: 'none',
                },
            ],
            render: () => (
                <div className="text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    <span>Node1</span>
                </div>
            ),
        },
        {
            title: 'Node2',
            value: '0-1',
        },
    ];

    issueService.test({ vlxx: ['sdf', 'sfsdf'] });

    return (
        <div>
            <TreeSelect
                data={treeData}
                isMutiple
                onChange={(e) => {
                    console.log(e);
                }}
                defaultValue={['0-0-2', '0-1']}
            >
                vlxx
            </TreeSelect>
        </div>
    );
};

export default page;
