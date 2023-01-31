import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import AccessDenied from '../components/AccessDenied'
import MapContainer from '../components/MapContainer'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

function Member({data}) {
    const router = useRouter();
    const { data: session } = useSession()
    const [value, setValue] = useState(8);

  

  return (
    <div>
        <Header />
        <main className='max-w-7xl mx-auto px-8 sm:px-18 h-[100vh] '>
          {session ?
          <div className='flex'>
            <div className='flex-grow w-full h-90 flex pt-20'>
              <div className='items-center justify-center absolute border-white p-10 rounded-xl top-70 right-70'>
                <h1 className='text-6xl font-extrabold text-green-400 pb-10 max-w-[400px]'>Do you Want to earn easy money 💵...?</h1>
              <h2 className='text-3xl text-semibold'>Become an Owner</h2>
             
              <h1 className='text-5xl'>You Could Earn</h1>
            
              <Box sx={{ width: 300 }}>
                <Stack spacing={4} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <Slider valueLabelDisplay="auto" max="30" aria-label="nights" value={value} size="large" onChange={(e)=>setValue(e.target.value)} />
                </Stack>
              </Box>

              <h3>{value} nights at an estimated $212 CAD a night</h3>

              <h1 className='text-7xl'>{`$${Intl.NumberFormat().format((value*212))} CAD`}</h1>

              </div>
              </div>
            <div className='flex-grow hidden rounded-full xl:inline-flex xl:min-w-[600px] xl:min-h-[700px]'>
            <MapContainer searchResult={data}/>
            
            </div>
          </div>
          
          :
            <AccessDenied />}
        </main>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const data = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json());
  return {
    props: {
      data
     
    }, 
  }
}



export default Member