import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NothingInCart from "./NothingInCart";

export default function CartAddedItems() {
  const [totalAmount, setTotalAmount] = useState(0);
  const addedCartItems = useSelector((store) => store.cart.items);
  console.log(addedCartItems);
  useEffect(() => {
    const amount = addedCartItems.reduce((total, item) => {
      return total + Number(item.itemOfferAmount);
    }, 0);
    setTotalAmount(amount);
  }, [addedCartItems]);
  if (addedCartItems.length === 0) return <NothingInCart/>;

  return (
    <div className="flex flex-col gap-8 w-full px-6">
      <div className="flex justify-between py-6 mx-6 border-b border-b-violet-500">
        <p className="text-sky-600 text-3xl ">Shopping Cart</p>
        <p className="self-end text-2xl">Price</p>
      </div>
      {addedCartItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-x-6 pb-6 w-full min-h-[180px] border-b border-b-black"
        >
          <div className="w-1/6  flex items-center justify-center">
            <img src={item.img} alt="addeditem" className="w-full max-h-full" />
          </div>
          <div className="flex flex-col gap-2 w-5/6  px-5">
            <div className="flex justify-between">
              <p className="text-violet-900 text-2xl">{item.itemTitle} </p>
              <p className="text-black text-2xl">
                &#8377; {item.itemOfferAmount}
              </p>
            </div>
            <div className="text-sm text-sky-600">
              <p>In Stock</p>
              <p>Eligible for Free-Shipping</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <p className="text-2xl">
          subtotal <span>{`(${addedCartItems.length} items) : `}</span>
          <span>&#8377; {totalAmount}</span>
        </p>
      </div>
    </div>
  );
}
