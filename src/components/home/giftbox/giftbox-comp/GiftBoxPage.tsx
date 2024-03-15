import GiftBox from "../../../../assets/images/big-gift-box.png";
import GiftBoxBackground from "../../../../assets/images/gift-box-background.png";
export default function GiftBoxPage() {
  return (
    <div className="flex flex-col gap-24 md:flex-row md:gap-4 items-center justify-center bg-[#FFD285] py-14 md:px-24 px-5">
      <div className="flex items-center relative justify-center w-full md:w-3/6">
        <img
          src={GiftBox}
          alt=""
          className="border border-pink-500 absolute left-[30px] -bottom-10"
        />
        <img
          src={GiftBoxBackground}
          alt=""
          className="border border-pink-500 "
        />
      </div>

      <div className="flex flex-col gap-y-6 w-full md:w-3/6 lg:w-4/6">
        <h1 className="text-3xl">
          The Taste of Authentic India, perfected over generations SaiRam,
          sweetening celebrations since 1992.
        </h1>
        <p className="text-base">
          We work from the heart, with passion to craft authentic sweets and
          savories with an inimitable character that’s truly the taste of
          Authentic India. From lavish kaju sweets, to pure ghee delicacies and
          freshly made savories, every morsel is imagined and created with a
          single intent, to deliver joy.
        </p>
      </div>
    </div>
  );
}
