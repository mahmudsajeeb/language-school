import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
 

// import required modules
import { Navigation } from "swiper";
import Button from "../../components/Button/Button";
function Slider() {
  return (
    <div>
       <div  className="carousel h-[600px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/8423095/pexels-photo-8423095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    
    <div className="absolute   w-1/2 mx-auto transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 className="text-5xl text-center font-semibold mb-3 text-white">Class Now Forming!</h1>
        <p className="text-white text-2xl text-center">To have another language is to  a second soul.</p>
        <div className="text-center mt-4">
        <Button  label="Click Here"/>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/8617771/pexels-photo-8617771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="absolute   w-1/2 mx-auto transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 className="text-5xl text-center font-semibold mb-3 text-white">Study Language Having Fun!</h1>
        <p className="text-white text-2xl text-center">We Have International  reputation high <br /> teaching and success</p>
        <div className="text-center mt-4">
        <Button  label="Click Here"/>
        </div>
    </div>
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full bg-black bg-opacity-10    ">
    <img src="https://images.pexels.com/photos/8087857/pexels-photo-8087857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="absolute   w-1/2 mx-auto transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 className="text-5xl text-center font-semibold mb-3 text-white">We are Truested Institution! </h1>
        <p className="text-white text-2xl text-center">Every student matters,every moment counts</p>
        <div className="text-center mt-4">
        <Button  label="Click Here"/>
        </div>
    </div>
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
</div>
      
       
    </div>
  )
}

export default Slider