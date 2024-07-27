'use client';
import { SWR_KEY_STATES } from '@/apiKey';
import CreateState from '@/components/layout/navbar/createState';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { icons } from '@/constants';
import { getIcons } from '@/helpers';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import { IParams, IState } from '@/types';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';

const StateSetting = () => {
  const params = useParams<IParams>();

  const noti = useNoti();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: states } = useSWR(SWR_KEY_STATES(params.projectid), () =>
    issueService.getState(params.projectid)
  );

  return (
    <div>
      <div className='flex justify-end'>
        <Button
          typeBTN="primary"
          className="mb-2"
          onClick={() => {
            setIsOpen(true);
          }}
        >{icons.plus}
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {states?.map((e, i) => {
          return (
            <div
              key={i}
              className="px-2 py-1 justify-between border rounded flex gap-2 items-center"
            >
              <div className="flex items-center gap-2">
                <div>{getIcons(e.group, e.color)}</div>
                <div className="text-sm">{e.name}</div>
              </div>
              {e.project_id && (
                <div
                  onClick={async () => {
                    const result = await issueService.deleteState(e.id);
                    if (result) {
                      noti?.success('Delete state success');
                      mutate<IState[]>(SWR_KEY_STATES(params.projectid), (data) => {
                        return data?.filter((item: IState) => {
                          return item.id != e.id;
                        });
                      });
                    } else noti?.error('Delete state error');
                  }}
                >
                  {icons.delete}
                </div>
              )}
            </div>
          );
        })}
        {states && (
          <Modal
            isOpen={isOpen}
            handleClose={() => {
              setIsOpen(false);
            }}
            content={
              <CreateState
                handleClose={() => {
                  setIsOpen(false);
                }}
                projectId={params.projectid}
                states={states}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default StateSetting;
