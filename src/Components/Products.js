import { Link } from "react-router-dom";
import Styles from "../Styles/ProductsStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import cardImg from "../images/card.jpg";
import { useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import { productlist } from "../Api/ApiData";

export default function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    productlist(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          setProductData(res.data.product_list);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const ProductList = [
    "All Products",
    "Rain Hose / Rain Pipe",
    "Flat Inline & Fittings /16 mm",
    "Flat Inline Drip Kit",
    "Round Inline & Fittings / 16 mm",
    "Round Plain & Fittings / 16 mm",
    "Drip Tape & Fittings / 16 mm",
    "Drip Tape & Fittings / 20 mm",
    "Lay Flat Pipe",
    "Filters & venturi",
    "Drip System Accessories",
    "Drum Seeder / Cono Weeder",
  ];

  const RainHoseList = [
    "Irrigation Kit",
    "Water Kit Testing",
    "Spray Irrigation Kit",
    "Rain Hose & Fittings / 40 mm",
    "Rain Hose & Fittings / 20 mm",
    "Rain Hose & Fittings / 32 mm",
    "Rain Hose & Fittings / 50 mm",
    "Rain Hose & Fittings / 63 mm",
  ];

  return (
    <div>
      <div>
        {/* First div */}
        <div className={Styles.overallFirstDiv}>
          <span>
            <Link className={Styles.linkStyle} to="/">
              Home
            </Link>
            <img
              className={Styles.firstDivImg}
              src={rightArrow}
              alt="rightarrow"
            ></img>
            <span className={Styles.spanStyle}>Products</span>
          </span>
        </div>
        {/* Second div */}
        <div className={Styles.overall}>
          {/* Side Menu Div */}
          <div className={Styles.sideMenuDiv}>
            <h4 className={Styles.h4Style}>Products</h4>
            <ul>
              {ProductList.map((e, index) => (
                <li>{e}</li>
              ))}
            </ul>
            <h4 className={Styles.h4Style}>Rain Hose</h4>
            <ul>
              {RainHoseList.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </div>

          {/* Right Side Content */}
          <div className={Styles.rightDropdownDiv}>
            <div className={Styles.rightHeader}>
              <div>
                <span>All Products</span>
              </div>
              <div>
                <label className={Styles.labelStyle} for="ProductSorting">
                  Sort by:
                </label>
                <select name="productSort" id="productSort">
                  <option value="">Default</option>
                  <option value="name(A-Z)">Name (A-Z)</option>
                  <option value="name(Z-A)">Name (Z-A)</option>
                  <option value="price(high-low)">Price (High-Low)</option>
                  <option value="price(low-high)">Price (Low-High)</option>
                  <option value="model(A-Z)">Model (A-Z)</option>
                  <option value="model(Z-A)">Model (Z-A)</option>
                </select>
                <label className={Styles.labelStyle} for="Show">
                  Show:
                </label>
                <select name="productSort" id="productSort">
                  <option value="">Select</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="60">60</option>
                  <option value="120">120</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                </select>
              </div>
            </div>
            <CardDesign cardData={productData} />
          </div>
        </div>
      </div>
    </div>
  );
}
