import { useState } from "react";
import Styles from "../Styles/BodyComponentStyle.module.css";
import cardImg from "../images/card.jpg";
import CardDesign from "./CardDesign";
import BodyOptionOne from "./BodyOptionOne";
import CardData from "../Components/CardData";
import { useDispatch } from "react-redux";
import { setCart } from "../ReduxAction/Action";
import { addtocart } from "../Api/ApiData";

export default function BodyComponent() {
  let dispatch = useDispatch();
  const [cardData, setCardData] = useState([
    {
      cardimg: cardImg,
      cardTitle: "Rain Hose -350 / 40 mm / 100 Meter",
      cardRate: "₹1500.00",
    },
    {
      cardimg: cardImg,
      cardTitle: "Rain Hose -350 / 40 mm / 100 Meter",
      cardRate: "₹1500.00",
    },
    {
      cardimg: cardImg,
      cardTitle: "Rain Hose -350 / 40 mm / 100 Meter",
      cardRate: "₹1500.00",
    },
    {
      cardimg: cardImg,
      cardTitle: "Rain Hose -350 / 40 mm / 100 Meter",
      cardRate: "₹1500.00",
    },
  ]);

  const CartCountHandle = (data) => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    formdata.append("product_id", data.product_id);
    formdata.append("quantity", data.cart_qty);
    addtocart(formdata)
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          dispatch(setCart(data));
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div style={{ padding: "50px 0" }}>
        <div className={Styles.overallContainer}>
          <div className={Styles.titleDiv}>
            <h2 className={Styles.titleDesign}>Popular products</h2>
          </div>
          <hr className={Styles.hrStyle}></hr>
          <div className={Styles.cardDiv}>
            {/* <CardData cardData={cardData} /> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {cardData.map((e) => {
                return <CardDesign e={e} CartCountHandle={CartCountHandle} />;
              })}
            </div>
          </div>
          <div className={Styles.btnDIv}>
            <button className={Styles.btnStyle}>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}
