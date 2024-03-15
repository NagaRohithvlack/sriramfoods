import borderimg from "../../../assets/images/borderimg.png"


function BorderLine() {
    return (
        <div className="flex">
        <div className="flex md:w-[65px] ">
             <img src={borderimg} alt="" className="w-full rotate-90  "  />
        </div>
        
        </div>
    )
}

export default BorderLine;