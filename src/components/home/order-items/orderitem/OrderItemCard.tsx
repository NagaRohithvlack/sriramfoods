import ArrowDownHead from "./ArrowHeadSvg";
import { ArrowUpHead } from "./ArrowHeadSvg";
export default function OrderItemCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row ">
      <div className="w-full   ">
        <img src={item.img} alt="" />
      </div>
      <div className="w-full flex flex-col justify-center items-center  p-5 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 ">
              <h1 className="mb-2">{item.itemTitle}</h1>
              <p className="pl-1">
                {item.itemOfferAmount}
                <span className="pl-8 line-through">
                  {item.itemOriginalAmount}
                </span>
              </p>
              <p className="text-sm">{item.itemMrpDescription}</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full text-white flex flex-col  items-center justify-center bg-gradient-to-br from-[#C17E2A] to-[#4A2E1F] ">
                <p className="text-sm ">Save</p>
                <p className="text-2xl ">{item.offer}</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-sm">{item.starReviews}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base">{item.size}</p>
            <div className="flex gap-2">
              <button className="text-sm px-2 py-1 bg-[#C17E2A] rounded-full text-white">
                {item.grams1}
              </button>
              <button className="text-sm px-2 py-1 bg-[#C17E2A] rounded-full text-white">
                {item.grams2}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <p>{item.quantityDescription}</p>
            <div className="flex gap-3 justify-start  items-center bg-[#FAFAFA] w-fit rounded-sm">
              <span className="p-3">
                <ArrowUpHead />
              </span>
              <span>{item.quantity}</span>
              <span className="p-3">
                <ArrowDownHead />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4  w-fit">
              <button className="border border-[#C17E2A] px-5 py-1 rounded-full line-clamp-1">
                ADD TO CART
              </button>
              <button className="px-5 py-1 rounded-full bg-[#C17E2A] text-white line-clamp-1">
                BUY NOW
              </button>
            </div>
            <p>{item.usageNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
