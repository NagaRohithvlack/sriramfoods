import { AboutUsData } from "./AboutUsData";
import lines1 from "../../assets/images/lines1.png"

function LegacyPage () {
    return (
        <div className="flex flex-col justify-center items-center md:gap-12 md:h-screen md:w-screen md:flex md:flex-row bg-[#FFF6F1]">
            
            <div className="md:w-3/6 px-20 pt-20 md:p-16 md:px-0 md:pt-0 md:p-8 md:p-0 flex md:flex-row  relative md:h-5/6 ">
                <div className="h-[400px] md:h-full md:w-4/6 flex justify-center md:ml-16">
                <div className=" border-[16px] border-white ">
                    <img src={AboutUsData[0].img} className="w-full h-full md:h-full md:w-full "/>
                </div>
                <div className="">
                <h1 className=" flex flex-col text-center md:text-lg ml-4 md:ml-8 ">
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
                <div className=" absolute bottom-2 md:bottom-8 right-8 md:bottom-2 md:right-28 md:h-3/6 md:w-3/6 border-[16px] border-white" >
                    <img src={AboutUsData[0].img2} className="w-[220px] h-[150px] md:h-full md:w-full object-cover object-center" />
                </div>
                </div>

            </div>
           

            <div className="content p-8 flex gap-8 flex-col md:w-3/6  md:flex md:flex-col md:gap-8">
                <div className=" w-3/6 md:w-[175px] mx-auto md:mx-0"> 
                <img src={lines1} className=""/>
                </div>
                <h1 className=" text-center md:text-left text-2xl font-medium">
                    The Legacy Of <span className="text-3xl">Sai Ram</span>
                </h1>
                <p className=" text-center md:text-left text font-normal md:pr-14">{AboutUsData[0].content}</p>
                <button type="submit" className="border border-[#4A2E1F] rounded-full flex justify-center w-3/6 p-2 mx-auto md:mx-0 md:w-[160px] md:p-2 md:px-4">Read more</button>
                
            </div>
        </div>
    )
}

export default LegacyPage;