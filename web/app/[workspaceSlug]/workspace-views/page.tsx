import CreateViewsBtn from '@/components/issue/createViewsBtn';
import ListTableIssue from '@/components/issue/listTableIssue';
import TabsIssue from '@/components/issue/tabs';
import RoadMap from '@/components/module/roadMap';
import HeaderAllIssue from '@/layouts/header/alllIssue/allIssue';
import CustomeLayout from '@/layouts/header/alllIssue/customeLayout';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import React from 'react';
import { AiFillTags } from 'react-icons/ai';

const page = () => {
    return (
        <MainWorkspaceLayout
            header={
                <div className="flex items-center justify-between w-full">
                    <RoadMap roads={[{
                        title:'Views',
                        icon: <AiFillTags />
                    }]}/>
                    <div className="mr-2">
                        <CustomeLayout isList />
                    </div>
                </div>
            }
        >
            <div className="h-full">
                <ListTableIssue />
            </div>
        </MainWorkspaceLayout>
    );
};

export default page;
