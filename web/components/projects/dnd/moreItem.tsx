import Input from '@/components/ui/input/Input';
import usePopUp from '@/hooks/popUp';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LuPlus } from 'react-icons/lu';

const MoreItem: FC = () => {
    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);
    const { style, open } = usePopUp({ refPopover, refPopup });

    return (
        <div
            ref={refPopover}
            className="relative flex gap-2 items-center cursor-pointer px-3"
        >
            <div className="relative flex gap-2 text-color-special-primary items-center cursor-pointer px-3">
                <LuPlus />
                <div>New Issue</div>
            </div>
            {open &&
                createPortal(
                    <div
                        ref={refPopup}
                        style={{ zIndex: 400, ...style }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode == 13) {
                                alert('vlxx');
                            }
                        }}
                        className="px-3 py-1 absolute top-[100%] left-0 rounded shadow-theme-primary"
                    >
                        <Input
                            placeholder="Issue title"
                            autoFocus
                            wrClassName=""
                        />
                        <span className="text-[11px]">
                            press enter when done.
                        </span>
                    </div>,
                    document.body,
                )}
        </div>
    );
};
export default MoreItem;
