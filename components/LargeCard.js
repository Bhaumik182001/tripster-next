import Image from 'next/image'
import React from 'react'

function LargeCard({title, description, buttonText, img}) {
  return (
    <div className='relative mt-4'>
        <div className='relative h-96 min-w-[300px] py-16'>
            <Image src={img} fill className='object-cover rounded-lg'/>
        </div>
        <div className='absolute top-32 left-12 space-y-2'>
        <h2 className='text-black text-4xl flex-wrap max-w-[200px]'>{title}</h2>
        <h3 className='text-black'>{description}</h3>
        <button className='bg-black hover:scale-105 active:scale-95 transform transition duration-200 text-gray-300 hover:text-white  py-2 px-4 rounded-md text-sm'>{buttonText}</button>
        </div>
        
    </div>
  )
}

export default LargeCard