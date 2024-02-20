import { renderEmoji } from '@/helpers';
import { IProject } from '@/types';
import Image from 'next/image';
import React from 'react';
import {
    AiOutlineCalendar,
    AiOutlineDelete,
    AiTwotoneDelete,
} from 'react-icons/ai';
import moment from 'moment';
import { BiSolidEditAlt } from 'react-icons/bi';
import Popover from '../ui/popover';
import { IoStarOutline } from 'react-icons/io5';
import { CiLink } from 'react-icons/ci';
import projectService from '@/services/project-services';
import { useNoti } from '@/hooks';
import { mutate } from 'swr';
import { LS_PROJECT_KEY } from '@/apiKey';
import { useSelector } from 'react-redux';
import { selectInfo } from '@/store/slices/authSlice/selectors';

interface IPropsProjectItem {
    dataItem: IProject;
}

const ProjectITem: React.FC<IPropsProjectItem> = ({ dataItem }) => {
    const noti = useNoti()
    const info = useSelector(selectInfo);

    return (
        <div className="rounded cursor-pointer bg-theme-secondary border shadow-theme-secondary">
            <div className="h-32 relative">
                <Image
                    layout="fill"
                    src={dataItem.cover_image || ''}
                    alt={`Default project cover image`}
                    objectFit="cover"
                    className="w-full h-full rounded-tl rounded-tr"
                />
                <div className="absolute left-0 bottom-0 mb-4 ml-4 bg-green-500 px-2 py-[2px] select-none text-theme-primary text-sm rounded z-20"
                    onClick={async () => {
                        if (!dataItem.is_member) {
                            mutate(LS_PROJECT_KEY(info?.last_workspace_id), async (data: any) => {
                                const res = await projectService.joinProject({ projectId: dataItem.id || '' })
                                if (res) {
                                    noti?.success('join project success')
                                    return data.filter((e: any) => e.id != dataItem.id)
                                } else {
                                    noti?.error('join project error')
                                    return data;
                                }
                            })
                        }
                    }}
                >
                    {dataItem.is_member ? 'Join' : 'Select to join'}
                </div>
            </div>
            <div className="h-40 px-4 py-3 flex flex-col">
                <div className="flex-1">
                    <div className="flex gap-2 items-center w-full overflow-hidden text-ellipsis">
                        <h2 className="font-bold text-xl whitespace-nowrap text-ellipsis overflow-hidden">
                            {dataItem.name}
                        </h2>
                        {renderEmoji(dataItem.emoji || '')}
                    </div>
                    <h4 className="font-medium whitespace-nowrap text-ellipsis overflow-hidden mt-4">
                        {dataItem.description}
                    </h4>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <AiOutlineCalendar />
                        <span>{moment(dataItem.createdAt).format('ll')}</span>
                    </div>
                    <div className="flex items-center gap-2 select-none text-lg">
                        <BiSolidEditAlt className="hover:scale-110" />
                        <Popover
                            contentClassName="border shadow-theme-primary"
                            placement="bottomLeft"
                            content={
                                <div>
                                    <div className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none">
                                        <AiOutlineDelete />
                                        <span className="text-sm font-medium">
                                            Delete Project
                                        </span>
                                    </div>
                                    <div className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none">
                                        <IoStarOutline />
                                        <span className="text-sm font-medium">
                                            Add to favorites
                                        </span>
                                    </div>
                                    <div className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none">
                                        <CiLink />
                                        <span className="text-sm font-medium">
                                            Coppy project link
                                        </span>
                                    </div>
                                </div>
                            }
                        >
                            <div className="hover:scale-110 p-1 pb-0">...</div>
                        </Popover>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectITem;
