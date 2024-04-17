import React from 'react';
import Graph from './graph';
import IssueBox from './issueBox';
import IssueStates from './issueStates';
import Popover from '../ui/popover/popover';

const Dashboard = () => {
    return (
        <div className="w-full h-auto">
            <div>
                <h2 className="font-bold text-2xl">
                    Good morning, Đậu Quốc Toàn toandq
                </h2>
                <span className="">🌤️friday, Nov 17 19:22</span>
            </div>
            <div>
                <Popover/>
            </div>
            <div className="mt-5 border rounded flex xl:flex-col xl:h-[742px]">
                <div className="grid grid-cols-2 flex-[1]">
                    <div className="h-48 p-3 box-border border-r">
                        <div>Issues assigned to you</div>
                        <div className="font-bold xl:text-2xl ">0</div>
                    </div>
                    <div className="h-48 p-3 box-border">
                        <div>Issues assigned to you</div>
                        <div className="font-bold text-2xl">0</div>
                    </div>
                    <div className="h-48 p-3 box-border border-r border-t">
                        <div>Issues assigned to you</div>
                        <div className="font-bold text-2xl">0</div>
                    </div>
                    <div className="h-48 p-3 box-border border-t">
                        <div>Issues assigned to you</div>
                        <div className="font-bold text-2xl">0</div>
                    </div>
                </div>
                <div className="flex-[2] flex flex-col border-l p-3 xl:border-l-0 xl:border-t">
                    <div className="font-medium">Activity Graph</div>
                    <div className="w-full flex-1 p-2 box-border">
                        <Graph />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 mt-4 xl:flex-col transition-all">
                <div className="flex-1">
                    <div className="text-lg font-semibold">Overdue Issues</div>
                    <IssueBox />
                </div>
                <div className="flex-1">
                    <div className="text-lg font-semibold">Overdue Issues</div>
                    <IssueBox />
                </div>
            </div>
            <div className="flex gap-5 mt-4 xl:flex-col transition-all">
                <div className="flex-1">
                    <div className="text-lg font-semibold">
                        Issues by States
                    </div>
                    <IssueStates />
                </div>
                <div className="flex-1">
                    <div className="text-lg font-semibold">
                        Issues closed by you
                    </div>
                    <IssueStates />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
