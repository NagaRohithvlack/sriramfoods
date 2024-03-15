import Logo from "../../../../assets/images/logo.png";
export default function FooterPage() {
  return (
    <div className="flex justify-between h-1/6">
      <div className="w-2/6 bg-gradient-to-br from-orange-800 to-orange-900 p-8">
        <img src={Logo} alt="" />
      </div>
      <div className="w-4/6 flex flex-col justify-between">
        <div className="flex justify-around bg-[#FFF6F1] h-full items-start pt-8">
          <ul className="text-sm font-md flex flex-col gap-1 h-5/6">
            <li>
              <h3 className="text-md font-semibold pb-2">Shop</h3>
            </li>
            <li>Dry Fruits</li>
            <li>Gifting</li>
            <li>Indian Biscotti</li>
            <li>Indian Bakery</li>
            <li>Sweets</li>
            <li>Savories</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 h-5/6">
            <li>
              <h3 className="text-md font-semibold pb-2">Account</h3>
            </li>
            <li>Login</li>
            <li>Track Your Order</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 h-5/6">
            <li>
              <h3 className="text-md font-semibold pb-2">About Us</h3>
            </li>
            <li>Company</li>
            <li>Our Brands</li>
            <li>Global Footprint</li>
            <li>Contact Us</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 h-5/6">
            <li>
              <h3 className="text-md font-semibold pb-2">Legal</h3>
            </li>
            <li>Terms & conditions</li>
            <li>Shipping Policy</li>
            <li>Return and Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex justify-center bg-gradient-to-br from-orange-800 to-orange-900 text-white py-2">
          <div className="w-2/6">
            <p className="text-sm">Email:Sairamfoods.gmail.com</p>
          </div>
          <div className="w-3/6">
            <p className="text-sm">
              &copy; 2024 Copyright.Sai Ram Foods All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
