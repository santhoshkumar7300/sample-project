import { Link } from "react-router-dom";
import Styles from "../Styles/CartStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import checkIcon from "../images/check_circle.svg";
import tableImage from "../images/tableImage.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, cartlist, emptyCart, removeCart } from "../Api/ApiData";
import { setCart } from "../ReduxAction/Action";
import CartTableData from "./CartTableData";
import { toast } from "react-toastify";

export default function Cart() {
  let selector = useSelector((state) => state.cardDetails);
  let dispatch = useDispatch();
  const [list, setList] = useState([]);
  const deleteHandle = (data) => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    formdata.append("product_id", data.product_id);
    removeCart(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          let filterData = selector.filter(
            (e) => e.product_id !== data.product_id
          );
          dispatch(setCart(filterData));
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    cartlist(formdata)
      .then((res) => {
        dispatch(setCart(res.data.cartlist));
        setList(res.data.totalslist);
      })
      .catch((err) => console.log(err));
  }, []);

  const EmptyCartHandle = () => {
    let formdata = new FormData();
    formdata.append("unique_id", "1234567890");
    emptyCart(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          dispatch(setCart([]));
          toast(res.data.msg);
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
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
          <span className={Styles.spanStyle}>Cart</span>
        </span>
      </div>

      <div className={Styles.overallSecondContentDiv}>
        <div className={Styles.SecondContentDiv}>
          <div className={Styles.secondTitleDiv}>
            <h4 className={Styles.h4Style}>Shopping Cart</h4>
            <button onClick={EmptyCartHandle} className={Styles.emptyBtnStyle}>
              Empty Cart
            </button>
          </div>
          <div className={Styles.totalContentContainer}>
            <div className={Styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                    <th style={{ textAlign: "unset" }}>Product</th>
                    <th style={{ textAlign: "unset" }}>Price</th>
                    <th style={{ textAlign: "unset" }}>Qty</th>
                    <th style={{ textAlign: "unset" }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selector &&
                    selector.map((e, index) => (
                      <CartTableData e={e} deleteHandle={deleteHandle} />
                    ))}
                </tbody>
              </table>
            </div>

            <div className={Styles.overallSecondDiv}>
              <div className={Styles.resultSpanDiv}>
                <span>Cart Totals</span>
              </div>
              <div className={Styles.resultContainer}>
                <div className={Styles.resultDetailsDiv}>
                  {list.map((e, index) => (
                    <div>
                      {index === 1 ? (
                        <div className={Styles.resultDetailsDiv}>
                          <div>
                            <span>Shipping</span>
                            <p style={{ margin: "0" }}>
                              <img src={checkIcon} alt="check"></img>
                              <span>Free Shipping</span>
                            </p>
                          </div>
                          <hr></hr>
                        </div>
                      ) : null}
                      <span className={Styles.resultSpan}>
                        {e.title} <span>{e.value}</span>
                      </span>
                      <hr></hr>
                    </div>
                  ))}
                </div>
                <button className={Styles.resultBtn}>
                  Proceed to Checkout
                </button>
                <div className={Styles.linkDiv}>
                  <Link to="/">Continue To Shopping</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
