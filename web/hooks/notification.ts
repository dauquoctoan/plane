import { NotiContext } from "@/components/ui/notification"
import { useContext } from "react"

export const useNoti=()=>{
    const noti = useContext(NotiContext);
    return noti
}