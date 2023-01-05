import Image from 'next/image';
import { HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"



import React from 'react'

function InfoCard({title, img, location, description, star, price, total, long, lat}) {
  return (
    <div className='flex py-7 px-2 border-b pr-4 transform transition duration-200 ease-out cursor-pointer hover:scale-105 hover:text-white'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
            <Image src={img} fill className='object-cover rounded-xl'/>
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'/>
            <p className='pt-2 text-sm text-gray-500'>{description}</p>
            <div className='flex  justify-between items-end pt-5'>
                <p className='flex items-center'><StarIcon className='text-yellow-300 h-5'/>{star}</p>
                <div >
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default InfoCard