import Styles from "../Styles/ViewStyle.module.css";
import cardViewImg from "../images/card.jpg";
import heart from "../images/heart.svg";
import shareFacebook from "../images/Sharefacebook.svg";
import shareWhatsapp from "../images/Sharewhatsapp.jpeg";
import shareTwitter from "../images/Sharetwitter.svg";
import shareYoutube from "../images/Shareyoutube.svg";
import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import rightArrow from "../images/rightArrow.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { addtowishlist, productlist, viewProduct } from "../Api/ApiData";
import { toast } from "react-toastify";
export default function View() {
  const [bottomData, setBottomData] = useState();
  const [productView, setProductView] = useState(null);
  const [productViewCount, setProductViewCount] = useState(0);
  const param = useParams();
  console.log(param);

  useEffect(() => {
    let formData = new FormData();
    formData.append("product_id", param.id);
    formData.append("unique_id", "1234567890");
    viewProduct(formData)
      .then((res) => {
        if (res.data.status === 1) {
          setProductView(res.data.product_details);
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(productView);

  const addCount = () => {
    setProductViewCount(productViewCount + 1);
  };

  const minusCount = () => {
    setProductViewCount(productViewCount - 1);
    if (productViewCount === 1) {
      setProductViewCount(1);
    }
  };

  const WishListHandle = () => {
    let formdata = new FormData();
    formdata.append("token", "1234567890");
    formdata.append("product_id", param.id);
    addtowishlist(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          toast(res.data.msg);
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

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

  if (bottomData === "home") {
    console.log("welcome");
  }

  return (
    <div>
      <div>
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
            <Link className={Styles.linkStyle} to="/product">
              Products
            </Link>
            <img
              className={Styles.firstDivImg}
              src={rightArrow}
              alt="rightarrow"
            ></img>
            <span className={Styles.spanStyle}>
              FLAT INLINE / 200-16-4-40 / 1000 Meter{" "}
            </span>
          </span>
        </div>
      </div>
      <div className={Styles.overallViewDiv}>
        {/* Left Side */}

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

        {/* Right Side */}
        {productView !== null ? (
          <>
            <div className={Styles.imgDiv}>
              <div>
                <img
                  className={Styles.img}
                  src={productView.img_path}
                  alt="card img"
                ></img>
              </div>
              <div className={Styles.rightContentDiv}>
                <span className={Styles.topSpan}>{productView.name}</span>
                <hr className={Styles.hrStyle}></hr>
                <div className={Styles.rightContentSecondDiv}>
                  <h5>
                    <span>
                      <span style={{ fontWeight: "normal" }}>
                        Product Code :
                      </span>{" "}
                      <span>{productView.hsn_code}</span>
                    </span>
                  </h5>
                  <h5 className={Styles.h5Style}>
                    <span>
                      <span style={{ fontWeight: "normal" }}>
                        Availability :
                      </span>{" "}
                      <span
                        style={{
                          color: productView.status === 1 ? "#000" : "red",
                        }}
                      >
                        {productView.status === 1 ? "In Stock" : "Out of Stock"}
                      </span>
                    </span>
                  </h5>
                </div>
                <hr></hr>
                <h2 className={Styles.h2Style}>{productView.price}</h2>
                <hr></hr>
                <div className={Styles.rightOverallSecondDiv}>
                  <span className={Styles.qtySpan}>Qty :</span>
                  <div className={Styles.tableQtyDiv}>
                    <button
                      onClick={minusCount}
                      className={Styles.tableQtyBtnStyle}
                    >
                      -
                    </button>
                    <span style={{ alignSelf: "center" }}>
                      {productViewCount}
                    </span>
                    <button
                      onClick={addCount}
                      className={Styles.tableQtyBtnStyle}
                    >
                      +
                    </button>
                  </div>

                  <button className={Styles.updateBtn}>Update Cart</button>
                  <span className={Styles.heartDiv} onClick={WishListHandle}>
                    <img
                      className={Styles.heartImg}
                      src={heart}
                      alt="heart"
                    ></img>
                    <span style={{ paddingLeft: "6px" }}>Add to Wishlist</span>
                  </span>
                </div>

                <div>
                  <p>{productView.short_description}</p>
                </div>

                <div>
                  <span style={{ float: "left" }}>Share with :</span>
                  <img
                    className={Styles.shareIcons}
                    src={shareWhatsapp}
                    alt="whatsapp"
                  ></img>
                  <img
                    className={Styles.shareIcons}
                    src={shareYoutube}
                    alt="youtube"
                  ></img>
                  <img
                    className={Styles.shareIcons}
                    src={shareFacebook}
                    alt="facebook"
                  ></img>
                  <img
                    className={Styles.shareIcons}
                    src={shareTwitter}
                    alt="twitter"
                  ></img>
                </div>
              </div>
            </div>
            <div className={Styles.rightBottomDiv}>
              <Tabs
                defaultActiveKey="home"
                transition={true}
                id="noanim-tab-example"
                className="mb-3"
                onSelect={(e) => setBottomData(e)}
              >
                <Tab eventKey="home" title="Description">
                  <p className={Styles.rightBottomPara}>
                    {productView.short_description}
                  </p>
                </Tab>
                <Tab eventKey="profile" title="Specification">
                  <table>
                    <thead>
                      {productView.product_attributes.map((e) => (
                        <tr>
                          <th>{e.title}</th>
                          <th></th>
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {productView.product_attributes.map((e) => (
                        <tr>
                          <td>{e.content}</td>
                          <td>200 micorn</td>
                        </tr>
                      ))}
                    </tbody>

                    <thead>
                      <tr>
                        <th>General</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Expected Life</td>
                        <td>2 to 3 years</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
              </Tabs>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
