import SpecialPageBanner from "../specials/specialspage/SpecialPagebanner";
import CategoriesPage from "../home/categories/CategoriesPage";
import OrderItems from "../home/order-items/OrderItems.tsx";
import SquareCard from "./square-card/SquareCard.tsx";
import OrderNowPage from "../ordernow/OrderNowPage.tsx";


function Specials() {
  return (
    <div>
      <div className="pt-8 md:pt-14 lg:pt-24">
        <SpecialPageBanner />
      </div>
      <CategoriesPage />
      <OrderItems />
      <SquareCard />
      <OrderNowPage />
      
    </div>
  );
}

export default Specials;
