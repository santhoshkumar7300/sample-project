import heart from "../images/heart.svg";
import Styles from "../Styles/CardDesignStyle.module.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function CardDesign({ e, CartCountHandle }) {
  const [count, setCount] = useState(parseInt(e.cart_qty));
  let navigate = useNavigate();

  const add_num_handle = () => {
    setCount(count + 1);
    console.log(count);
  };

  const minus_num_handle = () => {
    setCount(count - 1);
    console.log(count);
    if (count === 1) {
      setCount(1);
    }
  };

  const addCard = () => {
    let data = { ...e, cart_qty: count };
    CartCountHandle(data);
  };

  return (
    <div>
      <Card className={Styles.cardStyle}>
        <div className={Styles.HeartImgDiv}>
          <img src={heart} alt="heart" className={Styles.hoverHeart}></img>
        </div>

        <Card.Img
          style={{
            width: "240px",
            height: "200px",
            paddingTop: "15px",
            paddingLeft: "25px",
          }}
          src={e.img_path}
          onClick={() => {
            navigate(`/view/${e.product_id}`);
          }}
        />

        <Card.Body>
          <p style={{ height: "40px", overflow: "hidden" }}>
            <Card.Title style={{ fontSize: "17px" }}>{e && e.name}</Card.Title>
          </p>
          <Card.Title className={Styles.cardRateHover}>
            {e && e.price}
          </Card.Title>
          {e.status === "1" ? (
            <div className={Styles.hoverBottomDiv}>
              <div className={Styles.tableQtyDiv}>
                <button
                  onClick={minus_num_handle}
                  className={Styles.tableQtyBtnStyle}
                >
                  -
                </button>
                <span style={{ alignSelf: "center" }}>{count}</span>
                <button
                  onClick={add_num_handle}
                  className={Styles.tableQtyBtnStyle}
                >
                  +
                </button>
              </div>
              <div>
                <button className={Styles.addCartBtnStyle} onClick={addCard}>
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p>Out of stock</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
