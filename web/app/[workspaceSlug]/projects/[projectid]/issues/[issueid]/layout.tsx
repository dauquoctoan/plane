import RoadMap from '@/components/module/roadMap';
import { icons } from '@/constants';
import Header from '@/layouts/layout-components/header/header';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        header={
          <RoadMap
            roads={[
              {
                title: 'Issues',
                icon: icons.issue,
              },
              {
                title: 'Issue Detail',
              },
            ]}
          />
        }
      />
      <div className="main">{children}</div>
    </>
  );
}
