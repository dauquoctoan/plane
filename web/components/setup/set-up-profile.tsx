import React from 'react'
import Input from '../ui/input/Input'
import AutoComplete from '../ui/auto-complete'

const Profile = () => {
  return (
    <div className='mt-3'>
        <Input placeholder='First name?' label='First Name' className='mb-4'/>

        <Input placeholder='Last name?' label='Last Name' className='mb-4'/>

        <AutoComplete placeholder='Whats your role?' label='Whats Your Role' className=''/>
    </div>
  )
}

export default Profile