'use client';
import CreateViewsBtn from '@/components/issue/createViewsBtn';
import TabsIssue from '@/components/issue/tabs';
import Tab from '@/components/ui/tab';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';

export default function WorkspaceViewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <div className="w-full pt-1 flex items-center gap-2">
                <TabsIssue />
                <CreateViewsBtn />
            </div>
            {children}
        </div>
    );
}
