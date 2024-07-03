'use client';
import Header from '@/layouts/layout-components/header/header';
import React, { FC, ReactElement, ReactNode } from 'react';

const ProjectLayout = ({
  children,
  header: HeaderContent,
}: {
  children: React.ReactNode;
  header: string | JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header header={HeaderContent} />
      <div className="main">{children}</div>
    </>
  );
};

export default ProjectLayout;
