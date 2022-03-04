import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../Styles/CartStyle.module.css";
import CloseIcon from "../images/close_icon.svg";
import { addtocart } from "../Api/ApiData";
import { toast } from "react-toastify";

export default function CartTableData({ e, deleteHandle }) {
  const [count, setCount] = useState(parseInt(e.quantity || e.cart_qty));
  let dispatch = useDispatch();
  console.log(count);

  const add_num_handle = () => {
    let formdata = new FormData();
    formdata.append("product_id", e.product_id);
    formdata.append("unique_id", "1234567890");
    formdata.append("quantity", count + 1);
    addtocart(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          setCount(count + 1);
          toast(res.data.msg);
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  const minus_num_handle = () => {
    let formdata = new FormData();
    formdata.append("product_id", e.product_id);
    formdata.append("unique_id", "1234567890");
    formdata.append("quantity", count - 1);
    addtocart(formdata)
      .then((res) => {
        setCount(count - 1);
        if (count === 1) {
          setCount(1);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td style={{ marginBottom: "unset" }} className={Styles.firstTableData}>
        <img src={CloseIcon} onClick={() => deleteHandle(e)} alt="close"></img>
        <img
          className={Styles.tableImageStyle}
          src={e.product_image}
          alt="product-image"
        ></img>
        <span className={Styles.tableSpanStyle}>{e.product_name}</span>
      </td>
      <td style={{ paddingLeft: "20px" }}>
        <span>{e.net_price}</span>
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
          <button onClick={add_num_handle} className={Styles.tableQtyBtnStyle}>
            +
          </button>
        </div>
      </td>
      <td style={{ paddingLeft: "20px" }}>
        <span>{e.items_net_price}</span>
      </td>
    </tr>
  );
}
