import React from 'react'
import { Avatar, Bell, Logo } from '../assets'
import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='px-4 py-10 bg-white h-10 flex justify-between items-center'>
        <div className="flex items-center gap-16">
            <img src={Logo} alt='ulimi-logo' className='w-[156px]' />
            <div className="relative mb-4 lg:mb-0">
              <input
                type="text"
                className="rounded-lg text-sm text-[#4F5867] border mx-3 bg-white h-10 w-[264px] placeholder:pl-9 placeholder:text-sm"
                placeholder="Search by patients..."
              />
              <Search size={18} color="#9AA0A8" className="absolute text-primary-500/90 text-sm top-3 left-6" />
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="bg-[#F7F6FF] rounded-full h-9 w-9 flex justify-center items-center">
                <img src={Bell} alt='notification' className='w-7' />
            </div>

            <div className="flex items-center gap-3">
                <div className="h-10 w-10">
                    <img src={Avatar} alt='profile-avatar' className='object-cover w-full' />
                </div>

                <div className="flex items-center gap-2">
                    <p className='text-base font-medium'>Deko</p>
                    <ChevronDown color="#94979E" className="mt-1" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar