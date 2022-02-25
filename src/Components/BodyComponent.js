import { useState } from "react";
import Styles from "../Styles/BodyComponentStyle.module.css";
import cardImg from "../images/card.jpg";
import CardDesign from "./CardDesign";
import BodyOptionOne from "./BodyOptionOne";

export default function BodyComponent() {
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
  return (
    <div>
      <div style={{ padding: "50px 0" }}>
        <div className={Styles.overallContainer}>
          <div className={Styles.titleDiv}>
            <h2 className={Styles.titleDesign}>Popular products</h2>
          </div>
          <hr className={Styles.hrStyle}></hr>
          <div className={Styles.cardDiv}>
            <CardDesign cardData={cardData} />
          </div>
          <div className={Styles.btnDIv}>
            <button className={Styles.btnStyle}>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}
