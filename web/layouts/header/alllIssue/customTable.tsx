import { issueViewSlice, useSelector } from '@/store';
import { selectlsDisableTable } from '@/store/slices/issueView/selectors';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CustomTable = () => {
  const lsDisable = useSelector(selectlsDisableTable);
  const dispatch = useDispatch();

  const lsTableTitle = [
    'ID',
    'Issue',
    'State',
    'Priority',
    'Assignees',
    'Label',
    'Start Date',
    'Due Date',
    'Estimate',
    'Created On',
    'Updated On',
  ];

  function setLocalStorage(properties:string[]){
    localStorage.setItem('display-table', JSON.stringify({properties: properties}))
  }

  const removeIndex = (array: any[], item: any) => {
    const newData = [...array];
    const index = lsDisable.indexOf(item);
    newData.splice(index, 1);
    return newData;
  };

  return (
    <div className="w-fit">
      <div className="text-sm pb-2 font-medium">Display Properties</div>
      <div className="w-[300px] flex flex-wrap gap-2">
        {lsTableTitle.map(e => {
          return (
            <div
              onClick={() => {
                if (lsDisable.includes(e)) {
                  setLocalStorage(removeIndex(lsDisable, e))
                  dispatch(
                    issueViewSlice.actions.setDisableTable(
                      removeIndex(lsDisable, e)
                    )
                  );
                } else {
                  setLocalStorage([...lsDisable, e])
                  dispatch(
                    issueViewSlice.actions.setDisableTable([...lsDisable, e])
                  );
                }
              }}                                                                                                                                                            
              className={`px-2 ${
                lsDisable.includes(e)
                  ? 'bg-color-special-secondary text-theme-text-primary'
                  : 'bg-color-special-primary text-theme-primary'
              } hover:opacity-95 py-1 rounded cursor-pointer select-none text-[12px]`}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTable;
