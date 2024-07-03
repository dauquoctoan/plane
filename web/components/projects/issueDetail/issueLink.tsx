import { LS_ISSUE_LINK } from '@/apiKey';
import Button from '@/components/ui/button';
import Confirm from '@/components/ui/confirm';
import Input from '@/components/ui/input/Input';
import Line from '@/components/ui/line';
import Modal from '@/components/ui/modal';
import { VALIDATE_URL } from '@/constants';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import { IIsueLink } from '@/types';
import moment from 'moment';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdLink } from 'react-icons/io';
import { HiMiniPlusSmall } from 'react-icons/hi2';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import useSWR, { mutate } from 'swr';

interface IState {
  isOpen: boolean;
  isCreate: boolean;
}

const IssueLink = ({ issueId }: { issueId: string }) => {
  const [openModal, setOpenModal] = useState<IState>({
    isOpen: false,
    isCreate: true,
  });

  const { data: issueLink } = useSWR(LS_ISSUE_LINK(issueId), () => {
    return issueService.findIssueLink(issueId);
  });
  const noti = useNoti();

  const [curentItem, setcurentItem] = useState<IIsueLink>();

  return (
    <div className="w-full py-4">
      <Modal
        content={
          <AddLink
            defaultValue={!openModal.isCreate ? curentItem : undefined}
            issueId={issueId}
            setOpenModal={setOpenModal}
          />
        }
        isOpen={openModal.isOpen}
        handleClose={() => {
          setOpenModal(e => ({ ...e, isOpen: false }));
        }}
      />
      <div className="flex justify-between w-full">
        <div className="">Links</div>
        <HiMiniPlusSmall
          onClick={() => {
            setOpenModal({ isCreate: true, isOpen: true });
          }}
          className="text-xl cursor-pointer"
        />
      </div>
      <Line />
      <div className="flex flex-col gap-2 pt-2">
        {issueLink?.map((e, i) => {
          return (
            <div key={i} className="px-2 py-1 bg-theme-secondary rounded">
              <div className="flex items-center justify-between">
                <IoMdLink
                  className="cursor-pointer rotate-45 text-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(e.url);
                    noti?.success('successfully copied the link');
                  }}
                />
                <div className="flex gap-2 items-center">
                  <MdOutlineModeEditOutline
                    onClick={() => {
                      setcurentItem(e);
                      setOpenModal({
                        isCreate: false,
                        isOpen: true,
                      });
                    }}
                    className="cursor-pointer text-sm"
                  />
                  <Confirm
                    title="Delete the link"
                    desc="Are you sure to delete this task?"
                    onConfirm={async () => {
                      const res = await issueService.removeIssueLink(e.id);
                      if (res) {
                        noti?.success('Delete link success');
                        mutate(LS_ISSUE_LINK(issueId), (prevData: any) => {
                          return prevData.filter((itemPrevData: IIsueLink) => {
                            return itemPrevData.id != e.id;
                          });
                        });
                      } else noti?.success('Delete link error');
                    }}
                  >
                    <MdDeleteOutline className="cursor-pointer text-sm" />
                  </Confirm>
                </div>
              </div>
              <div className="select-none">
                <p className="font-base text-sm">{e.title}</p>
                <div className="text-[11px]">
                  Updated {moment(e.updatedAt).fromNow()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AddLink = ({
  issueId,
  setOpenModal,
  defaultValue,
}: {
  issueId: string;
  setOpenModal: React.Dispatch<React.SetStateAction<IState>>;
  defaultValue?: IIsueLink;
}) => {
  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IIsueLink>({
    defaultValues: {
      url: defaultValue?.url || '',
      title: defaultValue?.title || '',
    },
  });

  const noti = useNoti();

  return (
    <form
      onSubmit={handleSubmit(async data => {
        if (!defaultValue) {
          const res = await issueService.createIssueLink({
            ...data,
            issue_id: issueId,
          });

          mutate(LS_ISSUE_LINK(issueId), (prevData: any) => {
            return [...prevData, res];
          });

          if (res) {
            setOpenModal(e => ({ ...e, isOpen: false }));
            noti?.success('Create issue link success');
          } else noti?.error('Create issue link error');
        } else {
          const res = await issueService.updateIssueLink(defaultValue.id, data);

          if (res) {
            mutate(LS_ISSUE_LINK(issueId), (prevData: any) => {
              return prevData.map((itemIsuelink: IIsueLink) => {
                if (itemIsuelink.id === defaultValue.id) {
                  return {
                    ...itemIsuelink,
                    url: data.url,
                    title: data.title,
                  };
                } else return itemIsuelink;
              });
            });
            setOpenModal(e => ({ ...e, isOpen: false }));
            noti?.success('Update issue link success');
          } else noti?.error('Update issue link error');
        }
      })}
      className="w-[500px]"
    >
      <div className="text-xl font-bold">
        {defaultValue ? 'Update ' : 'Add '}Link
      </div>
      <Input
        placeholder="https://..."
        label="URL"
        wrClassName="mb-4"
        keyForm="url"
        error={errors}
        register={registerParent}
        validator={{ required: true, pattern: VALIDATE_URL }}
        setValue={setValue}
      />

      <Input
        placeholder="Enter title"
        label="Title (optional)"
        wrClassName="mb-4"
        keyForm="title"
        error={errors}
        register={registerParent}
        validator={{ required: true }}
        setValue={setValue}
      />

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          text="Cancel"
          onClick={() => {
            setOpenModal(e => ({ ...e, isOpen: false }));
          }}
        />
        <Button
          type="submit"
          text={defaultValue ? 'Update link' : 'Add link'}
          typeBTN="primary"
        />
      </div>
    </form>
  );
};

export default IssueLink;
