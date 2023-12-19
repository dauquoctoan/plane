import React, { useState } from 'react';
import Tab from '../ui/tab';
import { LiaPlusSolid } from 'react-icons/lia';
import Modal from '../ui/modal';
import CreateViewIssue from './createViewIssue';
import IssueTable from './issueTable';
import useSWR from 'swr';
import { ISSUE_VIEWS_KEY, MEMBER_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IUser } from '@/types';

const AllIsue = () => {
    const [isOpenCreateIssue, setIsOpenCreateIssue] = useState(false);

    return (
        <div className="h-full">
            <div className="w-full pt-1 flex items-center gap-2">
                <Tab
                    lsLabel={[
                        <div className="text-base px-3">All issue</div>,
                        <div className="text-base px-3">Assigned</div>,
                        <div className="text-base px-3">Created</div>,
                        <div className="text-base px-3">Subscribed</div>,
                    ]}
                    onChange={(e) => {
                        alert('vlxx');
                        console.log(e);
                    }}
                />
                <div
                    onClick={() => {
                        setIsOpenCreateIssue(true);
                    }}
                    className="rounded-full hover:bg-color-special-secondary cursor-pointer p-[7px]"
                >
                    <LiaPlusSolid className="text-color-special-primary" />
                </div>
            </div>
            <IssueTable />
            <Modal
                isOpen={isOpenCreateIssue}
                content={<CreateViewIssue />}
                handleClose={() => {
                    setIsOpenCreateIssue(false);
                }}
            />
        </div>
    );
};

export default AllIsue;
