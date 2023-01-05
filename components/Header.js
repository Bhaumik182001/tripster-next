import Image from 'next/image'
import React, { use, useState } from 'react'
import {BeakerIcon, MagnifyingGlassIcon, Bars3Icon, UserIcon, UsersIcon} from "@heroicons/react/24/outline"
import {GlobeAltIcon} from "@heroicons/react/24/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'
import { ro } from 'date-fns/locale';
import { Popover, Transition } from '@headlessui/react'


function Header() {

  const [input, setInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (objectSelection) => {
    setStartDate(objectSelection.selection.startDate);
    console.log(startDate)
    setEndDate(objectSelection.selection.endDate);
    console.log(endDate)
  }

  const pushSearch =() => {
    router.push({
      pathname: '/search',
      query: {
        input: input,
        startingDate: startDate.toDateString(),
        lastDate: endDate.toDateString(),
        guests: numberOfGuests
      }
    })
  }

  

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <div className='grid grid-cols-3 p-4 shadow-lg sticky top-0 z-50 bg-black'>
        <div
        onClick={()=>{router.push('/')}}
        className='relative h-12 flex items-center  my-auto cursor-pointer'>
        <Image src="https://i.imgur.com/ZNKoZzY.png" fill className='object-contain object-left'/>
        
        </div>
        <div className='flex border-2 rounded-full py-1 px-3 cursor-pointer'>
            <input
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             type="text" placeholder="Search here..." className='bg-transparent outline-none flex-grow text-white' />
            <MagnifyingGlassIcon className='h-8 rounded-full hidden lg:inline my-auto' />
        </div>
        <div className='flex justify-end'>
            <div className='hover:text-white flex cursor-pointer transfrom transition duration-300 ease-out'>
            <p className='hidden lg:inline my-auto pr-2'>Become a Member</p>
            <GlobeAltIcon className='h-8 my-auto'/>
            </div>
            
            <div className='ml-4 flex bg-white text-black rounded-full px-6 mx-2 '>
            <Bars3Icon className='h-6 my-auto border-r-2 pr-3 cursor-pointer' />
            <UserIcon className='h-6 my-auto pl-3 cursor-pointer'/>
            </div>
        </div>
        {input && 
        <Popover className="relative">
           <div className='flex mt-2 flex-col mx-auto col-span-3 rounded-full'>
            <DateRangePicker
            
            minDate={new Date()}
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className='flex justify-between p-2 pt-3'>
          <p className='text-2xl'>Number of Guests</p>
          <div className='flex'>
            <UsersIcon className='h-7 my-auto mr-3'/>
            <input
            onChange={(e)=>setNumberOfGuests(e.target.value)}
            value={numberOfGuests} 
            type="number" className='w-9 text-lg text-white bg-transparent my-auto'/>
          </div>
      </div>
      <div className='flex'>
        <button
          onClick={()=>setInput("")}
         className='flex-grow text-lg hover:text-white hover:scale-105 transfrom transition duration-100 ease-out'>Cancel</button>
        <button
        onClick={()=> pushSearch()}
         className='flex-grow text-lg hover:text-white hover:scale-105 transfrom transition duration-100 ease-out'>Search</button>
      </div>
        </div>
        </Popover>
       
        
        }
        
    </div>
  )
}

export default Header