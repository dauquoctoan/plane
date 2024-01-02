import { Spinner } from '@/components/ui/loading/Spinner';
import IssueHeader from '@/layouts/header/projects/issue';
import ProjectLayout from '@/layouts/header/projects/layout';
import Header from '@/layouts/layout-components/header/header';
import dynamic from 'next/dynamic';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ProjectLayout header={IssueHeader}>
                {children}
            </ProjectLayout>
        </>
    );
}
