'use client'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useRouter } from "next/navigation";

const GotBack = () => {
    const router = useRouter();
  return (
    <div className="px-2 py-1 hover:bg-theme-secondary w-fit rounded cursor-pointer" onClick={()=>{router.back()}}>
        <MdOutlineKeyboardBackspace />
    </div>
  )
}

export default GotBack;