import { useSelector } from "react-redux";

export default function CartAddedItems() {
  const addedCartItems = useSelector((store) => store.cart.items);

  if (addedCartItems.length === 0) return null;

  return (
    <div className="flex gap-8">
      {addedCartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center mb-4 gap-1 max-w-[280px] shadow-md"
        >
          <div className=" h-5/6 ">
            <img src={item.img} alt="addeditem" className="w-full h-full" />
          </div>
          <div className="h-1/6">
            <p className="text-yellow-600">{item.itemTitle}</p>
            <p>{item.price}</p>
            <p>{}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
