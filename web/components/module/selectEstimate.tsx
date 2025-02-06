'use client';
import React from 'react';
import useSWR from 'swr';
import Select, { IOptionItem } from '../ui/select/select';
import { IoMdPricetags } from 'react-icons/io';
import issueService from '@/services/issue-services';

interface IProps {
  estimateId: string;
  beforeUpdateValue: (e: string | string[]) => Promise<any>;
  estimates?: string;
  border?: boolean;
  style?: React.CSSProperties;
  showMoreText?: boolean;
}

const SelectEstimate: React.FC<IProps> = ({
  estimateId,
  beforeUpdateValue,
  showMoreText = true,
  estimates: defaultValue,
  border,
  style,
}) => {
  const { data: estimates } = useSWR(
    () => estimateId,
    () => issueService.findOneEstimate(estimateId)
  );  const options:IOptionItem[] = estimates?.estimate_points.map((e)=>{
    return{
      title: e.value,
      value: e.id,
    };
  }) || [];

  return (
    <Select
      options={options}
      isIconCheck
      fontSize="text-[12px]"
      defaultValue={defaultValue}
      border={border}
      style={style}
      isClear
      showMoreText={showMoreText}
      isChildren={false}
      beforeUpdateValue={beforeUpdateValue}
    >
      <div
        className={`px-2 cursor-pointer select-none py-[3px] border-theme-border-primary rounded flex items-center ${
          showMoreText ? 'gap-1' : ''
        } text-[12px] w-full`}
      >
        <span>{showMoreText && 'Estimate'}</span>
      </div>
    </Select>
  );
};

export default SelectEstimate;
