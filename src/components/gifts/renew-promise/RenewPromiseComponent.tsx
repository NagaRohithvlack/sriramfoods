import GiftBox from "../../../assets/images/big-gift-box.png";
import GiftBoxBackground from "../../../assets/images/gift-box-background.png";
export default function RenewPromiseComponent() {
  return (
    <div className="w-full flex flex-col gap-14 py-8  justify-between items-center bg-[#FFD285] md:flex-row md:pl-14 pr-4  ">
      <div className=" flex flex-col gap-4 ">
        <h1 className="text-4xl font-semibold">Renew the Promises of Love</h1>
        <h5>with Heartwarming Anniversary Gifts</h5>
        <button className="px-5 py-1 bg-[#C17E2A] text-black rounded-md w-[150px]">
          Plan Surprises
        </button>
      </div>
      <div className="  relative mb-14 md:mb-0 ">
        <img src={GiftBox} className="h-[100px] absolute -left-10 -bottom-5" />
        <img src={GiftBoxBackground} alt="" className="h-[150px] " />
      </div>
    </div>
  );
}
