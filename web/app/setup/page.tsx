'use client'
import Member from "@/components/setup/set-up-member";
import Profile from "@/components/setup/set-up-profile";
import Workspace from "@/components/setup/set-up-workspace";
import { ReactComponentElement, useState } from "react";

interface IItemFormSetUp{
    subTitle?: string;
    titleonBoard?: string;
    title: string;
    component: React.FC;
}

interface IProps{
    isActive: boolean;
}

const StepItem:React.FC<IProps> = ({isActive})=>{
    return <div className={`w-8 ml-3 h-1 rounded ${isActive ?'bg-red-300': 'bg-theme-border-primary'}`}></div>
}

export default function GoToPlane() {
    const [step, setStep] = useState<0|1|2>(0);

    const lsFormSetUpStep:IItemFormSetUp[]=[{
            subTitle: 'Hey there 👍',
            titleonBoard: 'Let get you onboard',
            title:'Set up your Plane profile',
            component: Profile,
        },
        {
            title:'Invite people to collaborate',
            component: Workspace,
        },
        {
            title:'Create your workspace',
            component: Member,
        },
    ]

    const {subTitle, title, component:FormMain, titleonBoard}:IItemFormSetUp = lsFormSetUpStep[step];

    return (
        <main className="w-full h-full flex flex-col p-10 box-border">
            <div className="box-border bg-test overflow-hidden flex items-center justify-center flex-1">
                <div className="rounded border-2 border-theme-border-primary px-9 py-10 min-w-[500px]">
                    {subTitle&&(<h3 className="font-bold mb-2">{subTitle}</h3>)}
                    {titleonBoard&&(<h2 className="font-bold mb-5">{titleonBoard}</h2>)}
                    <h1 className="font-bold text-2xl mb-6">{title}</h1>
                    <FormMain/>
                </div>
            </div>
            <div className="flex">
                {lsFormSetUpStep.map((_,i)=><StepItem key={i} isActive={i==step}/>)}
            </div>
        </main>
    );
}
  