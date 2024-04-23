import { CarouselData } from "../CarouselData";
import bgimg from "../../../../assets/images/bgimg.png"
import lines1 from "../../../../assets/images/lines1.png"

function CarouselD () {
    return(
        <div className="overflow-hidden w-screen"
        style={{
            backgroundImage: `url(${bgimg})`,
        }}>


            <div className="flex flex-col md:flex md:flex-row h-screen justify-between">

                <div className="w-4/6 pl-12 flex flex-col justify-center items-center gap-10 p-6">
                    <div className="w-[246px] ">
                    <img src={lines1} alt="line" />
                    <h1 className="w-[246px] flex justify-center text-xl text-medium">{CarouselData[3].label}</h1>
                    </div>
                    <div className="flex flex-col gap-8 items-start p-4">
                    <h1 className="text-5xl text-semibold leading-normal"> {CarouselData[3].title}</h1>
                    <button className=" border border-slate-800 rounded-full p-2 px-10">Shop Now</button>
                    </div>
                </div>


                <div className="w-2/6 h-full flex relative">
                <div className="">
                    <img src={CarouselData[3].imgs[0].img} alt="img1" className="absolute object-center object-cover left-0 w-[756px] -bottom-16 z-10" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default CarouselD;