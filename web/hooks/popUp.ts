import { debounce } from 'lodash';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import useDebounce from './fetch';

export interface IPosition {
  left: number | string | undefined;
  top: number | string | undefined;
  minWidth: number | undefined;
}

export interface IPositionResult extends IPosition {
  position: 'absolute' | 'relative';
  visibility: 'visible' | 'hidden';
  transformOrigin?: string;
  transform?: string;
}

export type TPlacement =
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'rightCenter'
  | 'rightTop'
  | 'rightBottom'
  | 'leftCenter'
  | 'leftTop'
  | 'leftBottom';

type TRef = React.RefObject<HTMLDivElement>;

interface IUsePopUp {
  refPopover: TRef;
  refPopup: TRef;
  placement?: TPlacement;
  isHover?: boolean;
  isChildRen?: boolean;
  refDisable?: TRef;
  disableMoveChild?: boolean;
  fitWidth?: boolean;
  space?: number;
}

const usePopUp = ({
  refPopover,
  isChildRen = false,
  isHover = false,
  placement = 'bottomLeft',
  refPopup,
  refDisable,
  disableMoveChild = false,
  fitWidth = true,
  space,
}: IUsePopUp) => {
  const [open, setOpen] = useState<Boolean>(false);
  const timeoutId = useRef<any>(0);
  const mouse = useRef({ isKeyDown: false, isDrag: false });

  const [position, setPosition] = useState<IPosition>({
    left: undefined,
    top: 0,
    minWidth: 0,
  });

  function getPosiTion(wre: HTMLDivElement, poe: HTMLDivElement): IPosition {
    const wr: DOMRect | undefined = wre?.getBoundingClientRect();
    const po: DOMRect | undefined = poe?.getBoundingClientRect();

    const spaceWrCenter = wre.offsetWidth / 2;
    const spacePopCenter = poe.offsetWidth / 2;

    const spaceWrCenterHeight = wre.offsetHeight / 2;
    const spacePopCenterHeight = poe.offsetHeight / 2;

    const MARGIN = space || 5;

    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    var screenHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let left = undefined;
    let top = undefined;

    const mrOverlay = 10;

    const margin = wre.offsetWidth - poe.offsetWidth;
    const marginCH = spaceWrCenterHeight - spacePopCenterHeight;
    const marginC = spaceWrCenter - spacePopCenter;

    const yTop = wr.top - poe.offsetHeight;
    const yBottom = wr.top + wr.height;
    const yLeft = wr.left;
    const yRight = wr.left + wre.offsetWidth - poe.offsetWidth;

    const xRight = wr.left + wre.offsetWidth;
    const xLeft = wr.left - poe.offsetWidth;
    const xTop = wr.top;
    const xBottom = wr.top + wre.offsetHeight - poe.offsetHeight;

    const isYOverFlowT = wr.top - poe.offsetHeight < mrOverlay ? true : false;
    const isYOverFlowBT =
      screenHeight - (wr.top + wr.height + poe.offsetHeight) < mrOverlay
        ? true
        : false;
    const isYOverFlowR =
      screenWidth - (wr.left + poe.offsetWidth) < mrOverlay ? true : false;
    const isYOverFlowL = wr.left - poe.offsetWidth < mrOverlay ? true : false;

    const isXOverFlowL = wr.left - poe.offsetWidth < mrOverlay ? true : false;
    const isXOverFlowR =
      screenWidth - (wr.left + wre.offsetWidth + poe.offsetWidth) < mrOverlay
        ? true
        : false;
    const isXOverFlowBT =
      screenHeight - (wr.top + poe.offsetHeight) < mrOverlay ? true : false;
    const isXOverFlowT = wr.top - poe.offsetHeight < mrOverlay ? true : false;

    switch (placement) {
      case 'bottomLeft':
        left = isChildRen ? 0 : isYOverFlowR ? yRight : yLeft;
        top = isChildRen
          ? '100%'
          : isYOverFlowBT
            ? yTop - MARGIN
            : yBottom + MARGIN;
        break;
      case 'bottomRight':
        left = isChildRen ? margin : isYOverFlowL ? yLeft : yRight;
        top = isChildRen
          ? '100%'
          : isYOverFlowBT
            ? yTop - MARGIN
            : yBottom + MARGIN;
        break;
      case 'bottomCenter':
        left = isChildRen ? marginC : wr.left + marginC;
        top = isChildRen
          ? '100%'
          : isYOverFlowBT
            ? yTop - MARGIN
            : yBottom + MARGIN;
        break;
      case 'topCenter':
        left = isChildRen ? marginC : wr.left + marginC;
        top = isChildRen ? '100%' : isYOverFlowT ? yBottom : yTop - MARGIN;
        break;
      case 'topRight':
        left = isChildRen ? margin : isYOverFlowL ? yLeft : yRight;
        top = isChildRen ? '100%' : isYOverFlowT ? yBottom : yTop - MARGIN;
        break;
      case 'topLeft':
        left = isChildRen ? margin : isYOverFlowR ? yRight : yLeft;
        top = isChildRen ? '100%' : isYOverFlowT ? yBottom : yTop - MARGIN;
        break;
      case 'leftTop':
        left = isChildRen ? margin : isXOverFlowL ? xRight : xLeft;
        top = isChildRen ? '100%' : isXOverFlowBT ? xBottom : xTop;
        break;
      case 'leftCenter':
        left = isChildRen ? margin : isXOverFlowL ? xRight : xLeft;
        top = isChildRen ? '100%' : wre.offsetTop + marginCH;
        break;
      case 'leftBottom':
        left = isChildRen ? margin : isXOverFlowL ? xRight : xLeft;
        top = isChildRen ? '100%' : isXOverFlowT ? xTop : xBottom;
        break;
      case 'rightTop':
        left = isChildRen ? margin : isXOverFlowR ? xLeft : xRight;
        top = isChildRen ? '100%' : isXOverFlowBT ? xBottom : xTop;
        break;
      case 'rightCenter':
        left = isChildRen ? margin : isXOverFlowR ? xLeft : xRight;
        top = isChildRen ? '100%' : wre.offsetTop + marginCH;
        break;
      case 'rightBottom':
        left = isChildRen
          ? margin
          : isXOverFlowR
            ? xLeft - MARGIN
            : xRight + MARGIN;
        top = isChildRen ? '100%' : isXOverFlowT ? xTop : xBottom;
        break;
    }

    return {
      left: left,
      top: top,
      minWidth: fitWidth ? wre.offsetWidth : undefined,
    };
  }

  function handleMouseover() {
    clearTimeout(timeoutId.current);
    setOpen(true);
  }

  function handleMouseleave() {
    if (disableMoveChild) {
      handleClosePopUp();
    } else {
      timeoutId.current = setTimeout(() => {
        refPopup.current?.removeEventListener(
          'mouseover',
          handleMouseover,
          true
        );
        refPopup.current?.removeEventListener(
          'mouseleave',
          handleMouseleave,
          true
        );
        handleClosePopUp();
      }, 500);
    }
  }

  function handleClick(e: any) {
    if (
      !refPopup.current?.contains(e.target) &&
      !mouse.current.isDrag &&
      !e?.target?.clear &&
      !e?.target?.classList.contains('close')
    ) {
      handleClosePopUp();
    }
    mouse.current = { isDrag: false, isKeyDown: false };
  }

  function addEventClick() {
    window.addEventListener('click', handleClick, true);
  }

  function removeEventClick() {
    window.removeEventListener('click', handleClick, true);
  }

  function addEventMouse() {
    refPopover?.current?.addEventListener('mouseover', handleMouseover, true);
    refPopover?.current?.addEventListener('mouseleave', handleMouseleave, true);
  }

  function removeEventMouse() {
    refPopover?.current?.addEventListener('mouseover', handleMouseover, true);
    refPopover?.current?.addEventListener('mouseleave', handleMouseleave, true);
  }

  useEffect(() => {
    if (refPopover.current && refPopup.current)
      setPosition(getPosiTion(refPopover.current, refPopup.current));
  }, [refPopover.current, refPopup.current, open]);

  useEffect(() => {
    function handleClickOpenPopUp(e: any) {
      if (!refDisable?.current?.contains(e.target)) setOpen(true);
    }

    if (isHover) addEventMouse();
    else refPopover?.current?.addEventListener('click', handleClickOpenPopUp);

    return () => {
      if (isHover) removeEventMouse();
      else refPopover?.current?.addEventListener('click', handleClickOpenPopUp);
    };
  }, []);

  function handleClosePopUp() {
    if (isHover) {
      setOpen(false);
    } else {
      // @ts-ignore: Unreachable code error
      if (refPopup.current)
        refPopup.current.style.animation = 'closePopUp .3s ease-out';

      // @ts-ignore: Unreachable code error
      if (refPopup.current) refPopup.current.style.opacity = '0';

      // @ts-ignore: Unreachable code error
      if (refPopup.current) refPopup.current.style.scale = '.8';

      setTimeout(() => {
        open && setOpen(false);
      }, 300);
    }
  }

  useEffect(() => {
    if (open) addEventClick();
    else removeEventClick();
    return () => {
      removeEventClick();
      document.body.style.overflowX = 'hidden';
    };
  }, [open]);

  useEffect(() => {
    if (isHover) {
      refPopup.current &&
        refPopup.current.addEventListener('mouseover', handleMouseover, true);
      refPopup.current &&
        refPopup.current.addEventListener('mouseleave', handleMouseleave, true);
    }
  }, [refPopup.current]);

  function handleWhenMouseDown() {
    mouse.current.isKeyDown = true;
  }

  function handleWhenMouseLeave() {
    if (mouse.current.isKeyDown) mouse.current.isDrag = true;
  }

  useEffect(() => {
    const handleScroll = () => {
        refPopover.current && refPopup.current && setPosition(getPosiTion(refPopover.current, refPopup.current));
    };
    if (open) document.addEventListener('scroll', handleScroll, true);
    else document.removeEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, [open]);

  const style: IPositionResult = {
    ...position,
    position: 'absolute',
    transformOrigin: `top ${placement}`,
    visibility:
      position?.left == undefined || position?.top == undefined
        ? 'hidden'
        : 'visible',
  };

  return {
    style,
    mouse,
    open,
    setOpen,
    handleClose: handleClosePopUp,
    handleWhenMouseDown,
    handleWhenMouseLeave,
  };
};

export default usePopUp;
