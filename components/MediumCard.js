import Image from 'next/image'
import React from 'react'

function MediumCard({img, title}) {
  return (
    <div className='p-3 hover:scale-105 transition transform duration-200 ease-out hover:text-white'>
        <div className='relative h-80 w-80'>
            <Image src={img} fill className='object-contain rounded-lg'/>
        </div>
        <p className='mt-2 text-2xl'>{title}</p>
    </div>
  )
}

export default MediumCard