import CycleDetail from '@/layouts/header/projects/cycleDetail';
import ProjectLayout from '@/layouts/header/projects/layout';

export default function WorkspaceLayout({
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
}) {
    return (
        <>
            <ProjectLayout header={<CycleDetail />}>{children}</ProjectLayout>
        </>
    );
}
