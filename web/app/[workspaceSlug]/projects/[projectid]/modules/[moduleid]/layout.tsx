import Button from '@/components/ui/button';
import CycleDetail from '@/layouts/header/projects/cycleDetail';
import ProjectLayout from '@/layouts/header/projects/layout';
import ModuleDetail from '@/layouts/header/projects/moduleDetail';

export default function WorkspaceLayout({
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
}) {
    return (
        <>
            <ProjectLayout header={<ModuleDetail />}>{children}</ProjectLayout>
        </>
    );
}
