import "./App.css";
import Home from "./components/home/Home";
import Specials from "./components/specials/Specials";
import AboutUsPage from "./components/Aboutus/AboutUsPage";
import ContactUsPage from "./components/contactus/ContactUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/home/header/Header.tsx";
import Footer from "./components/home/footer/Footer.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import RenewPromise from "./components/gifts/RenewPromise.tsx";
import Cart from "./components/home/header/header-comp/cart/Cart.tsx";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/contactus"} element={<ContactUsPage />} />
          <Route path={"/shop"} element={<Specials />} />
          <Route path={"/contactus"} element={<Specials />} />
          <Route path={"/gifts"} element={<RenewPromise />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
