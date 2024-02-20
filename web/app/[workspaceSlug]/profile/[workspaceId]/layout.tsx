import { Spinner } from '@/components/ui/loading/Spinner';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainWorkspaceLayout
        header={
            <div className="flex items-center justify-between w-full">

            </div>
        }
    >
        <div className="h-full">
            {children}
        </div>
    </MainWorkspaceLayout>
}
