import Header from '@/components/setting/header';
import Menu from '@/components/setting/workspaceMenu';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainWorkspaceLayout
        header={
            <div className="flex items-center justify-between w-full">
                <Header />
            </div>
        }
    >
        <div className="h-full flex gap-5 p-5">
            <div className='w-[300px]'><Menu /></div>
            <div className='flex-1'>{children}</div>
        </div>
    </MainWorkspaceLayout>
}
