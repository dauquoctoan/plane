'use client';
import { CYCLES_BY_PROJECT_KEY, MODULEs_BY_PROJECT_KEY } from '@/apiKey';
import CycleProgess from '@/components/ui/cycleProgess';
import Tab from '@/components/ui/tab';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ICycle, IData, IModule, IParams } from '@/types';
import { useParams, useRouter } from 'next/navigation';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { LuInfo } from 'react-icons/lu';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import useSWR from 'swr';

const ModulesTable = () => {
    const params = useParams<IParams>();
    const info = useSelector(selectInfo);
    const { data: modules } = useSWR<IData<IModule[]>>(
        MODULEs_BY_PROJECT_KEY(params.projectid),
        () => {
            return projectService.findAllModulesByProject<IData<IModule[]>>(
                params.projectid,
            );
        },
    );

    return (
        <div>
            {modules && modules.length > 0 ? (
                <>
                    <div className="border-b px-2">
                        <Tab
                            lsLabel={[
                                { key: 'sdf', title: 'sdfsdf' },
                                { key: 'ssdfdf', title: 'sdfsdfsdf' },
                            ]}
                            active="sdf"
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                    </div>
                    <div className="">
                        <ContainerLink
                            links={
                                modules?.map((e, i) => ({
                                    href: `/${info?.workspace?.slug}/projects/${params.projectid}/modules/${e.id}`,
                                    nickname: `sdfsdfsdfsdf` + i,
                                })) || []
                            }
                        />
                        {modules?.map((e, i) => (
                            <ModulesItem key={i} data={e} />
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

const ModulesItem = ({ data }: { data: IModule }) => {
    const params = useParams<IParams>();
    const info = useSelector(selectInfo);

    return (
        <div
            className="border-b border-theme-border-secondary px-3 flex items-center text-sm cursor-pointer hover:bg-theme-secondary group select-none"
            onClick={() => {
                changeRoute(
                    `/${info?.workspace?.slug}/projects/${params.projectid}/modules/${data.id}`,
                );
            }}
        >
            <div className="flex-1 flex items-center gap-2">
                <CycleProgess
                    percent={
                        data.total && Math.ceil((data.done / data.total) * 100)
                    }
                />
                <div className="w-3 h-3 border border-theme-text-primary rounded-full"></div>
                <div>{data.name}</div>
                <LuInfo className="text-gray-400 hidden group-hover:block" />
            </div>
            <div className="flex items-center gap-6">
                <div className="px-6 py-1 bg-color-special-secondary rounded text-[11px]">
                    Draft
                </div>
                <div className="p-2 rounded-full border">
                    <BsFillPersonLinesFill />
                </div>
                <MdOutlineStarBorderPurple500 className="text-lg" />
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="p-2 rounded-full hover:bg-color-special-secondary"
                >
                    <IoIosMore />
                </div>
            </div>
        </div>
    );
};

export default ModulesTable;
