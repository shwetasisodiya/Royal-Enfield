import React from 'react'

export default function Grid() {
  return (
    <div className='grid grid-cols-4 color-red gap-0'>
    <div className='overflow-hidden relative cursor-pointer'>					
        <img className='hover:scale-105 ease-in duration-300 block' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/tout/hunter-autocar.jpg" alt="" />
        <p className='absolute bottom-0 left-0 text-white leading-none font-bold tracking-tight px-4 pb-2' style={{GuatextShadow: "3px 4px 7px rgba(81,67,21,0.8)rdian Sans"}}>The Hunter certainly meets the expectations of a modern day Royal Enfield . It's a well designed, well engineered motorcycle with a  good sense of character.</p>
    </div>
    <div className='overflow-hidden relative cursor-pointer'>
        <img className='hover:scale-105 ease-in duration-300 block' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/tout/huunter-overdrive.jpg" alt="" />
        <p className='absolute bottom-0 left-0 text-white leading-none font-bold tracking-tight px-4 pb-2'>The Hunter 350 is a motorcycle that keeps things simple, fun and engaging with a touch of finesse - just like the other modern RE machines - which makes it very likeable.</p>
    </div>
    <div className='overflow-hidden relative cursor-pointer'>
        <img className='hover:scale-105 ease-in duration-300 block' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/tout/hunter-moto.jpg" alt="" />
        <p className='absolute bottom-0 left-0 text-white leading-none font-bold tracking-tight px-4 pb-2'>Democratic like jeans, the Hunter 350 is perfect for those who want an easy, personal motorcycle, with an agile and fun ride even in the city.</p>
    </div>
    <div className='overflow-hidden relative cursor-pointer'>
        <img className='hover:scale-105 ease-in duration-300 block' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/tout/hunter-auto-today.jpg" alt="" />
        <p className='absolute bottom-0 left-0 text-white leading-none font-bold tracking-tight px-4 pb-2'>Built to be slick and fun around the city, the Hunter 350 is a hoot to ride. While the chassis set-up is brilliant, the engine too syncs well in spite of it being the long stroke motor. Overall then the Hunter 350 is a brilliant package and should be able to draw naysayers to the brand.</p>
    </div>
    </div>
  )
}
