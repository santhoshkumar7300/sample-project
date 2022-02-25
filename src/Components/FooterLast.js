import Styles from "../Styles/FooterLastStyle.module.css";
import whatsapp from "../images/whatsapp.jpeg";
import youtube from "../images/youtube.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
export default function FooterLast() {
  return (
    <div>
      <div>
        <div className={Styles.overallFooterLast}>
          <p className={Styles.content}>
            Copyright © 2021 KSNM DRIP. All rights reserved
          </p>

          <img className={Styles.footerImg} src={whatsapp} alt="whatsapp"></img>
          <img className={Styles.footerImg} src={youtube} alt="youtube"></img>
          <img className={Styles.footerImg} src={facebook} alt="facebook"></img>
          <img className={Styles.footerImg} src={twitter} alt="twitter"></img>
          <img
            className={Styles.footerImg}
            src={instagram}
            alt="instagram"
          ></img>
        </div>
      </div>
    </div>
  );
}
