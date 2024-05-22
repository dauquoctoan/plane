import RoadMap from '@/components/module/roadMap';
import { Spinner } from '@/components/ui/loading/Spinner';
import { icons } from '@/constants';
import IssueHeader from '@/layouts/header/projects/issue';
import Header from '@/layouts/layout-components/header/header';
import dynamic from 'next/dynamic';

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
                    <RoadMap roads={
                        [
                            {
                                title: 'Issues',
                                icon: icons.issue
                            },
                            {
                                title: 'Issue Detail',
                            }
                        ]
                    }/>
                }
            />
            <div className="main">{children}</div>
        </>
    );
}
