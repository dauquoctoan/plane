import { IFillterIssue } from '@/types';
import React, { FC } from 'react';

export interface IFIlterIssue {
  query: IFillterIssue;
}

export const FilterIssue: FC<IFIlterIssue> = ({ query }) => {
  return <div>FilterIssue</div>;
};

const RenderDate = () => {};
