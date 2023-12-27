'use client';
import AutoComplete from '@/components/ui/auto-complete';
import Input from '@/components/ui/input/Input';
import React, { useState, useEffect } from 'react';
import {
    useForm,
    UseFormRegister,
    FieldValues,
    FieldErrors,
    UseFormSetValue,
    UseFormUnregister,
} from 'react-hook-form';
import Button from '@/components/ui/button';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { VALIDATE_EMAIL } from '@/constants/regex';
import { MEMBER_ROLE } from '@/constants/issue';
import { v4 as uuidv4 } from 'uuid';
import workspaceService from '@/services/workspace-services';
import { IWorkspaceMemberInvite } from '@/types';
import { useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { useRouter } from 'next/navigation';
import authService from '@/services/auth-services';
import { getUsertAsync } from '@/store/slices/authSlice/thunks';
import { IPropsComponent } from './type';

interface Iprops {
    index: number;
    keyForm: string;
    removeIndex: (k: string) => void;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    unregister: UseFormUnregister<FieldValues>;
}

function createKey(index: string) {
    return {
        role: 'role-' + index,
        email: 'email-' + index,
    };
}

function getRole(role: string) {
    switch (role) {
        case 'Guest':
            return 5;
        case 'Member':
            return 10;
        case 'Admin':
            return 15;
        case 'Owner':
            return 20;
        default:
            return 10;
    }
}

function createLsUUID(count: number) {
    const lsArray = [];
    for (let i = 0; i < count; i++) {
        lsArray.push(uuidv4());
    }
    return lsArray;
}

const InvitePeopleItem: React.FC<Iprops> = ({
    keyForm,
    register,
    errors,
    setValue,
    unregister,
    index,
    removeIndex,
}) => {
    return (
        <div className="flex gap-3 items-center group mb-4">
            <Input
                placeholder="Enter your Email?"
                error={errors}
                label={index == 0 ? 'Co-workers Email' : ''}
                wrClassName="flex-1"
                keyForm={createKey(keyForm).email}
                register={register}
                setValue={setValue}
                nameForm="Email"
                validator={{
                    required: {
                        value: true,
                        message: 'Email is required',
                    },
                    pattern: {
                        message: 'Invalid email',
                        value: VALIDATE_EMAIL,
                    },
                }}
            />
            <AutoComplete
                placeholder="Whats your role?"
                error={errors}
                label={index == 0 ? 'Role' : ''}
                wrClassName="flex-1"
                keyForm={createKey(keyForm).role}
                nameForm="Member"
                data={MEMBER_ROLE}
                setValue={setValue}
                register={register}
                defaultValue="Member"
                validator={{ required: true }}
            />
            <IoCloseSharp
                onClick={() => {
                    unregister(createKey(keyForm).email);
                    unregister(createKey(keyForm).role);
                    removeIndex(keyForm);
                }}
                className={`hover:cursor-pointer ${
                    index == 0 ? 'mt-5' : ''
                } invisible group-hover:visible`}
            />
        </div>
    );
};

const Member: React.FC<IPropsComponent> = () => {
    const dispatch = useDispatch();
    const info = useSelector(selectInfo);
    const [lsKeys, setlsKeys] = useState<string[]>(createLsUUID(2));
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    function removeIndex(key: string) {
        const arr = [...lsKeys];
        const index = arr.indexOf(key);
        if (index > -1) arr.splice(index, 1);
        setlsKeys([...arr]);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        unregister,
    } = useForm();

    useEffect(() => {
        if (!info?.workspace?.id) {
            dispatch(getUsertAsync());
        }
    }, [info?.workspace?.id]);

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                if (info?.workspace?.id && info.id && lsKeys.length > 0) {
                    setLoading(true);
                    const lsMember: IWorkspaceMemberInvite[] = lsKeys.map(
                        (e, i) => {
                            const { email, role } = createKey(e);
                            return {
                                email: data[email],
                                role: getRole(data[role]),
                                workspace_id: info?.workspace?.id,
                            };
                        },
                    );
                    const result =
                        await workspaceService.createsWorkspaceMemberInvite(
                            lsMember,
                        );
                    if (result) {
                        const resultInfo = await authService.upDateUser({
                            is_onboarded: true,
                            onboarding_step: {
                                profile_complete: 1,
                                workspace_create: 1,
                                workspace_invite: 1,
                                workspace_join: 1,
                            },
                        });
                        if (resultInfo) {
                            setLoading(false);
                            router.push(info?.workspace?.slug || '');
                        }
                    }
                    setLoading(false);
                }
            })}
        >
            {lsKeys.map((e, i) => {
                return (
                    <InvitePeopleItem
                        unregister={unregister}
                        setValue={setValue}
                        errors={errors}
                        key={e}
                        removeIndex={removeIndex}
                        keyForm={e}
                        index={i}
                        register={register}
                    />
                );
            })}
            <div
                className="mb-4 flex w-fit items-center cursor-pointer text-color-special-primary"
                onClick={() => {
                    setlsKeys([...lsKeys, uuidv4()]);
                }}
            >
                <HiOutlinePlusSm />
                Add another
            </div>
            <Button
                loading={loading}
                type="submit"
                text="submit"
                typeBTN="primary"
            />
        </form>
    );
};

export default Member;
