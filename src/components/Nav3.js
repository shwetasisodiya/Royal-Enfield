import { useState } from "react";
import React from "react";

export default function Nav3() {
  let start=3500;
  const [position,setPosition] = useState("relative")
  
  window.addEventListener('scroll', function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    console.log("scroll top",scrollTop)
    if(scrollTop >= start){
      setPosition("fixed top-0");
    }
    else{
      setPosition("relative")
    }
  })

  const [img,setImg] = useState("w-0 h-0 pl-0")
  
  window.addEventListener('scroll', function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    console.log("scroll top",scrollTop)
    if(scrollTop >= start){
      setImg("w-48 h-6 pl-7");
    }
    else{
      setImg("w-0 h-0 pl-0")
    }
  })
  
  return (
    
          <>
<div className={`flex ${position} flex-row z-10 w-full scroll-smooth bg-zinc-800 text-white duration-500`}  style={{ height: "61px"}}>
        <div className="inline-block align-middle" style={{marginTop: "25px"}}>
          <img className={`duration-500 ${img}`} src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg" alt=""/>
        </div>
        <div>
          <ul className="flex flex-row font-bold inline-block align-middle">
            <li style={{marginTop: "16px",paddingLeft: "25px",paddingRight: "15px",fontSize: "25px",}}>
            Apparel
            </li>
            <li
              className="hover:text-red-600 cursor-pointer border-r-2 border-white item">
            The Classic Collectible
            </li>
            <li
              className="hover:text-red-600 cursor-pointer border-r-2 border-white item">
            Royal Enfield X Alpinestar
            </li>
            <li
              className="hover:text-red-600 cursor-pointer border-r-2 border-white item">
            Scram 411 Collection
            </li>
            <li
              className="hover:text-red-600 cursor-pointer border-r-2 border-white item">
              Royal Enfield X TCX
            </li>
            <li
              className="hover:text-red-600 cursor-pointer item">
            MIY Riding Jacket
            </li>
          </ul>
        </div>
        <div>
        </div>
      </div>
        <div className='relative'>
        <img className='w-full' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/apparel/desktop/classic-scale-model.jpg" alt="" />
      </div> 
      <style>{`
      .item{
        margin-top: 25px;
        padding-left: 25px;
        padding-right: 15px;        
        font-size: 16px;
      }`}
      </style>
          </>
  );
}
