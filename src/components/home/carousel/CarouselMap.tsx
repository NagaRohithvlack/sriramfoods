import { CarouselData } from "./CarouselData";
import React, { useState } from 'react';
import bgimg from '../../assets/images/bgimg.png';

function CarouselMap () {

    const[currentIndex, setCurrentIndex] = useState(0);


    const nextPage = () => {
       setCurrentIndex((currentIndex + 1) % CarouselData.length)
    }

    const prevPage = () => {
      setCurrentIndex(!currentIndex ? CarouselData.length - 1 : currentIndex - 1)
      
    }

    return(
        <div className="flex justify-center h-screen w-full bg-[url('D:\Foodp\foodreact\src\assets\images\bgimg.png')]">
             <button onClick={prevPage} className="">prev</button>
             <div className="flex justify-between items-center w-screen">
              <div className="flex flex-col gap-4 text-left w-4/6">

              <div className="w-[246px] ">
              <img src={CarouselData[currentIndex].line}  />
              <h2 className="w-[246px] flex justify-center text-lg">
                {CarouselData[currentIndex].label}
              </h2>
              </div>

              <h1 className="text-5xl">
                {CarouselData[currentIndex].title}
              </h1>
              <button type="submit" className="border border-slate-900 w-[130px] text-lg rounded-full p-2">Shop Now</button>
              </div>
              <div className="flex flex-col items-center justify-center h-screen relative w-3/6 ">
                {CarouselData[currentIndex].imgs.map((image) => (
                  <img key={image.id} src={image.img} className="w-64 h-auto mb-4"/>
                ))}
              </div>
             </div>
             <button onClick={nextPage} className="">Next</button>
        </div>
    )
}
export default CarouselMap;
