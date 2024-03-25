import curelyDesignArrow from "../../../../assets/images/curely-design.png";
import { HomeSquareCardData } from "./SquareCardData";
import SquareCardItem from "./SquareCardItem";
import { Leftdouble } from "../../../../assets/svgs/Leftdouble";
import { Rightdouble } from "../../../../assets/svgs/Rightdouble";
import { useState } from "react";





export default function SquareCard() {
  const[currentIndex, setCurrentIndex] = useState(0);

  const nextPage= () => {
      setCurrentIndex((currentIndex + 1) % (HomeSquareCardData.length - 3)) 

  }

  const prevpage = () => {
    setCurrentIndex((currentIndex - 1 + (HomeSquareCardData.length - 3)) % (HomeSquareCardData.length - 3))
  }

  const visibleItems = HomeSquareCardData.slice(currentIndex, currentIndex + 4);

  return (
    <div className="flex flex-col gap-20 bg-slate-200 ">
      
      <div className="flex flex-col items-center">
        <img src={curelyDesignArrow} alt="designed-arrow" className="w-2/6" />
        <h1 className="text-2xl">New Arrivals</h1>
      </div>
      <div className="flex">
      <button onClick={prevpage}> <Leftdouble /> </button>
      <ul className="flex w-full overflow-hidden gap-6">
        {visibleItems.map((item, index) => {
          return <SquareCardItem item={item} key={index} />;
        })}
      </ul>
      <button onClick={nextPage}> <Rightdouble /> </button>
      </div>
    </div>
  );
}
