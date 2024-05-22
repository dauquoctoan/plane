'use client'
import React, { FC } from 'react';
import Avatar from '../ui/avatar';
import useSWR from 'swr';
import overviewService from '@/services/overview-service';
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar';
import { IsEmptyObj } from '@reduxjs/toolkit/dist/tsHelpers';

export interface IEmpyProps {
    urlImage: string;
    desc: string;
}
export interface DefaultEmpyData {
    pendingIssue: IEmpyProps;
    issueCreated: IEmpyProps;
    issueClosed: IEmpyProps;
    issueClosedInYear: IEmpyProps;
}

const ScopeAndDemand = () => {
    const { data } = useSWR('analytic-overview', () => overviewService.getAnalyticsOverview());
    const empTyData: DefaultEmpyData = {
        pendingIssue: {
            urlImage: '/issues-by-priority.svg',
            desc: 'Analysis of pending issues by co-workers appears here.'
        },
        issueCreated: {
            urlImage: '/empty_users.svg',
            desc: 'Co-workers and the number of issues created by them appears here.'
        },
        issueClosed: {
            urlImage: '/empty_users.svg',
            desc: 'Co-workers and the number of issues closed by them appears here.'
        },
        issueClosedInYear: {
            urlImage: '/empty_graph.svg',
            desc: 'Close issues to view analysis of the same in the form of a graph.'
        },
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const sateColors: { [e: string]: string } = {
        backlog: '#A3A3A3',
        started: '#F59E0B',
        unstarted: '#3A3A3A'
    }

    const dataChart = months.map((e, i) => {
        const item = (data?.chartIssueClosedByMonth && data?.chartIssueClosedByMonth.length > 0) ? data?.chartIssueClosedByMonth.find((chartItem) => chartItem.month == i + 1) : { total: 0 }
        return {
            x: e,
            y: item?.total || 0
        }
    })

    const TotalOpenTasks = data?.issueAssignedByState.reduce((prev, cur) => {
        return prev + cur.total;
    }, 0) || 0;

    return (
        <div className="w-full">
            <div className="w-full flex gap-4 md:h-[350px] flex-col md:flex-row h-[700px]">
                <div className="border flex flex-1 p-3 rounded flex-col">
                    <div className="text-color-error font-semibold">DEMAND</div>
                    <div>Total open tasks</div>
                    <div>{data?.issueAssignedByState?.reduce((e, item) => e + item.total, 0) || 0}</div>
                    <div className="flex-1 flex flex-col justify-between py-2">
                        {
                            data?.issueAssignedByState.map((stateItem, index) => {
                                return <ProgessBarChartItem value={stateItem.total} color={sateColors[stateItem.group]} percent={((stateItem.total / TotalOpenTasks) * 100).toFixed(0)} title={stateItem.group} key={index} />
                            })
                        }
                    </div>
                </div>
                <div className="border flex flex-1 p-3 rounded flex-col">
                    <div className="font-semibold text-color-success">SCOPE</div>
                    <div>Pending issues</div>
                    <div className="flex-1">
                        {
                            data?.issuePendingByMember && data?.issuePendingByMember?.length > 0 ? (
                                <ResponsiveBar
                                    data={data?.issuePendingByMember.map((e) => {
                                        return {
                                            id: e.id,
                                            label: e.first_name + " " + e.last_name,
                                            value: e.total
                                        }
                                    }) || []}
                                    keys={['value']}
                                    indexBy="label"
                                    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                                    padding={0.3}
                                    colors={{ scheme: 'nivo' }}
                                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: '',
                                        renderTick: (props) => {
                                            return <g transform={`translate(${props.x},${props.y})`} >
                                                <circle cy="18" r="8" fill="#374151"></circle>
                                                <text x="0" y="21" text-anchor="middle" font-size="9" fill="#ffffff">{props.value[0]}</text>
                                            </g>
                                        },
                                        legendPosition: 'middle',
                                        legendOffset: 32,
                                    }}
                                    axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'fruit count',
                                        legendPosition: 'middle',
                                        legendOffset: -40,
                                        tickValues: Math.max(...(data?.issuePendingByMember ? data?.issuePendingByMember.map(obj => obj.total) : []))
                                    }}
                                    labelSkipWidth={12}
                                    labelSkipHeight={12}
                                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                    animate={true}
                                />
                            ) : <DefaultNoData data={empTyData.pendingIssue} />
                        }

                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-4 gap-4 flex-col md:flex-row">
                <div className="flex-1 p-2 border rounded">
                    {data?.topIssueCreated[0] ?
                        <>
                            <div className="font-bold">Most issues created</div>
                            <div className="flex items-center">
                                <Avatar size="sm" type="circle">
                                    {data?.topIssueCreated[0].first_name + ' ' + data?.topIssueCreated[0].last_name}
                                </Avatar>
                                <div className="ml-2">{data?.topIssueCreated[0].first_name + ' ' + data?.topIssueCreated[0].last_name}</div>
                            </div></>
                        : (
                            <DefaultNoData data={empTyData.issueCreated} />
                        )
                    }
                </div>
                <div className="flex-1 p-2 border rounded">
                    {
                        data?.topIssueClosed[0] ? (
                            <>
                                <div className="font-bold">Most issues closed</div>
                                <div className="flex items-center">
                                    <Avatar size="sm" type="circle">
                                        {data?.topIssueClosed[0].first_name + ' ' + data?.topIssueClosed[0].last_name}
                                    </Avatar>
                                    <div className="ml-2">{data?.topIssueClosed[0].first_name + ' ' + data?.topIssueClosed[0].last_name}</div>
                                </div>
                            </>)
                            : (
                                <DefaultNoData data={empTyData.issueClosed} />
                            )
                    }
                </div>
            </div>

            <div className="w-full h-[350px] flex flex-col p-2 border mt-4 rounded">
                <div className="font-bold">Issues closed in a year</div>
                <div className="flex-1">
                    {
                        data?.chartIssueClosedByMonth.length ? (
                            <ResponsiveLine
                                data={[{
                                    id: 'months',
                                    data: dataChart
                                }]}
                                margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    stacked: true,
                                    reverse: false
                                }}
                                yFormat=" >-.2f"
                                curve="basis"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: '',
                                    legendOffset: 36,
                                    legendPosition: 'middle',
                                    truncateTickAt: 0
                                }}
                                tooltip={(e) => {
                                    return <div className='px-2 rounded py-1 bg-color-special-secondary'>{e?.point?.data?.y + ' issues closed in ' + e.point.data.x}</div>
                                }}
                                axisLeft={null}
                                colors={{ scheme: 'category10' }}
                                enablePoints={false}
                                pointColor={{ from: 'color', modifiers: [] }}
                                pointBorderWidth={7}
                                pointBorderColor={{ theme: 'background' }}
                                enablePointLabel={true}
                                pointLabel="data.yFormatted"
                                pointLabelYOffset={-12}
                                areaBlendMode="darken"
                                areaBaselineValue={50}
                                areaOpacity={0.15}
                                debugSlices={true}
                                enableCrosshair={false}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'right-to-left',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        ) : (
                            <DefaultNoData data={empTyData.issueClosedInYear} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ScopeAndDemand;

export interface IProgessBarChartItem {
    title: string;
    percent: string;
    color: string;
    value: number;
}

const ProgessBarChartItem: FC<IProgessBarChartItem> = ({ title, color, percent }) => {
    return <div className="w-full mb-3 last:mb-0">
        <div>
            <div className="flex items-center justify-between">
                <div className="mb-2 flex items-center gap-2">
                    <div style={{ background: color }} className={`h-2 w-2 rounded-full`}></div>
                    <div className="text-sm font-normal">{title}</div>
                    <div className="rounded-xl bg-theme-secondary px-3 py-0 text-sm">3</div>
                </div>
                <div className="text-sm font-normal">{percent}%</div>
            </div>
            <div className="relative">
                <div className={`h-1 w-full bg-theme-secondary`}></div>
                <div style={{ width: `${percent}%`, background: color }} className={`absolute left-0 top-0 h-full`}></div>
            </div>
        </div>
    </div>
}


const DefaultNoData = ({ data }: { data: IEmpyProps }) => {
    return <div className='w-full h-full justify-center flex flex-col items-center gap-3'>
        <img width={70} src={data.urlImage} />
        <p className='font-semibold text-sm'>No Data yet</p>
        <p className='text-xs text-center'>{data.desc}</p>
    </div>
}