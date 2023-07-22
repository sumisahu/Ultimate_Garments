import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Administrator/Dashboard";
import AdminLogin from "./Components/Administrator/AdminLogin";
import BannerImages from "./Components/Administrator/BannerImages";
/* import DisplayBannerImages from "./Components/Administrator/DisplayBannerImages";
import ProductPicture from "./Components/Administrator/ProductPicture"; */
import Home from "./Components/UserInterface/Home";
import Address from "./Components/UserInterface/Address";
import MyCart from "./Components/UserInterface/MyCart";
import Payment from "./Components/UserInterface/Payment";
import ProductDetailFilling from "./Components/UserInterface/UserComponents/ProductDetailFilling";
import ProductList from "./Components/UserInterface/ProductList";
import ImageSlider from "./Components/UserInterface/UserComponents/ImageSlider";
import SetProductDetails from "./Components/UserInterface/SetProductDetails";
import ProductDetails from "./Components/UserInterface/UserComponents/ProductDetails";
import RatingLogo from "./Components/UserInterface/UserComponents/RatingLogo";
import SizeChart from "./Components/UserInterface/UserComponents/SizeChart";
import PaymentNavBar from "./Components/UserInterface/UserComponents/PaymentNavBar";
import EmptyCart from "./Components/UserInterface/UserComponents/EmptyCart";
import MyAccount from "./Components/UserInterface/MyAccount";
import TrackOrder from "./Components/UserInterface/TrackOrder";
import TermAndCondition from "./Components/UserInterface/TermAndCondition";
import AboutUs from "./Components/UserInterface/AboutUs";
import PrivacyPolicy from "./Components/UserInterface/PrivacyPolicy";
import ShippingPolicy from "./Components/UserInterface/ShippingPolicy";
import Faq from "./Components/UserInterface/Faq";
import ReturnRefundAndCancellationPolicy from "./Components/UserInterface/ReturnRefundAndCancellationPolicy";


function App(props) {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard/*" />
          <Route element={<AdminLogin />} path="/adminlogin" />
          <Route element={<Home />} path="/" />
          <Route element={<ImageSlider />} path="/imageslider" />
          <Route element={<SetProductDetails />} path="/setproductdetails" />
          <Route element={<ProductDetails />} path="/productdetails" />
          <Route element={<EmptyCart />} path="/emptycart" />
          <Route element={<ShippingPolicy />} path="/shippingpolicy" />
          <Route element={<MyCart />} path="/mycart" />
          <Route element={<Faq />} path="/faq" />
          <Route element={<ReturnRefundAndCancellationPolicy />} path="/returnrefundandcancellationpolicy" />
          <Route element={<PrivacyPolicy />} path="/privacypolicy" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<TermAndCondition />} path="/termandcondition" />
          <Route element={<TrackOrder />} path="/trackorder" />
          <Route element={<MyAccount />} path="/myaccount" />
          <Route element={<Payment />} path="/payment" />
          <Route element={<Address />} path="/address" /> 
          <Route element={<RatingLogo />} path="/ratinglogo" />
          <Route element={<SizeChart />} path="/sizechart" />
          <Route element={<PaymentNavBar />} path="/paymentnavbar" />
          <Route element={<BannerImages />} path="/bannerimages" />
          <Route element={<ProductList />} path="/productlist/:id" />
          <Route element={<ProductDetailFilling />} path="/productdetailfilling"/>
          
         {/*  <Route element={<DisplayBannerImages />} path="/displaybannerimages" />
          <Route element={<ProductPicture />} path="/productpicture" /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
