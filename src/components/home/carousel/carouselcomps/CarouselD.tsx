import { CarouselData } from "../CarouselData";
import bgimg from "../../../../assets/images/bgimg.png"
import lines1 from "../../../../assets/images/lines1.png"

function CarouselD () {
    return(
        <div className="overflow-hidden w-screen h-screen"
        style={{
            backgroundImage: `url(${bgimg})`,
        }}>


            <div className="imgs flex flex-col h-full md:flex md:flex-row md:justify-between">

                <div className="w-4/6 md:w-2/6 h-3/6 md:h-full flex relative order-first md:order-last">
                <div className="">
                    <img src={CarouselData[3].imgs[0].img} alt="img1" className="absolute left-14 md:left-0 w-[756px] bottom-0 z-10" />
                    </div>
                </div>

                <div className="para w-full md:w-3/6 sm:h-3/6 md:h-full md:pl-12 flex flex-col justify-center items-center gap-4 md:gap-10 p-6 ">
                    <div className="w-[246px] ">
                        <img src={lines1} alt="line" />
                        <h1 className="w-[246px] flex justify-center text-xl text-medium">{CarouselData[1].label}</h1>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 md:items-start md:p-4 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl ">{CarouselData[3].title}</h1>
                        <button className="border border-slate-800 rounded-full p-2 md:p-2 md:px-10 w-2/6 mx-auto md:mx-0 ">Shop Now</button>
                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default CarouselD;