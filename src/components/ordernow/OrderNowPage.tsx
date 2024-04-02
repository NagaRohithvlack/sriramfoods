import CakesPage from "./cakes/CakesPage";
import DryFruitsPage from "./dryfruits/DryFruitsPage";
import NamkeenPage from "./namkeen/NamkeenPage";
import SweetPage from "./sweets/SweetPage";


function OrderNowPage () {
    return (
        <>
        <NamkeenPage/>
        <SweetPage />
        <CakesPage />
        <DryFruitsPage />
        </>
    )
}

export default OrderNowPage;