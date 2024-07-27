'use client';
import { SWR_KEY_CYCLES_BY_PROJECT, SWR_KEY_PROJECT_VIEW } from '@/apiKey';
import CycleProgess from '@/components/ui/cycleProgess';
import Tab from '@/components/ui/tab';
import projectService from '@/services/project-services';
import { modalSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ICycle, IData, IIssueViews, IParams } from '@/types';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { LuInfo } from 'react-icons/lu';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import useSWR, { mutate } from 'swr';
import DatePicker from '@/components/ui/datepicker/datePicker';
import { useNoti } from '@/hooks';
import { createNickNameLink } from '@/helpers';
import MoreToolls from '@/components/module/moreTools';
import Popover from '@/components/ui/popover';
import { icons } from '@/constants';
import Link from 'next/link';
import APP_CONFIG from '@/configs';
import { useDispatch } from 'react-redux';
import EmptyProjects from '@/components/module/emptyProjects';

const CyclesTable = () => {
  const params = useParams<IParams>();
  const [tab, setTab] = useState('all');
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const { data: cycles } = useSWR(
    SWR_KEY_CYCLES_BY_PROJECT(params.projectid + tab),
    () => {
      return projectService.findAllCyclesByProject<ICycle[]>(
        params.projectid,
        tab
      );
    }
  );

  return (
    <div>
      <div className="border-b px-2">
        <Tab
          lsLabel={[
            { key: 'all', title: 'All' },
            { key: 'active', title: 'Active' },
          ]}
          active="all"
          onChange={e => {
            setTab(e);
          }}
        />
      </div>
      {cycles?.length ? (
        <div>
          <ContainerLink
            links={
              cycles?.map((e, i) => ({
                href: `/${info?.workspace?.slug}/projects/${params.projectid}/cycles/${e.id}`,
                nickname: createNickNameLink(`cycles` + i),
              })) || []
            }
          />
          {cycles?.map((e, i) => <CycleItem key={i} data={e} tab={tab} />)}
        </div>
      ) : (
        <EmptyProjects
          cb={() => {
            dispatch(modalSlice.actions.togleProjetCycle());
          }}
          textBtn="Set your first cycle"
          title="Group and timebox your work in Cycles."
          desc="Break work down by timeboxed chunks, work backwards from your project deadline to set dates, and make tangible progress as a team."
        />
      )}
    </div>
  );
};

const CycleItem = ({ data, tab }: { data: ICycle; tab: string }) => {
  const params = useParams<IParams>();
  const dispatch = useDispatch();
  const info = useSelector(selectInfo);
  const pathName = usePathname();
  const noti = useNoti();
  const link = pathName + '/' + data.id;
  return (
    <div
      className="border-b gap-2 border-theme-border-secondary px-3 flex items-center text-sm cursor-pointer hover:bg-theme-secondary group select-none"
      key={data.id}
    >
      <div
        className="flex items-center gap-2"
        onClick={() => {
          changeRoute(
            `/${info?.workspace?.slug}/projects/${params.projectid}/cycles/${data.id}`
          );
        }}
      >
        <CycleProgess
          percent={data.total && Math.ceil((data.done / data.total) * 100)}
        />
        <div className="w-3 h-3 border border-theme-text-primary rounded-full"></div>
        <div>{data.name}</div>
        <LuInfo className="text-gray-400 hidden group-hover:block" />
      </div>

      <div className="flex flex-1 no-scrool items-center gap-6 overflow-x-auto scroll-hident md:justify-end">
        <div className="flex items-center gap-4">
          <DatePicker
            isChildren={false}
            defaultDate={data.start_date}
            formatDate="MM/DD/YYY"
            beforeUpdateValue={(e:any) => {
              return projectService.upDateCycle(data.id, {
                start_date: e || (null as any),
              });
            }}
          >
            Start Date
          </DatePicker>
          <DatePicker
            isChildren={false}
            formatDate="MM/DD/YYY"
            defaultDate={data.end_date}
            beforeUpdateValue={(e:any) => {
              return projectService.upDateCycle(data.id, {
                end_date: e || (null as any),
              });
            }}
          >
            End Date
          </DatePicker>
        </div>
        <div className="px-6 py-1 bg-color-special-secondary rounded text-[11px]">
          Draft
        </div>
        <div className="p-2 rounded-full border">
          <BsFillPersonLinesFill />
        </div>
        <MdOutlineStarBorderPurple500
          className={`text-lg ${data.is_favorite ? 'text-yellow-500' : ''}`}
          onClick={async () => {
            const result = await (data.is_favorite
              ? projectService.deleteCyclesFavorite({
                  user_id: info?.id || '',
                  cycle_id: data?.id || '',
                })
              : projectService.createCyclesFavorite({
                  user_id: info?.id || '',
                  cycle_id: data?.id || '',
                }));

            if (result) {
              mutate<ICycle[]>(
                SWR_KEY_CYCLES_BY_PROJECT(params.projectid + tab),
                (cycles) => {
                  return cycles?.map((item: ICycle) => {
                    return { ...item, is_favorite: data.is_favorite ? 0 : 1 };
                  });
                }
              );
              noti?.success(
                `${data.is_favorite ? 'remove' : 'add'} cycle favorite success`
              );
            } else
              noti?.error(
                `${data.is_favorite ? 'remove' : 'add'} cycle favorite error`
              );
          }}
        />
      </div>
      <Popover
        content={
          <MoreToolls
            data={[
              {
                text: 'Edit',
                icon: icons.edit,
                cb: () => {
                  dispatch(modalSlice.actions.setCycle(data));
                  dispatch(modalSlice.actions.togleProjetCycle());
                },
              },
              {
                icon: icons.newTab,
                render: () => {
                  return (
                    <Link href={link} target="_blank">
                      Open new tab
                    </Link>
                  );
                },
              },
              {
                text: 'Copy link',
                icon: icons.copyLink,
                cb: () => {
                  try {
                    navigator.clipboard.writeText(APP_CONFIG.DOMAIN_URL + link);
                    noti?.success('Copy link success');
                  } catch (error) {
                    noti?.success('Copy link error');
                  }
                },
              },
              {
                text: 'Delete',
                icon: icons.delete,
                cb: async () => {
                  const result = await projectService.deleteCycle(
                    data.id || ''
                  );
                  if (result) {
                    noti?.success('Delete cycle success');
                    mutate<ICycle[]>(
                      SWR_KEY_CYCLES_BY_PROJECT(params.projectid + tab),
                      (e) => {
                        return e?.filter(
                          (itemCycle) => itemCycle.id != data.id
                        );
                      }
                    );
                  } else noti?.error('Delete cycle error');
                },
              },
            ]}
          />
        }
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className="p-2 font-semibold text-sm rounded-full hover:bg-color-special-secondary"
        >
          <IoIosMore />
        </div>
      </Popover>
    </div>
  );
};

export default CyclesTable;
