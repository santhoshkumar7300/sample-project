import Styles from "../Styles/FooterSecondStyle.module.css";
import logo from "../images/logo.svg";
import email from "../images/email.svg";
import call from "../images/call.svg";
import location from "../images/location.svg";
import { Link } from "react-router-dom";

export default function FooterSecond() {
  return (
    <div>
      <div>
        {/* Left Div */}
        <div className={Styles.overallFooterSecond}>
          <div className={Styles.overallLeftDiv}>
            <img className={Styles.leftLogo} src={logo} alt="logo"></img>
            <h4 className={Styles.leftTitle}>Contact Us</h4>
            <div className={Styles.leftContentDiv}>
              <img src={location} alt="location"></img>
              <p className={Styles.leftPara}>
                SF No. 29/1B, Onapalayam, Green Home Via, Vadavalli to
                Thondamuthur Road, Coimbatore - 641 109, Tamilnadu INDIA.{" "}
              </p>
            </div>
            <div className={Styles.leftContentDiv}>
              <img src={call} alt="location"></img>
              <p className={Styles.leftPara}>+91 94890 61175</p>
            </div>
            <div className={Styles.leftContentDiv}>
              <img src={email} alt="location"></img>
              <p className={Styles.leftPara}>info@ksnm.in</p>
            </div>
          </div>

          {/* Right Div */}
          <div className={Styles.rightContentOverallDiv}>
            <div>
              <h4>quick links</h4>
              <ul>
                <li>Home</li>
                <li>
                  <Link className={Styles.linkStyle} to="/product">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className={Styles.linkStyle} to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>Wishlist</li>
                <li>
                  <Link className={Styles.linkStyle} to="/myaccount">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>information</h4>
              <ul>
                <li>
                  <Link className={Styles.linkStyle} to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4>Customer Service</h4>
              <ul>
                <li>Order Tracking</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Bank Account Details</li>
                <li>Material Calculator</li>
              </ul>
            </div>
            <div>
              <h4>Branches</h4>
              <ul>
                <li>Tamil Nadu</li>
                <li>Andhara Pradesh / Telangana</li>
                <li>Kerala</li>
                <li>Karnataka</li>
                <li>Northern States</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.hrDiv}>
          <hr className={Styles.hrStyle}></hr>
        </div>
      </div>
    </div>
  );
}
