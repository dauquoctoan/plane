import ProjectIssue from '@/components/projects/projectIssue';
import IssueHeader from '@/layouts/header/projects/issue';
import Header from '@/layouts/layout-components/header/header';
import React from 'react';

const Issues = () => {
  return (
    <>
      <Header header={<IssueHeader />} />
      <div className="main">
        <ProjectIssue />
      </div>
    </>
  );
};

export default Issues;
