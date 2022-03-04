import { addtocart, cartlist } from "../Api/ApiData";
import { setCart, setCartCount } from "../ReduxAction/Action";
import CardDesign from "../Components/CardDesign";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../Styles/CardDesignStyle.module.css";
import { useState } from "react";

export default function CardData({ cardData }) {
  const myStyle = {
    width: "100%",
    float: "left",
  };
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.cardDetails);

  const CartCountHandle = (data) => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    formdata.append("product_id", data.product_id);
    formdata.append("quantity", data.cart_qty);
    addtocart(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          let temData = [...temp, data];
          dispatch(setCart(temData));
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={myStyle}>
      {cardData.map((e, index) => {
        return <CardDesign e={e} CartCountHandle={CartCountHandle} />;
      })}
    </div>
  );
}
