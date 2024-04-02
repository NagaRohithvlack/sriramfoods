import "./App.css";
import Home from "./components/home/Home";
import Specials from "./components/specials/Specials";
import AboutUsPage from "./components/Aboutus/AboutUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/home/header/Header.tsx";
import Footer from "./components/home/footer/Footer.tsx";
import GiftBox from "./components/home/giftbox/GiftBox.tsx";
import ContactUs from "./components/contactus/ContactUs.tsx";


function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Specials />} />
        <Route path={"/about"} element={<AboutUsPage />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/contactus"} element={<Specials />} />
        <Route path={"/gifts"} element={<GiftBox />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
