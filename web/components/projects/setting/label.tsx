'use client';

import { SWR_KEY_LABELS_BY_PROJECT } from '@/apiKey';
import CreateLabel from '@/components/issue/createLabel';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import Modal from '@/components/ui/modal';
import { icons } from '@/constants';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import { ILabel, IParams } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LabelSetting = () => {
  const params = useParams<IParams>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: labels } = useSWR(
    SWR_KEY_LABELS_BY_PROJECT(params.projectid),
    () => {
      return issueService.findLabelsByProject({ projectId: params.projectid });
    }
  );

  return (
    <div className="flex flex-col gap-2">
      <div className='flex justify-end'>
        <Button
          typeBTN="primary"
          className="mb-2"
          onClick={() => {
            setIsOpen(true);
          }}
        >{icons.plus}</Button>
      </div>

      {labels?.map((e, i) => <LabelSettingItem key={i} data={e} />)}
      <Modal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
        content={
          <CreateLabel
            handleClose={() => {
              setIsOpen(false);
            }}
            projectId={params.projectid}
          />
        }
      />
    </div>
  );
};

const LabelSettingItem = ({ data }: { data: ILabel }) => {
  const [isEddit, setIsEdit] = useState(false);
  const noti = useNoti();

  return (
    <div className="border h-9 rounded-md px-2 flex items-center gap-2 w-full justify-between">
      <div className="flex text-sm items-center gap-2 justify-center">
        <div
          style={{ background: data.color }}
          className="w-3 h-3 rounded-full text-sm"
        ></div>
        {!isEddit ? (
          <div className='text-sm'>{data.name}</div>
        ) : (
          <Input
            autoFocus
            className='text-sm'
            style={{ border: 'none' }}
            onKeyDown={async (e: any) => {
              if (e.keyCode == 13) {
                const result = await issueService.updateLabel(
                  { name: e?.target?.value as any },
                  data.id
                );
                if (result) {
                  setIsEdit(false);
                  noti?.success('Update label success');
                } else noti?.error('Update label error');
              }
            }}
            defaultValue={data.name}
          />
        )}
      </div>
      <div
        onClick={() => {
          setIsEdit(!isEddit);
        }}
      >
        {icons.edit}
      </div>
    </div>
  );
};

export default LabelSetting;
