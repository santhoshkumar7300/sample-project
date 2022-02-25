import Styles from "../Styles/FooterImageComponent.module.css";
import mblImg from "../images/mobApp.png";
import googleplay from "../images/googleplay.png";
import FooterSecond from "./FooterSecond";
import FooterLast from "./FooterLast";

export default function FooterComponent() {
  return (
    <div>
      <div>
        <div className={Styles.overall}>
          <div className={Styles.overImg}>
            <img
              className={Styles.mblImgStyle}
              src={mblImg}
              alt="mblIcon"
            ></img>
          </div>
          <div className={Styles.footerSecondDiv}>
            <p>Introducing KSNM Drip's Mobile App</p>
            <h3>Available In Play Store</h3>
            <p>
              Through our app’s convenience, start enjoying easy access, better
              experience and simple payment process. Download our App and begin
              your cart buying right away.
            </p>
            <button className={Styles.btnStyle}>Download</button>
            <button className={Styles.googleBtn}>
              <img
                className={Styles.googleBtnImg}
                src={googleplay}
                alt="google"
              ></img>
            </button>
          </div>
        </div>
      </div>

      <FooterSecond />
      <FooterLast />
    </div>
  );
}
