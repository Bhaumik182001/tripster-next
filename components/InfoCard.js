import Image from 'next/image';
import { HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import { useRouter } from 'next/router'


import React from 'react'


function InfoCard({title, img, location, description, star, price, total, long, lat, startingDate, lastDate, guests}) {

    const router = useRouter();

  

  const pushToReserve =() => {
    router.push({
      pathname: '/reserve',
      query: {
        title: title,
        image: img,
        location: location,
        description: description,
        star: star,
        price: price.slice(1),
        startingDate: startingDate,
        lastDate: lastDate,
        startingday: startingDate.slice(8, 11), 
        endingDay: lastDate.slice(8, 11),
        nights: parseInt(lastDate.slice(8, 11))-parseInt(startingDate.slice(8, 11))+1,
        guests: guests
      }
    })
  }

  return (
    <div onClick={()=>pushToReserve()} className='flex  py-7 px-2 border-b pr-4 transform transition duration-200 ease-out cursor-pointer hover:scale-105 hover:text-white'>
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
                <p className='flex items-center text-xl'><StarIcon className='text-yellow-300 h-7'/>{star}</p>
                <div >
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{`$${price.slice(1)}`}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default InfoCard
