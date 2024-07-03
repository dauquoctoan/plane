import RoadMap from '@/components/module/roadMap';
import { Spinner } from '@/components/ui/loading/Spinner';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import { RxAvatar } from 'react-icons/rx';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainWorkspaceLayout
      header={
        <RoadMap
          roads={[
            {
              title: 'Profile',
              icon: <RxAvatar />,
            },
          ]}
        />
      }
    >
      <div className="h-full">{children}</div>
    </MainWorkspaceLayout>
  );
}
