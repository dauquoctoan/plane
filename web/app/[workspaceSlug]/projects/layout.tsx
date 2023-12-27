import { Spinner } from '@/components/ui/loading/Spinner';
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
                    <div className="flex gap-2 items-center">
                        <PiSuitcaseSimpleBold />
                        <span>Projects</span>
                    </div>
                }
            />
            <div className="main">{children}</div>
        </>
    );
}
