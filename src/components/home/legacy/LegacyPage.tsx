import lines1 from "../../../assets/images/lines1.png";
import { LegacyData } from "./LegacyData";

function LegacyPage () {
    return (
        <div className="flex flex-col justify-center items-center md:gap-12 h-screen md:flex md:flex-row bg-[#FFF6F1]">
            
            <div className="md:w-3/6  md:flex-row flex  relative  md:h-5/6 ">
                <div className=" w-full flex justify-center w">
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
                <div className=" absolute bottom-2 right-28 md:h-3/6 md:w-3/6 border-[16px] border-white" >
                    <img src={LegacyData[0].img} className="h-full w-full object-cover object-center" />
                </div>
                </div>

            </div>
           

            <div className="content md:w-3/6 md:flex md:flex-col md:gap-8">
                <div className=" md:w-[175px]"> 
                <img src={lines1} />
                </div>
                <h1 className="text-2xl font-medium">
                    The Legacy Of <span className="text-3xl">Sai Ram</span>
                </h1>
                <p className="font-light text-semibold">{LegacyData[0].content}</p>
                <button type="submit" className="border border-[#4A2E1F] rounded-full md:w-[160px] p-2 px-4">Read more</button>
                
            </div>
        </div>
    )
}

export default LegacyPage;