import React, { FC, useRef } from 'react';
import { IoIosMore } from 'react-icons/Io';
import { IBoardIssues } from './board';
import SelectState from '@/components/module/selectState';
import { useParams } from 'next/navigation';
import { IParams } from '@/types';
import issueService from '@/services/issue-services';
export interface IProps {
    data: IBoardIssues;
    setBlocks: React.Dispatch<React.SetStateAction<IBoardIssues[]>>;
}
const IssueDragItem: FC<IProps> = ({ data, setBlocks }) => {
    const prevState = useRef<string>('');
    const param = useParams<IParams>();
    return (
        <div className="block relative bg-theme-primary p-5 mb-3 border rounded">
            <div className="min-w-[300px] bg-theme-primary flex flex-col">
                <div className="flex justify-between">
                    <div className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                        {data.id}
                    </div>
                    <div className="p-3 invisible hover:visible bg-theme-secondary">
                        <IoIosMore />
                    </div>
                </div>
                <div className="font-bold text-sm bg-theme-primary">
                    {data.title}
                </div>
                <div className="flex gap-2 bg-theme-primary">
                    {data.data?.state_id && data.id && (
                        <SelectState
                            projectId={param.projectid}
                            stateId={data.data?.state_id}
                            onChange={(id) => {
                                // setBlocks((state) => {
                                //     let tempItem = {};
                                //     if (prevState.current) {
                                //         const newData = [...state];
                                //         newData.forEach((e) => {
                                //             if (e.id === prevState.current) {
                                //                 let index =
                                //                     e.children?.findIndex(
                                //                         function (element) {
                                //                             if (
                                //                                 element.id ===
                                //                                 id
                                //                             ) {
                                //                                 tempItem =
                                //                                     element;
                                //                                 return true;
                                //                             }
                                //                             return false;
                                //                         },
                                //                     );
                                //                 if (index && index !== -1) {
                                //                     e.children?.splice(
                                //                         index,
                                //                         1,
                                //                     );
                                //                 }
                                //             }
                                //         });
                                //     }
                                //     return state;
                                // });
                            }}
                            beforeUpdateValue={(id) => {
                                prevState.current = id as string;
                                return issueService.updateIssue(
                                    data.id as string,
                                    {
                                        state_id: id as string,
                                    },
                                );
                            }}
                        />
                    )}
                    <div>tag item</div>
                    <div>tag item</div>
                    <div>tag item</div>
                    <div>tag item</div>
                </div>
            </div>
        </div>
    );
};

export default IssueDragItem;
