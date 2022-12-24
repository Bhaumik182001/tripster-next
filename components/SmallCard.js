import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex mt-2 m-2 space-x-4 hover:scale-105 hover:text-white active:scale-95 transform transition duration-200 ease-out cursor-pointer'>
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