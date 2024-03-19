import  { useState } from 'react';
import { Rightdouble } from "../../../assets/svgs/Rightdouble";
import { Leftdouble } from "../../../assets/svgs/Leftdouble";
import { CarouselData } from "./CarouselData";

function CarouselMap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((currentIndex + 1) % CarouselData.length);
  };

  const prevPage = () => {
    setCurrentIndex(currentIndex ? currentIndex - 1 : CarouselData.length - 1);
  };

  return (
    <div>
    <div className="flex md:flex-row justify-center h-screen bg-[url('D:\sairamfoods2\sriramfoods\src\assets\images\bgimg.png')] ">
      
      <button onClick={prevPage} className=""> <Leftdouble /> </button>
      <div className="flex-col md:flex-row justify-between items-center w-screen ">
        <div className="flex flex-col gap-4 text-left w-4/6">
          <div className="w-[246px] ">
            <img src={CarouselData[currentIndex].line} />
            <h2 className="w-[246px] flex justify-center text-lg">
              {CarouselData[currentIndex].label}
            </h2>
          </div>
          <h1 className="text-5xl">
            {CarouselData[currentIndex].title}
          </h1>
          <button type="submit" className="border border-slate-900 w-[130px] text-lg rounded-full p-2">Shop Now</button>
        </div>
        <div className="flex flex-col items-center justify-center md:h-screen relative w-3/6 ">
          {CarouselData[currentIndex].imgs.map((image, index) => (
            <img
              key={image.id}
              src={image.img}
              className={`w-64 h-auto mb-4 absolute ${
                index === 0 ? 'right-0 bottom-0 md:w-[1056px]' : 
                index === 1 ? 'left-0 md:w-[230px]' : 
                'left-1/2 transform -translate-x-1/2'
              }`}
            />
          ))}
          
        </div>
      </div>
      <button onClick={nextPage} className=""> <Rightdouble /> </button>
      
    </div>

    <div className="flex mt-4 justify-center items-center">
            {CarouselData.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
                  currentIndex === index ? 'bg-slate-900' : 'w-2 h-2 bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
    </div>
  );
}

export default CarouselMap;
