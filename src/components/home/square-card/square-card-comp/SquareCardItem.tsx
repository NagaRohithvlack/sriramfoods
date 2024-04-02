import { SqCardPropType } from "../../../../utils/types/types";
export default function SquareCardItem({ item }: SqCardPropType) {

  return (
    <div className="border border-pink-500 relative rounded-lg">
      <img src={item.img} alt="" className="rounded-lg h-full" />
      <div className="absolute bottom-0 right-0 left-0 md:bottom-1 md:right-1 md:left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
        <p className="">{item.amount}</p>
        <button className="border border-white bg-transparent md:px-6 p-1 md:py-1 rounded-full"  >
          {item.btntext}
        </button>
      </div>
    </div>
  );
}
