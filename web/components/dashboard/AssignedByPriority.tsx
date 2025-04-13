import { FC } from 'react';
import { ResponsiveBar, BarSvgProps, BarDatum } from '@nivo/bar';
import { IContent } from './page';
import overviewService from '@/services/overview-service';
import useSWR from 'swr';
import DefaultImage from './DefaultImage';
import { linearGradientDef } from '@nivo/core';

export const ISSUE_PRIORITIES: {
  key: any;
  title: string;
}[] = [
  { key: 'urgent', title: 'Urgent' },
  { key: 'high', title: 'High' },
  { key: 'medium', title: 'Medium' },
  { key: 'low', title: 'Low' },
  { key: 'none', title: 'None' },
];

const PRIORITY_TEXT_COLORS: { [e: string]: string } = {
  urgent: '#CE2C31',
  high: '#AB4800',
  medium: '#AB6400',
  low: '#1F2D5C',
  none: '#60646C',
};

export const PRIORITY_GRAPH_GRADIENTS = [
  linearGradientDef(
    'gradientUrgent',
    [
      { offset: 0, color: '#A90408' },
      { offset: 100, color: '#DF4D51' },
    ],
    {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  ),
  linearGradientDef(
    'gradientHigh',
    [
      { offset: 0, color: '#FE6B00' },
      { offset: 100, color: '#FFAC88' },
    ],
    {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  ),
  linearGradientDef(
    'gradientMedium',
    [
      { offset: 0, color: '#F5AC00' },
      { offset: 100, color: '#FFD675' },
    ],
    {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  ),
  linearGradientDef(
    'gradientLow',
    [
      { offset: 0, color: '#1B46DE' },
      { offset: 100, color: '#4F9BF4' },
    ],
    {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  ),
  linearGradientDef(
    'gradientNone',
    [
      { offset: 0, color: '#A0A1A9' },
      { offset: 100, color: '#B9BBC6' },
    ],
    {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  ),
];

const AssignedByPriority: FC<IContent> = ({ date }) => {
  const { data } = useSWR('assigned-by-priority' + date, () => {
    return overviewService.getAssignedByPriority(date.split(':')[1] as any);
  });
  const total =
    data?.reduce((pre: number, cur) => {
      return pre + Number(cur.total || 0);
    }, 0) || 0;

  return total ? (
    <div className="h-80 flex">
      <ResponsiveBar
        data={data || []}
        indexBy="priority"
        keys={['total']}
        margin={{
          top: 30,
          right: 30,
          bottom: 40,
          left: 30,
        }}
        axisLeft={null}
        axisBottom={{
          tickPadding: 8,
          tickSize: 0,
        }}
        defs={PRIORITY_GRAPH_GRADIENTS}
        fill={ISSUE_PRIORITIES.map((p) => ({
          match: {
            id: p.key,
          },
          id: `gradient${p.title}`,
        }))}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: 'transparent',
              },
            },
            ticks: {
              text: {
                fontSize: 13,
              },
            },
          },
          grid: {
            line: {
              stroke: 'transparent',
            },
          },
        }}
      />
    </div>
  ) : (
    <DefaultImage type="priority" />
  );
};

AssignedByPriority.displayName = 'AssignedByPriority';

export default AssignedByPriority;
