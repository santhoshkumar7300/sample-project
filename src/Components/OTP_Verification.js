import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Styles from "../Styles/OTP_Verification.module.css";
import { resendotpverify, signupotpverify } from "../Api/ApiData";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

export default function OTP_Verification() {
  const [otpcode, setOtpcode] = useState("");
  const [loader, setLoader] = useState(false);
  let { state } = useLocation();

  console.log(state);

  const [count, setCount] = useState(state.remainingTime);
  useEffect(() => {
    let timer;
    if (count > 0) {
      timer = setInterval(() => setCount(count - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  console.log(count);

  const ResendOTPHandle = () => {
    let formdata = new FormData();
    formdata.append(state.reset);
    resendotpverify(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          toast(res.data.msg);
        } else {
          toast.POSITION(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
    setCount(state.remainingTime);
  };

  const OTPVerification = () => {
    toast("welcome");
    setLoader(true);
    let formdata = new FormData();
    formdata.append("otp_code", otpcode);
    formdata.append("reset_key", state.reset);
    signupotpverify(formdata)
      .then((res) => {
        if (res.data.status === 1) {
          toast(res.data.msg);
        } else {
          toast(res.data.msg);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };
  return (
    <div className={Styles.overallDiv}>
      {loader ? <Loader /> : null}
      <div className={Styles.childContainer}>
        <div className={Styles.otpDiv}>
          <h4>Account Verification!</h4>
          <hr style={{ color: " #d0e187" }}></hr>
          <p style={{ paddingTop: "15px" }}>
            An otp code has been sent to <span>{state.mobile}</span>, please
            check your inbox.
          </p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Otp Code <span className={Styles.otpSpan}>*</span>
              </Form.Label>
              <Form.Control
                className={Styles.input}
                type="text"
                placeholder="OTP Code"
                onChange={(e) => setOtpcode(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={OTPVerification}
              className={Styles.submitBtn}
              type="submit"
            >
              Submit
            </Button>
            {count === 0 ? (
              <Button
                onClick={ResendOTPHandle}
                className={Styles.resendBtn}
                type="submit"
              >
                Resend OTP
              </Button>
            ) : null}
          </Form>
          {count > 0 ? (
            <p style={{ padding: "15px 0" }}>
              You Can Resend OTP After : {count}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className={Styles.AccountSettingsContainer}>
          <h4>Account Settings</h4>
          <hr></hr>
          <ul>
            <li className={Styles.liStyle}>
              <Link className={Styles.LinkStyle} to="/signIn">
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
              <Link className={Styles.LinkStyle} to="/myaccount">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
