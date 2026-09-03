import React from 'react'
import { Bell ,Menu, Search } from 'lucide-react';

const TopNav = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 bg-gray-800 rounded-md px-3 py-2'>
            <Search size={20} />
            <input type="text"
             placeholder='Search...' 
             className='bg-transparent outline-none text-sm w-full' />
        </div>
   <div className='flex gap-4'>
    <Bell size={20} />
    <Menu size={20} />
   </div>
    </div>
  )
}

export default TopNav