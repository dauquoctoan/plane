import General from '@/components/setting/general'
import { useSelector } from '@/store'
import { selectInfo } from '@/store/slices/authSlice/selectors'
import React from 'react'

const Page = () => {
    return (
        <General />
    )
}

export default Page