import React from 'react';
import { layoutSlice, useDispatch, useSelector } from '@/store';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';

const FooterNav = () => {
    const isCollap = useSelector(selectIsCollap);
    const dispatch = useDispatch();

    function handleToggleMenu() {
        dispatch(layoutSlice.actions.setToggleCollap());
    }

    return (
        <div className="w-full h-[45px] border-t border-theme-border-primary px-4 py-2 box-border flex items-center overflow-hidden justify-between">
            {!isCollap && (
                <div className="px-2 py-1 bg-[rgba(34,197,94,.1)] text-[rgb(34,197,94)] whitespace-nowrap overflow-hidden rounded">
                    Free Plan
                </div>
            )}
            <div
                onClick={handleToggleMenu}
                className={`px-2 py-1 rounded hover:bg-theme-secondary w-fit cursor-pointer`}
            >
                <HiMiniArrowLongLeft
                    className={`text-[20px] hover:scale-105 ${
                        isCollap ? 'rotate-180' : 'rotate-0'
                    } duration-75 transition-all`}
                />
            </div>
        </div>
    );
};

export default FooterNav;
