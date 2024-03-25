import Logo from "../../../../assets/images/logo.png";
export default function FooterPage() {
  return (
    <div className="flex justify-between h-1/6 pt-5 ">
      <div className="hidden lg:w-2/6 lg:block lg:bg-gradient-to-br from-orange-800 to-orange-900 lg:p-8">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full flex flex-col justify-between lg:w-4/6 ">
        <div className="grid grid-cols-2 gap-6 justify-items-center text-sm bg-[#FFF6F1] p-8 lg:grid-cols-4">
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Shop</h3>
            </li>
            <li>Dry Fruits</li>
            <li>Gifting</li>
            <li>Indian Biscotti</li>
            <li>Indian Bakery</li>
            <li>Sweets</li>
            <li>Savories</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Account</h3>
            </li>
            <li>Login</li>
            <li>Track Your Order</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">About Us</h3>
            </li>
            <li>Company</li>
            <li>Our Brands</li>
            <li>Global Footprint</li>
            <li>Contact Us</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Legal</h3>
            </li>
            <li>Terms & conditions</li>
            <li>Shipping Policy</li>
            <li>Return and Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex-col justify-center items-center bg-gradient-to-br from-orange-800 to-orange-900 text-white p-2 md:flex-row md:justify-between md:items-center">
          <div className="w-full lg:w-2/6">
            <p className="text-sm">Email:Sairamfoods.gmail.com</p>
          </div>
          <div className="w-full lg:w-3/6">
            <p className="text-sm">
              &copy; 2024 Copyright.Sai Ram Foods All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
