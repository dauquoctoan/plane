import React from 'react';
import Select, { IOptionItem } from '../ui/select/select';
import { SWR_KEY_STATES } from '@/apiKey';
import issueService from '@/services/issue-services';
import useSWR from 'swr';
import { convertDataOptions } from '@/helpers';

interface IProps {
  projectId?: string;
  stateId: string;
  onChange?: (id: string | string[]) => void;
  beforeUpdateValue: (e: string | string[]) => Promise<any>;
  keyUpdate?: string;
  value?: string;
  showMoreText?: boolean;
  border?: boolean;
  style?: React.CSSProperties;
}

const SelectState: React.FC<IProps> = ({
  projectId,
  stateId,
  onChange,
  keyUpdate,
  border,
  style,
  showMoreText,
  value,
  beforeUpdateValue,
}) => {
  const { data: states } = useSWR(
    () => SWR_KEY_STATES(projectId),
    () => issueService.getState(projectId || '')
  );

  return (
    <Select
      defaultValue={stateId}
      options={states && (convertDataOptions(states) as IOptionItem[])}
      isIconCheck
      style={style}
      border={border}
      isChildren={false}
      onChange={onChange}
      fontSize="text-[12px]"
      value={value}
      showMoreText={showMoreText}
      isSearch={true}
      keyUpdate={keyUpdate}
      beforeUpdateValue={beforeUpdateValue}
    ></Select>
  );
};

export default SelectState;
