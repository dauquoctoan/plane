import RoadMap from '@/components/module/roadMap';
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
                <RoadMap roads={[{
                    title:'Analytics',
                    icon:<HiChartBar />
                }]}/>
            }
        >
            {children}
        </MainWorkspaceLayout>
    );
}
