import { CategoriesData } from "./CategoriesData";
import lines1 from "../../../assets/images/lines1.png"

function CategoriesPage () {
    return (
        <div className=" md:p-24 flex flex-col gap-8">

           <div className="flex flex-col justidy-center items-center">
            <img src={lines1} className="md:w-[150px]"/>
            <h1 className="text-4xl">Categories</h1>

           </div>

           <div className="flex flex-col justify-center md:flex-row justify-center gap-4 h-[382px]">
            {CategoriesData.map((item) => {
                return (
                    <div key={item.id} className="md:w-1/6 md:gap-4 flex flex-col justify-center items-center" style={{ backgroundColor: item.color, borderRadius: '130px 10px 10px 10px' }} > 
                        <div className={`border-4 rounded-full overflow-hidden`} style={{ borderColor: item.bgcolor }}>
                            <img src={item.img} className={`object-cover object-relative md:w-48 md:h-48`} />
                        </div>
                    <h1 className="text-3xl font-light">{item.title}</h1>
                    <button type="submit" className="border border-[#4A2E1F] p-1 px-4 rounded-full">View All</button>
                </div>
                )
            })}
  
           </div>

        </div>
    )
}

export default CategoriesPage;