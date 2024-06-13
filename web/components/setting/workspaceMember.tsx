'use client';
import React, { useState } from 'react';
import Button from '../ui/button';
import { GoSearch } from 'react-icons/go';
import Modal from '../ui/modal';
import AddWorkspaceMembers from './addWorkspaceMembers';
import useSWR, { mutate } from 'swr';
import workspaceService from '@/services/workspace-services';
import { IWorkspace, IWorkspaceMember } from '@/types';
import Avatar from '../ui/avatar';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MEMBER_ROLE_KEY } from '@/constants';
import { useNoti } from '@/hooks';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';

const WorkspaceMember = () => {
    const [searchMember, setSearchMember] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const noti = useNoti();
    const { data: workspaceMember } = useSWR('workspace-member', () => {
        return workspaceService.getMemberFromWorkspace<IWorkspaceMember[]>();
    });
    const info = useSelector(selectInfo);

    const filters = searchMember
        ? workspaceMember?.filter((e) =>
              createName(e.user.first_name, e.user.last_name).includes(
                  searchMember,
              ),
          )
        : workspaceMember;

    const removeMembers = async (id: string) => {
        mutate('workspace-member', async (data: any) => {
            const res = await workspaceService.removeMemberFromWorkspace(id);

            if (res) {
                noti?.success('Remove Member success');
                return data.filter((e: IWorkspaceMember) => e.user.id !== id);
            } else {
                noti?.error('Remove Member error');
                return data;
            }
        });
    };

    function createName(firstName: string = '', lastName: string = '') {
        return firstName + ' ' + lastName;
    }

    return (
        <div className="w-full">
            <div className="flex md:flex-row flex-col md:items-center justify-between w-full">
                <div>Members</div>
                <div className="flex items-center gap-3 md:flex-row flex-col ">
                    <div className="relative">
                        <input
                            className="outline-none border rounded pl-6"
                            placeholder="Search members"
                            onChange={(e) => {
                                setSearchMember(e.target.value);
                            }}
                        />
                        <GoSearch className="absolute left-1 top-[50%] text-color-text-sidebar translate-y-[-50%]" />
                    </div>
                    <Button
                        text="Add member"
                        typeBTN="primary"
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    />
                </div>
            </div>
            <div className="w-full mt-9">
                {filters &&
                    filters.map((e, i) => {
                        return (
                            <div
                                key={i}
                                className="border-t px-4 py-2 flex justify-between hover:bg-theme-secondary cursor-pointer group items-center"
                            >
                                <div className="flex gap-2">
                                    <Avatar>
                                        {e.user.last_name ||
                                            e.user.first_name ||
                                            ''}
                                    </Avatar>
                                    <div>
                                        {createName(
                                            e.user.first_name,
                                            e.user.last_name,
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="font-bold text-[12px]">
                                        {MEMBER_ROLE_KEY[e.role]}
                                    </div>
                                    <div className="w-8">
                                        <IoIosCloseCircleOutline
                                            onClick={() => {
                                                if (
                                                    info?.workspace?.owner !=
                                                    e.id
                                                ) {
                                                    e.user.id &&
                                                        removeMembers(
                                                            e.user.id,
                                                        );
                                                }
                                            }}
                                            className={`group-hover:block hidden ${
                                                info?.workspace?.owner !=
                                                e.user.id
                                                    ? 'text-color-error'
                                                    : ''
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <Modal
                isOpen={isOpen}
                handleClose={() => {
                    setIsOpen(false);
                }}
                content={<AddWorkspaceMembers setIsOpen={setIsOpen} />}
            />
        </div>
    );
};

export default WorkspaceMember;
