import { useEffect, useRef } from "react"

export const RangeLoading=()=>{
    const refLoading = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        setTimeout(() => {
            refLoading.current?.classList.add('hidden')
        }, 200);
    },[])

    return (
    <div ref={refLoading} className="absolute h-[2.5px] w-full top-0 left-0 right-0">
        <div className="bg-blue-600 animate-loadingRange h-[100%]"></div>
    </div>)
}
