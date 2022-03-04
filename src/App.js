import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import CardDesign from "./Components/CardDesign";
import Products from "./Components/Products";
import Error from "./Components/ErrorNotFound";
import MyAccount from "./Components/MyAccount";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";
import FooterComponent from "./Components/FooterComponent";
import HomePage from "./Components/HomePage";
import RouterHome from "./HomeComponent/RouterHome";
import Check from "./check";
import View from "./Components/View";
import HeaderComponent from "./Components/HeaderComponent";
import SignUp from "./Components/SignUp";
import OTP_Verification from "./Components/OTP_Verification";
import Loader from "./Loader/Loader";
import Update from "./update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RouterHome />}>
          <Route index element={<HomePage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product" element={<Products />}>
            <Route path=":searchData/*" element={<Products />} />
          </Route>
          <Route path="/view/:id" element={<View />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp_verification" element={<OTP_Verification />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
