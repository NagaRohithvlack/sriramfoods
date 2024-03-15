export default function SquareCardItem({ item }) {
  return (
    <div className="border border-pink-500 relative rounded-lg">
      <img src={item.img} alt="" className="rounded-lg h-full" />
      <div className="absolute bottom-1 right-1 left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
        <p className="">{item.amount}</p>
        <button className="border border-white bg-transparent px-6 py-1 rounded-full">
          {item.btntext}
        </button>
      </div>
    </div>
  );
}
