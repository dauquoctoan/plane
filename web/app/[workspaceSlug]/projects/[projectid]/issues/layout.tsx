import { Spinner } from '@/components/ui/loading/Spinner';
import IssueHeader from '@/layouts/header/projects/issue';
import Header from '@/layouts/layout-components/header/header';
import dynamic from 'next/dynamic';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const AuthLayout = dynamic(() => import('@/layouts/authLayout'), {
    loading: () => <Spinner text="Loading your workspace..." />,
});

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header
                header={
                    <IssueHeader />
                }
            />
            <div className="main">{children}</div>
        </>
    );
}
