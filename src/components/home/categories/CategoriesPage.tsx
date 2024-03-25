import { CategoriesData } from "./CategoriesData";
import lines1 from "../../../assets/images/lines1.png";
function CategoriesPage() {
  return (
    <div className="p-6 md:p-24 flex flex-col gap-8 ">
      <div className="flex flex-col justidy-center items-center">
        <img src={lines1} className="md:w-[150px]" />
        <h1 className="text-4xl">Categories</h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-y-8 ">
        {CategoriesData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[180px] h-[220px] sm:min-w-[230px] sm:max-w-[230px] sm:min-h-[350px]  gap-4 flex flex-col justify-center items-center "
              style={{
                backgroundColor: item.color,
                borderRadius: "130px 10px 10px 10px",
              }}
            >
              <div
                className="border-4 w-6/6 rounded-full"
                style={{ borderColor: item.bgcolor }}
              >
                <img
                  src={item.img}
                  className={`  w-20 h-20 sm:w-48 sm:h-48 object-cover rounded-full`}
                />
              </div>
              <h1 className="text-md font-light md:text-2xl">{item.title}</h1>
              <button
                type="submit"
                className="border border-[#4A2E1F] p-1 px-4 rounded-full text-sm"
              >
                View All
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
