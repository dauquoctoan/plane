import Dashboard from '@/components/dashboard/page';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import { MdOutlineWindow } from 'react-icons/md';

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <MainWorkspaceLayout
            header={
                <div className="flex items-center gap-2">
                    <MdOutlineWindow />
                    <span>Dashboard</span>
                </div>
            }
        >
            <div className="w-full p-8 box-border">
                <Dashboard />
            </div>
        </MainWorkspaceLayout>
    );
}
