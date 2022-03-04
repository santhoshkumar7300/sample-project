import { Link } from "react-router-dom";
import Styles from "../Styles/MyAccountStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import { useContext, useState } from "react";
import { login } from "../Api/ApiData";
import { AuthContext } from "../App";
import { SetCookie } from "./Utility";
// import { sha1 } from "react-sha1";

export default function MyAccount() {
  const AuthContext = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  console.log(loginData);

  const loginHandle = () => {
    let formdata = new FormData();
    formdata.append(
      "authcode",
      sha1("ik7sj5d@Pgk*LO7!e4ubz&8b" + "1234567890" + loginData.username)
    );
    formdata.append("username", loginData.username);
    formdata.append("password", loginData.password);
    formdata.append("device_type", 1);
    formdata.append("device_id", "1234567890");
    login(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          SetCookie("credential", JSON.stringify(res.data.token), 7);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
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
            <Link className={Styles.linkStyle} to="/myaccount">
              My Account
            </Link>
            <img
              className={Styles.firstDivImg}
              src={rightArrow}
              alt="rightarrow"
            ></img>
            <span className={Styles.spanStyle}>Login</span>
          </span>
        </div>
      </div>

      <div className={Styles.overallContainer}>
        <div className={Styles.overallContent}>
          <div className={Styles.newCustomerContainer}>
            <h4>new customer</h4>
            <hr></hr>
            <h5>Sign Up Account</h5>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order’s status, and keep track of the orders you have
              previously made.
            </p>
            <button className={Styles.continueBtn}>Continue</button>
          </div>
          <div className={Styles.returningCustomerContainer}>
            <h4>returning customer</h4>
            <hr></hr>
            <h5>I am a returning customer</h5>
            <form>
              <label>
                E-Mail Address / Phone Number{" "}
                <span className={Styles.requriedSpan}>*</span>{" "}
              </label>
              <input
                className={Styles.inputStyle}
                type={"text"}
                placeholder="Email ID / Mobile Number"
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              ></input>
              <label>
                Password <span className={Styles.requriedSpan}>*</span>{" "}
              </label>
              <input
                className={Styles.inputStyle}
                type={"password"}
                placeholder="Password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              ></input>
            </form>
            <button className={Styles.continueBtn}>Sign In</button>
          </div>
          <div className={Styles.AccountSettingsContainer}>
            <h4>Account Settings</h4>
            <hr></hr>
            <ul>
              <li className={Styles.liStyle}>
                <Link
                  onClick={loginHandle}
                  className={Styles.LinkStyle}
                  to="/myaccount"
                >
                  Sign In
                </Link>
              </li>
              <li className={Styles.liStyle}>
                <Link className={Styles.LinkStyle} to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className={Styles.liStyle}>
                <Link className={Styles.LinkStyle} to="/signIn">
                  Forgot Password
                </Link>
              </li>
              <li className={Styles.liStyle}>
                <Link className={Styles.LinkStyle} to="/signIn">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
