import lines1 from "../../../assets/images/lines1.png"
import { DryFruitsData } from "./DryFruitsData";

function DryFruitsPage() {

    return(
      <div className="main_head flex flex-col md:p-12 p-4 md:p-12 gap-20">
      <div className="flex flex-col items-center">
        <img src={lines1} alt="designed-arrow" className=" w-4/6 md:w-2/6" />
        <h1 className="text-4xl text-center font-semibold">Dry Fruits</h1>
      </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-12 px-8 md:px-12 gap-8">
        {DryFruitsData.map((item) => {
          return (
            <div className=" relative rounded-lg object-cover">
            <img src={item.img} alt="" className="rounded-lg md:w-full md:h-full" />
            <div className="absolute bottom-0 md:bottom-1 right-0 md:right-1 left-0 md:left-1 bg-black opacity-80  text-white flex justify-between items-center p-2 md:px-4 md:py-3 rounded-lg">
            <p className="">{item.price}</p>
            <button className="border border-white bg-transparent p-1 md:px-6 md:py-1 rounded-full">
            {item.btntext}
            </button>
            </div>
        </div>
          )
        })}
        </ul>
    </div>
    )
}

export default DryFruitsPage;