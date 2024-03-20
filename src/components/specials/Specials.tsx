import SpecialPageBanner from "../specials/specialspage/SpecialPagebanner";
import CategoriesPage from "../home/categories/CategoriesPage";
import OrderItems from "../home/order-items/OrderItems.tsx";

function Specials() {
  return (
    <div>
      <div className="pt-8 md:pt-14 lg:pt-24">
        <SpecialPageBanner />
      </div>
      <CategoriesPage />
      <OrderItems />
    </div>
  );
}

export default Specials;
