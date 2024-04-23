import { CarouselData } from "../CarouselData";
import bgimg from "../../../../assets/images/bgimg.png";
import lines1 from "../../../../assets/images/lines1.png"

function CarouselA() {
    return (
        <div className="overflow-hidden w-screen"
        style={{
            backgroundImage: `url(${bgimg})`,
        }}>
            <div className="flex flex-col md:flex md:flex-row h-screen justify-between ">


                <div className="w-3/6 pl-12 flex flex-col justify-center items-center gap-10 p-6">
                    <div className="w-[246px] ">
                    <img src={lines1} alt="line" />
                    <h1 className="w-[246px] flex justify-center text-xl text-medium">{CarouselData[0].label}</h1>
                    </div>
                    <div className="flex flex-col gap-8 items-start p-4">
                    <h1 className="text-5xl text-semibold"> {CarouselData[0].title}</h1>
                    <button className=" border border-slate-800 rounded-full p-2 px-10">Shop Now</button>
                    </div>
                </div>


                <div className="w-3/6 h-full flex relative">
                    <div className="">
                    <img src={CarouselData[0].imgs[1].img} alt="img2" className="  w-2/6 absolute top-20 transform translate-y-3/4 translate-x-1/4 "/>
                    <img src={CarouselData[0].imgs[2].img} alt="img3" className=" w-2/6 absolute top-8 bottom-1 left-2/4 transform -translate-x-1/4 translate-y-3/4 w-2/6 "/>
                    <img src={CarouselData[0].imgs[0].img} alt="img1" className="absolute object-center object-cover left-8 w-[956px] bottom-8  z-10" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CarouselA;
