import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function AccessDenied () {
  return (
    <div className='flex flex-col w-full  h-90'>
      <div className=' relative h-[600px] w-[600px] align-center justify-center mx-auto'>
      <Image src="https://i.imgur.com/VOHB74Z.png" fill className='object-cover'/>
        <p className='absolute bottom-20 right-40 text-lg mx-auto align-center'>
          You must be
          <span
          href="/api/auth/signin"
          onClick={(e) => {
          e.preventDefault()
          signIn()
       }}
          className='cursor-pointer hover:scale-105 text-black bg-white text-xl font-semibold px-2 py-1 rounded-lg space-x-1 mx-3'>
            Signed In
          </span>
           to view this page
        </p>
      </div>
      
      
    </div>
  )
}