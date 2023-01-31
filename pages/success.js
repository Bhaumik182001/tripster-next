import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'

function Sucess() {

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Tripster</title>
        <link rel="icon" href="https://i.imgur.com/ZNKoZzY.png" />
      </Head>
      <Header />
    <main className='flex items-center justify-center h-[100vh] max-w-7xl mx-auto'>
      <Image src="https://imgur.com/LFr5IE9.jpg"  fill className='h-[100vh]'/>
      <div className='top-1/2 text-white rounded-xl absolute flex-wrap '>
        <h1 className='text-7xl text-green-400'>Woohoo!</h1>
        <h1 className='text-5xl'>Your reservation has been confirmed sucessfully!</h1>
        <h1>Hope you a pleasant experience...</h1>
        <div className='w-full flex items-center justify-center'>
          <button onClick={()=>router.push("/")} className='text-blue-800 bg-white px-8 py-4  rounded-full mt-4 text-2xl hover:scale-105 active:scale-95 transform transition duration-300 ease-out active:text-pink-500 shadow-md hover:shadow-lg active:shadow-sm'>Go Back</button>
        </div>
      </div>
    </main>
    <Footer />
    </div>
    
  )
}

export default Sucess