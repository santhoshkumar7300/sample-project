import Styles from "../Styles/BodyOptionOneStyle.module.css";
import BodyImg from "../images/BodyOneImg.jpg";
import { useState } from "react";

export default function BodyOptionOne() {
  const [data, setData] = useState([
    {
      img: BodyImg,
      data: "Rain Hose - 350 40 Mm / 10..",
      btn: "Shop Now",
    },
    {
      img: BodyImg,
      data: "Rain Hose - 350 40 Mm / 10..",
      btn: "Shop Now",
    },
    {
      img: BodyImg,
      data: "Rain Hose - 350 40 Mm / 10..",
      btn: "Shop Now",
    },
    {
      img: BodyImg,
      data: "Rain Hose - 350 40 Mm / 10..",
      btn: "Shop Now",
    },
  ]);

  return (
    <div>
      <div className={Styles.container}>
        {data.map((e, index) => (
          <div className={Styles.overallContainer}>
            <div className={Styles.leftContainer}>
              <div>
                <p className={Styles.ParaStyle}>{e.data}</p>
              </div>
              <div className={Styles.btnDiv}>
                <button className={Styles.btnStyle}>{e.btn}</button>
              </div>
            </div>

            <img className={Styles.bodyImgStyle} src={e.img} alt="img"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
