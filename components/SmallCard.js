import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function SmallCard({img, location, distance}) {

  const router = useRouter();

  

  const pushSearchForExplore =(place) => {
    router.push({
      pathname: '/search',
      query: {
        input: place,
        startingDate: new Date().toDateString(),
        lastDate: new Date().toDateString(),
        guests: 1
      }
    })
  }

  return (
    <div onClick={()=>pushSearchForExplore(location)} className='flex mt-2 m-2 space-x-4 hover:scale-105 hover:text-white active:scale-95 transform transition duration-200 ease-out cursor-pointer'>
        <div className='relative h-16 w-16'>
            <Image src={img} fill className='rounded-xl'/>
        </div>
        <div className='pl-2'>
            <h2 className='font-semibold text-xl'>{location}</h2>
            <h3 className=' text-md'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard