import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardImg from "../images/card.jpg";
import heart from "../images/heart.svg";
import { setCart } from "../ReduxAction/Action";
import Styles from "../Styles/CardDesignStyle.module.css";
export default function CardDesign({ cardData }) {
  const [count, setCount] = useState(1);
  let dispatch = useDispatch();

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

  return (
    <div>
      <div className={Styles.topContainer}>
        {cardData.map((e, index) => (
          <Card className={Styles.cardStyle}>
            <div className={Styles.HeartImgDiv}>
              <img src={heart} alt="heart" className={Styles.hoverHeart}></img>
            </div>
            <Link to="/view">
              <Card.Img variant="top" src={e.cardimg} />
            </Link>
            <Card.Body>
              <Card.Title>{e.cardTitle}</Card.Title>
              <Card.Title className={Styles.cardRateHover}>
                {e.cardRate}
              </Card.Title>
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
                  <button
                    className={Styles.addCartBtnStyle}
                    onClick={() => dispatch(setCart(e))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
