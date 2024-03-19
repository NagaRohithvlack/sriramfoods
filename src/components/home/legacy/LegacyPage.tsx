import lines1 from "../../../assets/images/lines1.png";
import { LegacyData } from "./LegacyData";

function LegacyPage () {
    return (
        <div className="flex flex-col justify-center items-center md:gap-12 md:h-screen md:w-screen md:flex md:flex-row bg-[#FFF6F1]">
            
            <div className="md:w-3/6 p-8 md:p-0  md:flex-row flex  relative  md:h-5/6 ">
                <div className=" md:w-full flex justify-center w">
                <div className=" border-[16px] border-white ">
                    <img src={LegacyData[0].img} className="h-full w-full "/>
                </div>
                <div className="">
                <h1 className=" flex flex-col text-center text-lg md:ml-12 ">
                    <span >O</span>
                    <span >U</span>
                    <span >R</span>
                    <span >S</span>
                    <span >T</span>
                    <span >O</span>
                    <span >R</span>
                    <span >Y</span>
                </h1>
                </div>
                <div className=" absolute bottom-8 right-8 md:bottom-2 md:right-28 h-3/6 w-3/6 border-[16px] border-white" >
                    <img src={LegacyData[0].img} className="md:h-full md:w-full object-cover object-center" />
                </div>
                </div>

            </div>
           

            <div className="content p-8 flex gap-8 flex-col  md:w-3/6  md:flex md:flex-col md:gap-8">
                <div className=" w-3/6 md:w-[175px]"> 
                <img src={lines1} />
                </div>
                <h1 className=" text-center md:text-left text-2xl font-medium">
                    The Legacy Of <span className="text-3xl">Sai Ram</span>
                </h1>
                <p className=" text-center md:text-left font-light text-semibold">{LegacyData[0].content}</p>
                <button type="submit" className="border border-[#4A2E1F] rounded-full flex justify-center w-3/6 p-2  md:w-[160px] md:p-2 md:px-4">Read more</button>
                
            </div>
        </div>
    )
}

export default LegacyPage;