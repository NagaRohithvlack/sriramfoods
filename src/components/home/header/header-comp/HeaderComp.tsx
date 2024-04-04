import Logo from "../../../../assets/images/logo.png";
import Search from "../../../../assets/images/search.png";
import User from "../../../../assets/images/user.png";
import Cart from "../../../../assets/images/shopping-cart.png";
import menu from "../../../../assets/images/menu.png";
import close from "../../../../assets/images/close.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function HeaderComp() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const navigate = useNavigate();
  const orderItems = useSelector((store) => {
   
    return store.cart.items;
  });
  function handleOpenSideBar() {
    setIsOpenSideBar(!isOpenSideBar);
  }
  function handleCloseSideBar() {
    setIsOpenSideBar(!isOpenSideBar);
  }
  return (
    <div className="relative">
      <div className="flex py-2 px-4 shadow-md bg-slate-100 justify-between items-center lg:hidden">
        <div>
          <p className="pr-20 py-1 pl-2 bg-black rounded-lg text-2xl font-semibold text-yellow-500">
            Sai Ram Foods
          </p>
        </div>
        <div>
          <img src={menu} alt="" className="w-6" onClick={handleOpenSideBar} />
        </div>
      </div>
      <div
        className={`w-4/6 sm:w-2/6 lg:hidden absolute right-0 top-0 h-screen mt-14 bg-slate-100 z-10 ${
          isOpenSideBar ? "flex " : "hidden"
        }`}
      >
        <div className={`w-full flex flex-col gap-6 `}>
          <div className="p-5">
            <img
              src={close}
              alt=""
              className="w-6"
              onClick={handleCloseSideBar}
            />
          </div>
          <div className="flex justify-center items-center w-full  ">
            <ul className="flex flex-col w-full gap-2 ">
              <li className="hover:bg-white p-2 rounded-lg">Home</li>
              <li className="hover:bg-white p-2">Shop</li>
              <li className="hover:bg-white p-2">Gifts</li>
              <li className="hover:bg-white p-2">About Us</li>
              <li className="hover:bg-white p-2">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" hidden  lg:flex lg:justify-around lg:items-center px-5 ">
        <div className=" max-h-[120px] w-1/6 ">
          <img src={Logo} alt="" className="max-h-[120px] " />
        </div>
        <ul className="flex  justify-end gap-6 w-3/6 ">
          <li
            className={`hover:cursor-pointer`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>

          <li
            className={`hover:cursor-pointer`}
            onClick={() => {
              navigate("gifts");
            }}
          >
            Gifts
          </li>
          <li
            className={`hover:cursor-pointer`}
            onClick={() => {
              navigate("about");
            }}
          >
            About Us
          </li>
          <li
            className={`hover:cursor-pointer`}
            onClick={() => {
              navigate("contactus");
            }}
          >
            Contact Us
          </li>
          <li
            className={`hover:cursor-pointer`}
            onClick={() => {
              navigate("shop");
            }}
          >
            OrderNow
          </li>
        </ul>
        <ul className="flex  justify-center w-2/6 ">
          <div className="flex gap-8">
            <li>
              <img src={Search} alt="" className="w-5" />
            </li>
            <li>
              <img src={User} alt="" className="w-5" />
            </li>
            <li className="flex relative">
              <img
                src={Cart}
                alt=""
                className="w-5"
                onClick={() => {
                  navigate("cart");
                }}
              />
              <span className="absolute -right-4  ">{orderItems.length}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
