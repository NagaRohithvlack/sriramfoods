import { CategoriesData } from "./CategoriesData";
import lines1 from "../../../assets/images/lines1.png"

function CategoriesPage () {
    return (
        <div className="p-10 md:p-24 flex flex-col justify-center items-center gap-8">
  <div className="flex flex-col justify-center items-center">
    <img src={lines1} className="w-[250px] md:w-[300px]" alt="Lines" />
    <h1 className="text-4xl">Categories</h1>
  </div>

  <div className="grid grid-cols-2 md:grid md:grid-cols-4 justify-center gap-8 md:gap-4 w-full max-w-[900px]">
    {CategoriesData.map((item) => (
      <div key={item.id} className="w-full p-8 md:p-4 flex flex-col justify-center items-center gap-4" style={{ backgroundColor: item.color, borderRadius: '130px 10px 10px 10px' }} > 
        <div className={`border-4 rounded-full overflow-hidden`} style={{ borderColor: item.bgcolor }}>
          <img src={item.img} className={`object-cover object-relative w-20 h-20 md:w-36 md:h-36`} alt={item.title} />
        </div>
        <h1 className="text-3xl font-light">{item.title}</h1>
        <button type="submit" className="border border-[#4A2E1F] p-1 px-4 rounded-full">View All</button>
      </div>
    ))}
  </div>
</div>

    )
}

export default CategoriesPage;