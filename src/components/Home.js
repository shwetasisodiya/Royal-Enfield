import React from 'react'

export default function Home() {
  return (
    <>
      <div className='bg-black w-full md:block hidden' style={{height: "73px"}}></div>
    <div className='relative md:block hidden'>
      <img className='w-full' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/super-meteor-650.png" alt="" />
      <div className='absolute top-0 left-0' style={{marginLeft: "4%",paddingTop: "60px"}}>
      <img className='inline-block max-w-full' style={{height: "85px",width: "350px"}} src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/super-meteor-650-logo.png" alt="" />
      </div>
    </div> 
{/* Mobile display  */}
<div className='bg-black w-full md:hidden' style={{height: "48px"}}></div>
    <div className='relative md:hidden'>
      <img className='w-full h-full' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/mobile/super_meteor_650_new.png" alt="" />
    </div> 
    </>
  )
}
