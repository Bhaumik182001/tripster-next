import React from 'react'

function Footer() {
  return (
    
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mt-5 text-white'>
            <div className='space-y-4 text-xs '>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs '>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessiblity</p>
                <p>This is not real site</p>
                <p>Its a pretty clone</p>
                <p>referrals Accepted</p>
                <p>Self taught</p>
            </div>
            <div className='space-y-4 text-xs '>
                <h5 className='font-bold'>HOST</h5>
                <p>React</p>
                <p>Tailwind</p>
                <p>Meta</p>
                <p>NextJS</p>
                <p>Netlify</p>
            </div>
            
            <div className='space-y-4 text-xs '>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p> Say Hi to Web</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
             
        </div>
    
      )
  
}

export default Footer