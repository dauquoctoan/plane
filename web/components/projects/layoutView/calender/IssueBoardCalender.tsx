import React, { FC, useEffect, useRef, useState } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  convertStringToDateObj,
  formartDate,
  formatDate,
  IItemDate,
} from '../../../ui/datepicker/datePicker';
import { icons } from '@/constants';
import useSWR, { mutate } from 'swr';
import { useParams, usePathname } from 'next/navigation';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import { SWR_KEY_STATES } from '@/apiKey';
import { IIssue, IParams, IProject } from '@/types';
import { drawerViewSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import projectService from '@/services/project-services';
import moment from 'moment';
import MoreToolls from '@/components/module/moreTools';
import { IoIosMore } from 'react-icons/io';
import Popover from '@/components/ui/popover';
import { getConfigMoreIssue } from '@/helpers';
import { useDispatch } from 'react-redux';

interface IProps {
  curentValue?: IItemDate;
  data?: IIssue[];
}

const FORMAT_DATE = 'MM/DD/YYY';const IssueBoardCalendar: React.FC<IProps> = ({ data }) => {
  const [curentValue, setCurentValue] = useState<IItemDate | undefined>(
    undefined
  );
  const dispatch = useDispatch();
  const noti = useNoti();
  const info = useSelector(selectInfo);
  const pathName = usePathname();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const curentDate = new Date();
  const mos = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemeber',
    'Decemeber',
  ];
  const params = useParams<IParams>();  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function getDate(month: number, year: number) {
    const firstDay = new Date(year, month, 1);
    const firstNextDay = new Date(year, month + 1, 1);
    const lastPrevDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);

    function getObCurentDate(first: number, last: number): IItemDate[] {
      const arr = [];
      for (let i = first; i <= last; i++) {
        arr.push({
          date: i,
          month,
          year,
        });
      }

      return arr;
    }

    function getPrevDate(day: number): IItemDate[] {
      if (day == 6) return [];

      let prevDate = lastPrevDay.getDate();
      const arr = [];
      for (let i = 0; i <= day; i++) {
        arr.unshift({
          date: prevDate,
          month: lastPrevDay.getMonth(),
          year: lastPrevDay.getFullYear(),
        });
        prevDate--;
      }

      return arr;
    }

    function getNextDate(day: number): IItemDate[] {
      if (day == 0) return [];

      let curentDay = 1;
      const arr = [];
      for (let i = day; i <= 6; i++) {
        arr.push({
          date: curentDay,
          month: firstNextDay.getMonth(),
          year: firstNextDay.getFullYear(),
        });
        curentDay++;
      }

      return arr;
    }

    return [
      ...getPrevDate(lastPrevDay.getDay()),
      ...getObCurentDate(firstDay.getDate(), lastDay.getDate()),
      ...getNextDate(firstNextDay.getDay()),
    ];
  }

  function handleNextMonth(next: number) {
    const monthUpdate = month + next;

    if (monthUpdate < 0) {
      setMonth(11);
      setYear(year - 1);

      return 0;
    }

    if (monthUpdate > 11) {
      setMonth(1);
      setYear(year + 1);

      return 0;
    }

    setMonth(monthUpdate);
  }

  function handleResetDate() {
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  }

  const { data: project } = useSWR(params.projectid, () => {
    return projectService.findOneProject(params.projectid);
  });

  interface IItemConvertDate {
    [e: string]: IIssue[];
  }

  const dataConvert =
    data?.reduce((sum: IItemConvertDate, item: IIssue): IItemConvertDate => {
      const keyDate =
        item.target_date &&
        formartDate(convertStringToDateObj(item.target_date), FORMAT_DATE);
      if (keyDate) {
        sum[keyDate] = sum[keyDate] || [];
        sum[keyDate].push(item);

        return sum;
      } else return sum;
    }, {}) || {};

  return (
    <div className="min-h-max-body rounded shadow-theme-primary bg-theme-primary w-full h-fit flex flex-col">
      <div className="sticky z-[49] bg-theme-primary top-[60px] flex items-center p-2 justify-between text-base border-b border-r">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <FaChevronLeft
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                handleNextMonth(-1);
              }}
            />
            <FaChevronRight
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                handleNextMonth(1);
              }}
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <span>{mos[month]}</span>
            <span>{year}</span>
          </div>
        </div>
        <div
          onClick={() => {
            const date = new Date();
            handleResetDate();
            setCurentValue({
              date: date.getDate(),
              month: date.getMonth(),
              year: date.getFullYear(),
            });
          }}
        >
          <div className="cursor-pointer p-2 bg-theme-secondary rounded text-sm select-none hover:bg-color-special-secondary">
            Today
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto flex-1">
        <div className="w-[200vw] md:w-full min-w-full height-table-calender h-max grid grid-cols-7 text-sm">
          {[...day, ...getDate(month, year)].map((item, index) => {
            const isheader = typeof item == 'string';
            const keyDate = !isheader && formartDate(item, FORMAT_DATE);
            const isToday =
              !isheader &&
              curentValue &&
              curentValue.date == item.date &&
              curentValue.month == item.month &&
              curentValue?.year == item.year;

            return (
              <div
                key={index}
                className={`w-full relative group overflow-hidden border-r border-b ${isheader ? '' : 'p-2'} box-border select-none`}
              >
                {isheader ? (
                  <div
                    key={index}
                    className={`h-full select-none box-border flex justify-end px-2 w-full py-3 items-center cursor-pointer ${
                      curentDate.getDay() == index &&
                      month == curentDate.getMonth() &&
                      year == curentDate.getFullYear()
                        ? 'bg-color-special-secondary'
                        : ''
                    }`}
                  >
                    {item}
                  </div>
                ) : (
                  <div className="w-f">
                    {isToday && (
                      <div className="absolute rounded-full text-theme-primary top-1 left-1 w-[20px] h-[20px] flex items-center justify-center bg-color-special-primary">
                        <FaCheck />
                      </div>
                    )}

                    <div className="flex cursor-pointer justify-end w-full">
                      {item.date}
                    </div>
                    <div className="flex gap-2 flex-col group/item">
                      {keyDate && (
                        <>
                          <AddMoreIssue
                            date={item}
                            sequence={project?.identifier || ''}
                          />
                          {dataConvert &&
                            dataConvert[keyDate] &&
                            dataConvert[keyDate].map(issue => {
                              return (
                                <div
                                  className="border  items-center cursor-pointer rounded px-2 py-1 text-xs flex gap-2"
                                  key={issue.id}
                                >
                                  <div
                                    onClick={()=>{
                                      issue &&
                                    dispatch(drawerViewSlice.actions.setIssueSlected(issue));
                                      dispatch(drawerViewSlice.actions.openDrawer());
                                    }}  
                                    className="flex-1 text-ellipsis overflow-hidden">
                                    {issue.name}
                                  </div>
                                  <Popover
                                    content={
                                      <MoreToolls
                                        data={getConfigMoreIssue(
                                          issue,
                                          pathName,
                                          dispatch,
                                          noti,
                                          info
                                        )}
                                      />
                                    }
                                  >
                                    <div className="hidden group-hover/item:block p-2 rounded-full hover:bg-theme-secondary cursor-pointer">
                                      {icons.more}
                                    </div>
                                  </Popover>
                                </div>
                              );
                            })}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IssueBoardCalendar;

interface IPropsAddMore {
  sequence: string;
  date: IItemDate;
}

const AddMoreIssue: FC<IPropsAddMore> = ({ sequence, date }) => {
  const info = useSelector(selectInfo);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const params = useParams<IParams>();
  const ref = useRef<HTMLDivElement>(null);
  const noti = useNoti();  const { data: states } = useSWR(SWR_KEY_STATES(params.projectid), () => {
    return issueService.getState(params.projectid);
  });

  useEffect(() => {
    const handleClickClose = (e: any) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };

    if (ref.current) document.addEventListener('click', handleClickClose);

    return () => {
      document.removeEventListener('click', handleClickClose);
    };
  }, [open]);

  const handleCreateIssue = async (name: string) => {
    mutate<IIssue[]>(
      pathName,
      async (issue) => {
        const issueResult = await issueService.createIssue({
          name: name,
          state_id: states && states[0].id,
          project_id: params.projectid,
          cycle_id: params.cycleid,
          module_id: params.moduleid,
          workspace_id: info?.last_workspace_id,
          is_draft: false,
          priority: 'urgent',
          target_date:
            moment(formartDate(date, FORMAT_DATE)).format() || undefined,
        });
        if (issueResult) {
          noti?.success('Issue created');
          setOpen(false);

          const itemConvert: IIssue = {
            ...issueResult,
            state_id: states && states[0].id,
            state: {
              id: (states && states[0].id) || '',
              name: states && states[0].name,
            },
          };

          return [...(issue||[]), itemConvert];
        } else {
          noti?.error('An error occurred, please try again later');

          return issue;
        }
      },
      { revalidate: false }
    );
  };

  return (
    <>
      {open ? (
        <div
          className="border rounded py-1 px-2 flex items-center gap-2 "
          ref={ref}
        >
          <div className="text-xs font-semibold text-color-text-sidebar">
            {sequence.toUpperCase()}
          </div>
          <input
            autoFocus
            className="w-[80%] h-full text-xs border-none outline-none"
            onKeyDown={(e: any) => {
              if (e.keyCode == 13) {
                handleCreateIssue(e.target.value);
              }
            }}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="w-full h-auto"
        >
          <div className="rounded overflow-hidden text-ellipsis invisible flex group-hover:visible py-1rounded text-color-special-primary hover:border-color-special-primary w-full cursor-pointer select-none items-center gap-2 border px-2 py-1 text-xs">
            {icons.plusSquare}
            <div>New issue</div>
          </div>
        </div>
      )}
    </>
  );
};
