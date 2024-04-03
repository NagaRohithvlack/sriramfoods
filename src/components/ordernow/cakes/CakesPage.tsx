import { CakeData } from "./CakeData";
import lines1 from "../../../assets/images/lines1.png";

function CakesPage() {
  return (
    <div className="flex flex-col p-12 md:p-12 gap-20">
      <div className="flex flex-col items-center">
        <img src={lines1} alt="designed-arrow" className="w-2/6" />
        <h1 className="text-4xl text-center font-semibold">
          TRUE CAKES & DESSERTS
        </h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 px-8 md:px-12 gap-8">
        {CakeData.map((item, index) => {
          return (
            <div
              className="border border-pink-500 relative rounded-lg object-cover"
              key={index}
            >
              <img src={item.img} alt="" className="rounded-lg " />
              <div className="absolute bottom-1 right-1 left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
                <p className="">{item.price}</p>
                <button className="border border-white bg-transparent px-6 py-1 rounded-full">
                  {item.btntext}
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CakesPage;
