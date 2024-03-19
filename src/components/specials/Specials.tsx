import SpecialPageBanner from "../specials/specialspage/SpecialPagebanner";
import CategoriesPage from "../home/categories/CategoriesPage";
import OrderItems from "../home/order-items/OrderItems.tsx";
import SquareCard from "./square-card/SquareCard.tsx";


function Specials() {
  return (
    <div>
      <SpecialPageBanner />
      <CategoriesPage />
      <OrderItems />
      <SquareCard />
      
    </div>
  );
}

export default Specials;
