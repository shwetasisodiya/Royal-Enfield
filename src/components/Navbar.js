import { useState } from "react";
import React from "react";

export default function Navbar() {
  let theEnd=0;
  let End=1871;
  const [top,setTop] = useState('top-0')
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  theEnd = scrollTop;
  
  window.addEventListener('scroll', function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    console.log("scroll top",scrollTop)
    if(scrollTop > theEnd){
      setTop("-top-20");
    }
    else{
      setTop("top-0")
    }
    console.log("new the end",theEnd)
  })
  window.addEventListener('scroll', function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    console.log("scroll top",scrollTop)
    if(scrollTop > End){
      setTop("-top-20");
    }
    console.log("new the end",theEnd)
  })

  return (
    <div className={`grid fixed px-8 z-10 w-full scroll-smooth bg-stone-900 h-20 grid-cols-6 text-white duration-500 ${top}`}  style={{backgroundColor: '#0a0a0a',fontFamily: "'Roboto', sans-serif"}}>
        <div className="justify-start flex items-center">
          <img className="w-52 h-7" src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg" alt=""/>
        </div>
        
        <div className="col-start-2 col-span-4 flex justify-end">
          <ul className="flex flex-row text-lg  tracking-wide">
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Motorcycles
            </li>
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Service
            </li>
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Get the Look
            </li>
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Rides
            </li>
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Own a Royal Enfield
            </li>
            <li className="hover:text-red-600 cursor-pointer mt-6 mx-2">
              Reach Us
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <p className="cursor-pointer"style={{marginTop: "25px",paddingLeft: "145px",paddingRight: "0px",}}>
            Login
          </p>
        </div>
      </div>
  );
}
