'use client';
import { SWR_KEY_ESTIMATES } from '@/apiKey';
import Button from '@/components/ui/button';
import Confirm from '@/components/ui/confirm';
import Input from '@/components/ui/input/Input';
import Modal from '@/components/ui/modal';
import Popover from '@/components/ui/popover';
import { icons } from '@/constants';
import { useNoti } from '@/hooks';
import issueService, { TCreateEstimate } from '@/services/issue-services';
import projectService from '@/services/project-services';
import { IEstimate, IParams, IProject } from '@/types';
import { useParams } from 'next/navigation';
import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';

interface IState {
  data?: IEstimate,
  isOpen: boolean
}

interface IMenuConfig {
  name: string;
  icons: ReactElement;
  click: (e: IEstimate) => void;
  render?: (e: IEstimate) => ReactElement;
}

const EstimateSetting = () => {
  const params = useParams<IParams>();
  const noti = useNoti();
  const [open, setOpen] = useState<IState>({
    data: undefined,
    isOpen: false
  });

  const { data } = useSWR(SWR_KEY_ESTIMATES(params.projectid), () => {
    return issueService.findEstimateByProject(params.projectid);
  });

  const { data: project } = useSWR(params.projectid, () => {
    return projectService.findOneProject(params.projectid);
  });

  const menuConfigs: IMenuConfig[] = [
    {
      name: 'Delete estimate',
      icons: icons.delete,
      render: (estimate) => {
        return <Confirm 
          title="Delete the"
          desc="Are you sure to delete this item?"
          onConfirm={async () => {
            const result = await issueService.removeEstimate(estimate.id);
            if (result) {
              noti?.success('Delete estimate success');
              mutate<IEstimate[]>(SWR_KEY_ESTIMATES(params.projectid), (estimates) => {
                return estimates?.filter((e: IEstimate) => {
                  return e.id !== estimate.id;
                });
              });
            }
          }}>
          <div
            className='w-full rounded cursor-pointer select-none px-2 py-1 hover:bg-theme-secondary text-xs flex items-center gap-2'>
            {icons.delete}
            <div className='text-xs'>Delete estimate</div>
          </div>
        </Confirm>;
      },
      click: async () => { }
    },
    {
      name: "Edit estimate",
      icons: icons.edit,
      click: (estimate) => {
        setOpen({ data: estimate, isOpen: true });
      }
    },
    {
      name: 'Set default',
      icons: icons.check,
      click: async (estimate) => {
        const result = await projectService.updateProject(params.projectid, { estimate_id: estimate.id });
        if (result) {
          noti?.success('Set default estimate success');
          mutate<IProject>(params.projectid, (project) => {
            return { ...project, estimate_id: estimate.id };
          });
        } else noti?.success('Set default estimate success');
      }
    }
  ];

  return (
    <div>
      <div>
        <div className='flex justify-end'>
          <Button
            onClick={() => {
              setOpen({
                data: undefined,
                isOpen: true
              });
            }}
            typeBTN="primary"
          >
            {icons.plus}
          </Button>
        </div>
        <div className='w-full flex flex-col gap-2 mt-2'>
          {
            data?.map((estimate) => {
              return <div
                key={estimate.id} className='rounded text-sm flex justify-between items-center border px-2 py-1 select-none cursor-pointer hover-scroll hover:bg-theme-secondary'>

                <div className='flex gap-2 items-center'>
                  {estimate.id === project?.estimate_id && <div className='w-3 h-3 rounded-full bg-color-success'></div>}
                  <span>{estimate.name}</span>
                </div>
                <Popover content={<div className='min-w-32'>
                  {
                    menuConfigs.map((e) => {
                      return <>
                        {
                          e.render && e.render(estimate) || <div
                            key={e.name}
                            onClick={() => {
                              e.click(estimate);
                            }}
                            className='w-full rounded cursor-pointer select-none px-2 py-1 hover:bg-theme-secondary text-xs flex items-center gap-2'>
                            {e.icons}
                            <div className='text-xs'>{e.name}</div>
                          </div>
                        }
                      </>;
                    })
                  }
                </div>}>
                  <div className='w-3 h-3 rounded bg-theme-secondary text-theme-text-primary'>{icons.more}</div>
                </Popover>
              </div>;
            })
          }
        </div>
      </div>
      <Modal
        isOpen={open.isOpen}
        handleClose={() => {
          setOpen({ data: undefined, isOpen: false });
        }}
        content={<CreateEstimates defaultEstimate={open.data} setOpen={(e: boolean) => {
          setOpen({ data: undefined, isOpen: e });
        }} />}
      />
    </div>
  );
};

const CreateEstimates = ({
  setOpen,
  defaultEstimate
}: {
  setOpen: (e: boolean) => void;
  defaultEstimate?: IEstimate
}) => {
  const params = useParams<IParams>();
  const [loading, setLoading] = useState(false);
  const typeForm = defaultEstimate ? 'Edit' : 'Create';
  const notification = useNoti();
  const estimate_points = defaultEstimate?.estimate_points;
  const [countPoints, setCountPoints] = useState<number>(estimate_points?.length ?? 10);
  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
    unregister
  } = useForm<TCreateEstimate>({
    defaultValues: {
      name: defaultEstimate?.name,
      description: defaultEstimate?.description,
    }
  });

  return (
    <form
      onSubmit={handleSubmit(async data => {
        const { name, description, ...estimatePoints } = data;
        const estimate: TCreateEstimate = {
          name,
          description,
          project_id: params.projectid,
          estimate_points: Object.keys(estimatePoints).map((key, index) => {
            return {
              value: estimatePoints[key as keyof Omit<TCreateEstimate, 'name' | 'description'>] as string,
              key: ((estimate_points?.length || 0) + index)
            };
          })
        };
        const result = await (defaultEstimate ? issueService.updateEstimateByProject({ ...estimate, id: defaultEstimate.id }) : issueService.createEstimate(estimate));
        if (result) {
          notification?.success(`${typeForm} Estimate success`);
          setOpen(false);
          if (result.estimate_points.length > 0) {
            mutate<IEstimate[]>(SWR_KEY_ESTIMATES(params.projectid), (data: any) => {
              if (defaultEstimate) {
                return data.map((estimateItem: IEstimate) => {
                  if (defaultEstimate && estimateItem.id === defaultEstimate.id) {
                    estimateItem.name = result.name;
                    estimateItem.description = result.description;
                    estimateItem.estimate_points = [...estimateItem.estimate_points, ...result.estimate_points];
                  }
                  return estimateItem;
                });
              };

              return [...data, result];
            });
          }
        }
        else notification?.error(`${typeForm} Estimate error`);
      })}
      className="md:min-w-[700px] w-full hover-scroll max-h-[90vh] mb-2 overflow-y-auto relative"
    >
      <div className='bg-theme-primary flex justify-between items-center sticky top-[-10px]'>
        <h2 className="mt-4 text-xl">{`${typeForm}`} Estimates</h2>
        {loading && <div className='animate-spin'>{icons.sync}</div>}
      </div>
      <Input
        placeholder="Title"
        wrClassName="mb-4"
        keyForm="name"
        error={errors}
        register={registerParent}
        validator={{ required: true }}
        setValue={setValue}
      />
      <Input
        placeholder="Description"
        wrClassName="mb-4"
        keyForm="description"
        error={errors}
        register={registerParent}
        validator={{ required: true }}
        setValue={setValue}
      />
      <div className="px-2 py-1 border rounded">
        <div className="text-sm text-color-text-sidebar mb-2">Points</div>
        {Array(countPoints)
          .fill('')
          .map((e, i) => {
            return (
              <div key={`id-${i}`} className='flex items-center gap-2 mb-4'>
                <Input
                  wrClassName="flex-1"
                  defaultValue={estimate_points && estimate_points[i]?.value || String(i + 1)}
                  keyForm={(estimate_points && estimate_points[i]?.id) ? undefined : String(i + 1)}
                  error={estimate_points && estimate_points[i]?.id ? undefined : errors}
                  onChange={estimate_points && estimate_points[i]?.id ? async (e) => {
                    if (estimate_points && estimate_points[i]?.id) {
                      setLoading(true);
                      const result = await issueService.updateEstimatePointById(estimate_points[i]?.id as string, { value: e.target.value });
                      if (result) {
                        mutate<IEstimate[]>(SWR_KEY_ESTIMATES(params.projectid), (data: any) => {
                          return data.map((estimate: IEstimate) => {
                            if (estimate.id === defaultEstimate.id) {
                              estimate.estimate_points = estimate.estimate_points.map((esPoint) => {
                                if (esPoint.id == estimate_points[i]?.id) esPoint.value = e.target.value;
                                return esPoint;
                              });
                            }
                            return estimate;
                          });
                        });
                      }
                      setLoading(false);
                    }
                  } : undefined}
                  setValue={estimate_points && estimate_points[i]?.id ? undefined : setValue}
                  register={estimate_points && estimate_points[i]?.id ? undefined : registerParent}
                  validator={estimate_points && estimate_points[i]?.id ? undefined : { required: true }}
                />
                <div
                  className='cursor-pointer'
                  onClick={async () => {
                    if (i && estimate_points && estimate_points[i]?.id) {
                      setLoading(true);
                      const result = await issueService.removeEstimatePointById(estimate_points[i]?.id || "");
                      if (result) {
                        notification?.success('Delete estimate point success');
                        //remove estimate point
                        mutate<IEstimate[]>(SWR_KEY_ESTIMATES(params.projectid), (data: any) => {
                          return data.map((e: IEstimate) => {
                            if (e.id === defaultEstimate.id) {
                              e.estimate_points = e.estimate_points.filter((e) => {
                                return e.id != estimate_points[i]?.id;
                              });
                            }
                            return e;
                          });
                        });
                      }
                      else notification?.error('Delete estimate point error');
                      setLoading(false);
                    }
                    unregister(String(i + 1) as any);
                    setCountPoints((countPoints - 1) < 1 ? 1 : (countPoints - 1));
                  }}>
                  {icons.delete}
                </div>
              </div>
            );
          })}
        <div
          onClick={() => {
            setCountPoints(countPoints + 1);
          }}
          className="cursor-pointer select-none text-color-special-primary flex items-center gap-2"
        >
          {icons.plus}
          <div>Add points</div>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-4">
        <Button
          text="Cancel"
          type="button"
          onClick={() => {
            setOpen(false);
          }}
        />
        <Button typeBTN="primary" text={`${typeForm} Estimate`} type="submit" />
      </div>
    </form>
  );
};

export default EstimateSetting;
