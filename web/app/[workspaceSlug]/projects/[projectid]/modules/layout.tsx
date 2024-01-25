import { Spinner } from '@/components/ui/loading/Spinner';
import ModuleHeader from '@/layouts/header/projects/module';
import Header from '@/layouts/layout-components/header/header';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header header={<ModuleHeader />} />
            <div className="main">{children}</div>
        </>
    );
}
