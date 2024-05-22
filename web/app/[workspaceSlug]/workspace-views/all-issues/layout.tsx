'use client';
import CreateViewsBtn from '@/components/issue/createViewsBtn';
import TabsIssue from '@/components/issue/tabs';
import RoadMap from '@/components/module/roadMap';
import HeaderAllIssue from '@/layouts/header/alllIssue/allIssue';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import { AiFillTags } from 'react-icons/ai';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MainWorkspaceLayout
            header={
               <div className='flex items-center justify-between'>
                    <RoadMap roads={[{
                        title:'All issues',
                        icon: <AiFillTags />
                    }]}/>
                    <HeaderAllIssue/>
                </div>
            }
        >
            <div className="h-full">
                <div className="w-full pt-1 flex items-center gap-2">
                    <TabsIssue />
                    <CreateViewsBtn />
                </div>
                {children}
            </div>
        </MainWorkspaceLayout>
    );
}
