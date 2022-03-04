import { Link, useNavigate } from "react-router-dom";
import Styles from "../Styles/SignupStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signup } from "../Api/ApiData";
import { signupMsg } from "../ReduxAction/Action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Loader from "../Loader/Loader";

export default function SignUp() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobileNo: "",
      email: "",
      password: "",
      cpassword: "",
      privacy: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),

      lastname: Yup.string().required("Required"),

      mobileNo: Yup.string()
        .max(10, "Enter Valid Mobile Number")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
      cpassword: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
      privacy: Yup.string().required("privacy policy cannot be blank"),
    }),
    onSubmit: (values) => {
      navigate("/otp_verification", {
        state: {
          remainingTime: 5,
          mobile: formik.values.mobileNo,
          reset: "dfdgfhd44575v7",
        },
      });
      setLoader(true);
      let formdata = new FormData();
      formdata.append("first_name", values.firstname);
      formdata.append("last_name", values.lastname);
      formdata.append("email", values.email);
      formdata.append("phone", values.mobileNo);
      formdata.append("password", values.password);
      formdata.append("confirm_password", values.cpassword);
      signup(formdata)
        .then((res) => {
          if (res.data.status === 1) {
            navigate("/otp_verification", {
              state: {
                remainingTime: res.data.remaining_seconds,
                mobile: formik.values.mobileNo,
                reset: res.data.reset_key,
              },
            });
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
    },
  });

  console.log(formik.errors);
  console.log(formik.values);

  return (
    <div>
      {loader ? <Loader /> : null}
      {/* Title div */}
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
            <span className={Styles.spanStyle}>Register</span>
          </span>
        </div>
      </div>

      {/* Body Div */}
      <div className={Styles.totalBodyDiv}>
        <div className={Styles.childContainer}>
          <div className={Styles.leftBodyDiv}>
            <h4>REGISTER ACCOUNT</h4>
            <hr className={Styles.hrStyle}></hr>
            <p className={Styles.paraStyle}>
              If you already have an account with us, please login at the login
              page.
            </p>
            <div className={Styles.formDiv}>
              <Form onSubmit={formik.handleSubmit}>
                <Row className={Styles.formOverallDiv}>
                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    controlId="firstname"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>
                      First Name <span className={Styles.formSpanStyle}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="text"
                      placeholder="First Name"
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className={Styles.error}>
                        {formik.errors.firstname}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    controlId="lastname"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="text"
                      placeholder="Last Name"
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className={Styles.error}>
                        {formik.errors.lastname}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.mobileNo}
                    controlId="mobileNo"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>
                      Mobile Number{" "}
                      <span className={Styles.formSpanStyle}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="text"
                      placeholder="Mobile Number"
                    />
                    {formik.touched.mobileNo && formik.errors.mobileNo ? (
                      <div className={Styles.error}>
                        {formik.errors.mobileNo}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    controlId="email"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="email"
                      placeholder="demo@gmail.com"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={Styles.error}>{formik.errors.email}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    controlId="password"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>
                      Password <span className={Styles.formSpanStyle}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="password"
                      placeholder="Password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className={Styles.error}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    onChange={formik.handleChange}
                    value={formik.values.cpassword}
                    controlId="cpassword"
                    className={Styles.formInputLabelDiv}
                  >
                    <Form.Label>
                      Confirm Passwrod{" "}
                      <span className={Styles.formSpanStyle}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={Styles.inputStyle}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {formik.touched.cpassword && formik.errors.cpassword ? (
                      <div className={Styles.error}>
                        {formik.errors.cpassword}
                      </div>
                    ) : null}
                  </Form.Group>
                  <hr className={Styles.hrStyle}></hr>
                  <div className={Styles.checkDiv}>
                    <input
                      type={"checkbox"}
                      name="privacy"
                      onChange={(e) => {
                        if (e.target.checked) {
                          formik.setFieldValue("privacy", 1);
                        } else {
                          formik.setFieldValue("privacy", "");
                        }
                      }}
                      className={Styles.inputCheck}
                    ></input>
                    <label className={Styles.checkLabel}>
                      By clicking Sign Up, you agree to our Terms, Privacy
                      Policy and Terms & Conditions. You may receive SMS/Email
                      notifications from us.
                    </label>
                    {formik.touched.privacy && formik.errors.privacy ? (
                      <div className={Styles.error}>
                        {formik.errors.privacy}
                      </div>
                    ) : null}
                  </div>

                  <button type={"submit"} className={Styles.btnStyle}>
                    Sign Up
                  </button>
                </Row>
              </Form>
            </div>
          </div>

          <div>
            <div className={Styles.AccountSettingsContainer}>
              <h4>Account Settings</h4>
              <hr></hr>
              <ul>
                <li className={Styles.liStyle}>
                  <Link className={Styles.LinkStyle} to="/myaccount">
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
      </div>
    </div>
  );
}
