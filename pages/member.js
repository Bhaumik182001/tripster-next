import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import AccessDenied from '../components/AccessDenied'

function Member() {
    const router = useRouter();
    const { data: session } = useSession()

  return (
    <div>
        <Header />
        <main className='pt-10 flex'>
          {session ? "Welcome" 
          :
            <AccessDenied />}
        </main>
        <Footer />
    </div>
  )
}



export default Member