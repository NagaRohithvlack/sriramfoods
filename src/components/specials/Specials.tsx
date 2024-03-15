import SpecialPageBanner from "../specials/specialspage/SpecialPagebanner";
import CategoriesPage from "../home/categories/CategoriesPage";
import OrderItems from "../home/order-items/OrderItems.tsx";

function Specials() {
  return (
    <div>
      <SpecialPageBanner />
      <CategoriesPage />
      <OrderItems />
    </div>
  );
}

export default Specials;
