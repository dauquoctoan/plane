import RoadMap from '@/components/module/roadMap';
import MenuSetting from '@/components/projects/setting/projectMenu';
import { Spinner } from '@/components/ui/loading/Spinner';
import Header from '@/layouts/layout-components/header/header';
import dynamic from 'next/dynamic';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const AuthLayout = dynamic(() => import('@/layouts/authLayout'), {
  loading: () => <Spinner text="Loading your workspace..." />,
});

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
                title: 'Projects',
                icon: <PiSuitcaseSimpleBold />,
              },
            ]}
          />
        }
      />

      <div className="main p-4">
        <div className="text-color-text-sidebar font-bold text-[11px] mb-2">
          SETTING
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="w-full md:w-[300px]">
            <MenuSetting />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
