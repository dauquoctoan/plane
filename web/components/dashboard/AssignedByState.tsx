
'use client'
import overviewService from '@/services/overview-service'
import { MayHaveLabel, ResponsivePie } from '@nivo/pie'
import { FC, memo } from 'react'
import useSWR from 'swr'
import { IContent } from './page'
import { linearGradientDef } from '@nivo/core'
import DefaultImage from './DefaultImage'

export const STATE_GROUPS: {
    [key in any]: {
      key: any;
      label: string;
      color: string;
    };
  } = {
    backlog: {
      key: "backlog",
      label: "Backlog",
      color: "#d9d9d9",
    },
    unstarted: {
      key: "unstarted",
      label: "Unstarted",
      color: "#3f76ff",
    },
    started: {
      key: "started",
      label: "Started",
      color: "#f59e0b",
    },
    completed: {
      key: "completed",
      label: "Completed",
      color: "#16a34a",
    },
    cancelled: {
      key: "cancelled",
      label: "Canceled",
      color: "#dc2626",
    },
  };

export const STATE_GROUP_GRAPH_GRADIENTS = [
    linearGradientDef("gradientBacklog", [
      { offset: 0, color: "#DEDEDE" },
      { offset: 100, color: "#BABABE" },
    ]),
    linearGradientDef("gradientUnstarted", [
      { offset: 0, color: "#D4D4D4" },
      { offset: 100, color: "#878796" },
    ]),
    linearGradientDef("gradientStarted", [
      { offset: 0, color: "#FFD300" },
      { offset: 100, color: "#FAE270" },
    ]),
    linearGradientDef("gradientCompleted", [
      { offset: 0, color: "#0E8B1B" },
      { offset: 100, color: "#37CB46" },
    ]),
    linearGradientDef("gradientCanceled", [
      { offset: 0, color: "#C90004" },
      { offset: 100, color: "#FF7679" },
    ]),
  ];

const AssignedByState:FC<IContent> = ({date, option, type='state'}) => {
    const {data} = useSWR('assigned-by-state'+ date,()=>{
        return overviewService.getAssignedByState(date.split(":")[1] as any)
    })

    const color:{[e:string]:{
      color: string,
      label: string
    }} = {
        cancelled: {
          color: 'rgb(229, 72, 77)',
          label: 'Cancelled'
        },
        started: {
          color: "rgb(255, 197, 61)",
          label: 'Started'
        },
        completed:{
          color: 'rgb(62, 155, 79)',
          label: 'Completed'
        },
        backlog:{
          color: 'rgb(205, 206, 214)',
          label: 'Backlog'
        },
        unstarted: {
          color: 'rgb(128, 131, 141)',
          label:'Unstarted'
        },
    }

    const dataConvert: MayHaveLabel[] = data?.map((e,i)=>{
        return {
            "id": e.group,
            "label": e.group,
            "value": e.total,
            "color": color[e.group].color
        }
    })||[]

    const total = data?.reduce((pre:number, cur)=>{
      return pre + Number(cur.total|| 0) 
    }, 0) || 0

    return <>
    {
      total ? (
        <div className='h-80 flex'>
        <div className='flex-1'>
          <ResponsivePie
          data={dataConvert}
          theme={
              {
                  background: "transparent",
                  axis: {
                    domain: {
                      line: {
                        stroke: "rgb(var(--color-background-80))",
                        strokeWidth: 0.5,
                      },
                    },
                  },
                  tooltip: {
                    container: {
                      background: "rgb(var(--color-background-80))",
                      color: "rgb(var(--color-text-200))",
                      fontSize: "0.8rem",
                      border: "1px solid rgb(var(--color-border-300))",
                    },
                  },
                  grid: {
                    line: {
                      stroke: "rgb(var(--color-border-100))",
                    },
                  },
              }
          }
          innerRadius={0.6}
          cornerRadius={5}
          padAngle={1}
          enableArcLinkLabels={false}
          enableArcLabels={false}
          activeOuterRadiusOffset={5}
          tooltip={() => <></>}
          margin={{
              top: 10,
              right: 20,
              bottom: 15,
              left: 20,
          }}
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000'
                          }
                      }
                  ]
              }
          ]}
          defs={STATE_GROUP_GRAPH_GRADIENTS}
          fill={Object.values(STATE_GROUPS).map((p) => ({
              match: {
              id: p.key,
              },
              id: `gradient${p.label}`,
          }))}
      />
        </div>
        <div className='flex h-full items-center w-40'>
          <div className='h-fit flex justify-center items-center gap-5 flex-col w-full'>
              {
                data?.reverse()?.map((e,i)=>{
                  return <div key={i} className='flex items-center justify-between gap-3 flex-1 w-full px-2'>
                    <div className='flex-1 flex gap-2 items-center'>
                      <div style={{background: color[e.group].color}} className={`w-2 h-2 rounded-full`}></div> 
                      <div className='text-sm font-semibold'>{color[e.group].label}</div>
                    </div>
                    <div className='text-sm font-semibold'>{((Number(e.total)/total)*100).toFixed(0)} %</div>
                  </div>
                })
              }
          </div>
        </div>
        </div>
          ):<DefaultImage type='state'/>
    }
    </>  
}

AssignedByState.displayName = 'AssignedByState'

export default memo(AssignedByState)