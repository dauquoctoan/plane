import CyclesTable from '@/components/projects/cycle/cycles';
import CycleHeader from '@/layouts/header/projects/cycle';
import ProjectLayout from '@/layouts/header/projects/layout';
import React from 'react';

const Cycles = () => {
  return (
    <div>
      <ProjectLayout header={<CycleHeader />}>
        <CyclesTable />
      </ProjectLayout>
    </div>
  );
};

export default Cycles;
