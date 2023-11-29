'use client';
import Member from '@/components/setup/set-up-member';
import Profile from '@/components/setup/set-up-profile';
import Workspace from '@/components/setup/set-up-workspace';
import RangeLoading from '@/components/ui/loading/rangeloading';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IInfo } from '@/types';
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IPropsComponent } from '@/components/setup/type';

interface IItemFormSetUp {
    subTitle?: string;
    titleonBoard?: string;
    title: string;
    component: React.FC<IPropsComponent>;
}

interface IProps {
    isActive: boolean;
}

const StepItem: React.FC<IProps> = ({ isActive }) => {
    return (
        <div
            className={`w-8 ml-3 h-1 rounded ${
                isActive ? 'bg-red-300' : 'bg-theme-border-primary'
            }`}
        ></div>
    );
};

function getStepDefault(info: IInfo): number {
    const workspace_join = Number(info?.onboarding_step?.workspace_join);
    const profile_complete = Number(
        info?.onboarding_step?.profile_complete,
    );
    const workspace_create = Number(
        info?.onboarding_step?.workspace_create,
    );
    const workspace_invite = Number(
        info?.onboarding_step?.workspace_invite,
    );

    if (
        workspace_join &&
        !profile_complete &&
        !workspace_create &&
        !workspace_invite
    )
        return 0;

    if (
        workspace_join &&
        profile_complete &&
        !workspace_create &&
        !workspace_invite
    )
        return 1;

    if (
        workspace_join &&
        profile_complete &&
        workspace_create &&
        !workspace_invite
    ) {
        return 2;
    }

    return 0;
}

const lsFormSetUpStep: IItemFormSetUp[] = [
    {
        subTitle: 'Hey there 👍',
        titleonBoard: 'Let get you onboard',
        title: 'Set up your Plane profile',
        component: Profile,
    },
    {
        title: 'Create your workspace',
        component: Workspace,
    },
    {
        title: 'Invite people to collaborate',
        component: Member,
    },
];

const Setup = () => {
    const info = useSelector(selectInfo);
    const [step, setStep] = useState<number>(
        getStepDefault(info||{}),
    );
    const [Loading, setLoading] = useState(false);
    const router = useRouter();
    const nextStep = useCallback(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);

        setStep((state) => {
            const curent = state + 1;
            if (curent <= 3 && curent >= 0) return curent;
            else return state;
        });
    }, [step]);

    const prevStep = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);

        setStep((step) => {
            const curent = step - 1;
            if (curent <= 3 && curent >= 0) return curent;
            else return step;
        });
    };

    const {
        subTitle,
        title,
        component: FormMain,
        titleonBoard,
    }: IItemFormSetUp = lsFormSetUpStep[step];

    useEffect(() => {
        if (info?.is_onboarded && info.workspace?.slug)
            router.push(info.workspace.slug);
    }, [info]);

    return (
        <>
            {Loading && <RangeLoading />}
            <div className="box-border bg-test overflow-hidden flex items-center justify-center flex-1">
                <div className="rounded border-2 border-theme-border-primary px-9 py-10 min-w-[350px] w-[500px] shadow-theme-primary">
                    {subTitle && <h3 className="font-bold mb-2">{subTitle}</h3>}
                    {titleonBoard && (
                        <h2 className="font-bold mb-5">{titleonBoard}</h2>
                    )}
                    <h1 className="font-bold text-2xl mb-6">{title}</h1>
                    <FormMain nextStep={nextStep} prevStep={prevStep} />
                </div>
            </div>
            <div className="flex mb-3">
                {lsFormSetUpStep.map((_, i) => (
                    <StepItem key={i} isActive={i == step} />
                ))}
            </div>
        </>
    );
};

export default Setup;
