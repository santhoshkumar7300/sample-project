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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RouterHome />}>
          <Route index element={<HomePage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/view" element={<View />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
