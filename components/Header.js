import Image from 'next/image'
import React from 'react'
import {BeakerIcon, MagnifyingGlassIcon, Bars3Icon, UserIcon} from "@heroicons/react/24/outline"
import {GlobeAltIcon} from "@heroicons/react/24/solid"


function Header() {
  return (
    <div className='grid grid-cols-3 p-4 shadow-lg sticky top-0 z-50'>
        <div className='relative h-12 flex items-center  my-auto cursor-pointer'>
        <Image src="https://i.imgur.com/ZNKoZzY.png" fill className='object-contain object-left'/>
        
        </div>
        <div className='flex border-2 rounded-full py-1 px-3 cursor-pointer'>
            <input type="text" placeholder="Search here..." className='bg-transparent outline-none flex-grow' />
            <MagnifyingGlassIcon className='h-8 rounded-full hidden lg:inline my-auto' />
        </div>
        <div className='flex justify-end'>
            <div className='hover:text-white flex cursor-pointer'>
            <p className='hidden lg:inline my-auto pr-2'>Become a Member</p>
            <GlobeAltIcon className='h-8 my-auto'/>
            </div>
            
            <div className='ml-4 flex bg-white text-black rounded-full px-6 mx-2 '>
            <Bars3Icon className='h-6 my-auto border-r-2 pr-3 cursor-pointer' />
            <UserIcon className='h-6 my-auto pl-3 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Header