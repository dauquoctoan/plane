'use client';

import { SWR_KEY_PROJECTS } from '@/apiKey';
import Switch from '@/components/ui/swtich/swtich';
import { icons } from '@/constants';
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IParams, IProject, IProjectMember, IUser } from '@/types';
import { useParams } from 'next/navigation';
import useSWR, { mutate } from 'swr';

const FeatureSetting = () => {
  const features = [
    {
      name: 'Cycles',
      key: 'cycle_view',
      desc: 'Time-box issues and boost momentum, similar to sprints in scrum.',
      icons: icons.cycle,
    },
    {
      name: 'Modules',
      key: 'module_view',
      desc: 'Group multiple issues together and track the progress.',
      icons: icons.module,
    },
    {
      name: 'Views',
      key: 'issue_views_view',
      desc: 'Apply filters to issues and save them to analyse and investigate work.',
      icons: icons.view,
    },
    {
      name: 'Pages',
      key: 'page_view',
      desc: 'Document ideas, feature requirements, discussions within your project.',
      icons: icons.page,
    },
  ];
  const info = useSelector(selectInfo);
  const params = useParams<IParams>();
  const noti = useNoti();
  const { data } = useSWR(params.projectid, () => {
    return projectService.findOneProject(params.projectid);
  });
  const handleUpdateProject = async (value: any, key: string) => {
    const result = await projectService.updateProject(params.projectid, {
      [key]: value,
    });

    if (result) {
      noti?.success('Update feature success');
      mutate<IProject[]>(
        SWR_KEY_PROJECTS(info?.last_workspace_id),
        (project) => {
          return [...(project || []), { ...result, [key]: value }];
        }
      );

      mutate<IProject[]>(params.projectid, (project: any) => {
        return { ...(project || []), [key]: value };
      });
    } else noti?.error('update feature error');
  };
  const _data: any = data;

  return (
    <div className="flex flex-col gap-2">
      {data &&
        features.map((e, i) => {
          return (
            <div
              key={i}
              className="justify-between border-b py-2 px-2 flex gap-2 items-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded bg-color-special-secondary">
                  {e.icons}
                </div>
                <div>
                  <div className="text-sm font-bold">{e.name}</div>
                  <div className="text-xs text-color-text-sidebar">
                    {e.desc}
                  </div>
                </div>
              </div>
              <Switch
                value={_data[e.key]}
                onChange={(value: boolean) => {
                  handleUpdateProject(value, e.key);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default FeatureSetting;
