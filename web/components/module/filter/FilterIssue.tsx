import { IfilterIssue } from '@/types';
import React, { FC } from 'react';

export interface IFIlterIssue {
  query: IfilterIssue;
}

export const FilterIssue: FC<IFIlterIssue> = ({ query }) => {
  return <div>FilterIssue</div>;
};

const RenderDate = () => {};
