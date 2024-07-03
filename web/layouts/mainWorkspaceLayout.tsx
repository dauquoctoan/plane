import React, { ReactElement } from 'react';
import Header from './layout-components/header/header';

const MainWorkspaceLayout = ({
  header,
  children,
}: {
  header: ReactElement;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header header={header} />
      <div className="main">{children}</div>
    </>
  );
};

export default MainWorkspaceLayout;
