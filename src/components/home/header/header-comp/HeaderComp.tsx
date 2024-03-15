import Logo from "../../../../assets/images/logo.png";
import Search from "../../../../assets/images/search.png";
import User from "../../../../assets/images/user.png";
import Cart from "../../../../assets/images/shopping-cart.png";
import { useNavigate } from "react-router-dom";
export default function HeaderComp() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-5 items-center">
      <div className="w-full max-h-[150px] ">
        <img src={Logo} alt="" className="h-[150px] " />
      </div>
      <ul className="flex w-full gap-4 ">
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
            navigate("shop");
          }}
        >
          Shop
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
      </ul>
      <ul className="flex w-full justify-center ">
        <div className="flex gap-10">
          <li>
            <img src={Search} alt="" className="w-5" />
          </li>
          <li>
            <img src={User} alt="" className="w-5" />
          </li>
          <li>
            <img src={Cart} alt="" className="w-5" />
          </li>
        </div>
      </ul>
    </div>
  );
}
