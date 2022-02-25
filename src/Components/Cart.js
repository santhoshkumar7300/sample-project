import { Link } from "react-router-dom";
import Styles from "../Styles/CartStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import CloseIcon from "../images/close_icon.svg";
import checkIcon from "../images/check_circle.svg";
import tableImage from "../images/tableImage.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const [count, setCount] = useState(1);

  let selector = useSelector((state) => state.cardDetails);
  console.log(selector);

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
            <button className={Styles.emptyBtnStyle}>Empty Cart</button>
          </div>
          <div className={Styles.totalContentContainer}>
            <div className={Styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>

                {selector.map((e, index) => (
                  <tbody>
                    <tr>
                      <td className={Styles.firstTableData}>
                        <img src={CloseIcon} alt="close"></img>
                        <img
                          className={Styles.tableImageStyle}
                          src={e.cardimg}
                          alt="product-image"
                        ></img>
                        <span className={Styles.tableSpanStyle}>
                          {e.cardTitle}
                        </span>
                      </td>
                      <td style={{ paddingLeft: "20px" }}>
                        <span>{e.cardRate}</span>
                      </td>
                      <td>
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
                      </td>
                      <td style={{ paddingLeft: "20px" }}>
                        <span>₹3900.00</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>

            <div className={Styles.overallSecondDiv}>
              <div className={Styles.resultSpanDiv}>
                <span>Cart Totals</span>
              </div>
              <div className={Styles.resultContainer}>
                <div className={Styles.resultDetailsDiv}>
                  <span className={Styles.resultSpan}>
                    Subtotal <span>₹3482.14</span>
                  </span>
                </div>
                <hr></hr>
                <div className={Styles.resultDetailsDiv}>
                  <div>
                    <span>Shipping</span>
                    <p style={{ margin: "0" }}>
                      <img src={checkIcon} alt="check"></img>
                      <span>Free Shipping</span>
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className={Styles.resultDetailsDiv}>
                  <span className={Styles.resultSpan}>
                    CGST @ 6% <span>₹208.93</span>
                  </span>
                </div>
                <hr></hr>
                <div className={Styles.resultDetailsDiv}>
                  <span className={Styles.resultSpan}>
                    SGST @ 6% <span>₹208.93</span>
                  </span>
                </div>
                <hr></hr>
                <div className={Styles.resultDetailsDiv}>
                  <span className={Styles.resultSpan}>
                    Total <span>₹3900.00 </span>
                  </span>
                </div>
                <hr></hr>
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
