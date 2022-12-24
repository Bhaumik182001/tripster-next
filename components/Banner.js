import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg' fill className="object-cover"/>
        <div className=' absolute top-1/2 w-full text-center'>
            <p className='text-black'>Not sure where to go?</p>
            <button className='mt-2 text-purple-500 bg-white text-lg shadow-md py-4 hover:scale-105 transform transition duration-300 ease-out active:scale-95 hover:shadow-lg active:shadow-sm px-8 rounded-full active:text-green-500'>I'm Flexible</button>
        </div>
    </div>
  )
}

export default Banner