'use client';
import CreateViewsBtn from '@/components/issue/createViewsBtn';
import TabsIssue from '@/components/issue/tabs';
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
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <AiFillTags />
            <h1 className="font-bold">All issues</h1>
          </div>
          <HeaderAllIssue />
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
