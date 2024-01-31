import ModulesTable from '@/components/projects/module/modules';
import ProjectLayout from '@/layouts/header/projects/layout';
import ModuleHeader from '@/layouts/header/projects/module';
import React from 'react';

const Modules = () => {
    return (
        <div>
            <ProjectLayout header={<ModuleHeader />}>
                <ModulesTable />
            </ProjectLayout>
        </div>
    );
};

export default Modules;
