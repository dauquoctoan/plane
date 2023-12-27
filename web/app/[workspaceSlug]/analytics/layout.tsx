import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import { HiChartBar } from 'react-icons/hi2';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MainWorkspaceLayout
            header={
                <div className="flex items-center gap-2">
                    <HiChartBar />
                    <span>Analytics</span>
                </div>
            }
        >
            {children}
        </MainWorkspaceLayout>
    );
}
