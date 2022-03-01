import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Styles from "../Styles/HeaderComponentStyle.module.css";
import logo from "../images/logo.svg";
import accountLogo from "../images/accLogo.svg";
import cartIcon from "../images/cart.svg";
import searchIcon from "../images/search.png";
import discountIcon from "../images/discount.svg";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderComponent() {
  let CartCount = useSelector((state) => state.cartCount);
  console.log(CartCount);

  const ProductList = [
    "Rain Hose / Rain Pipe",
    "Flat Inline & Fittings /16 mm",
    "Flat Inline Drip Kit",
    "Round Inline & Fittings / 16 mm",
    "Round Plain & Fittings / 16 mm",
    "Drip Tape & Fittings / 16 mm",
    "Drip Tape & Fittings / 20 mm",
    "Lay Flat Pipe",
    "Filters & venturi",
    "Drip System Accessories",
    "Drum Seeder / Cono Weeder",
  ];

  const RainHoseList = [
    "Irrigation Kit",
    "Water Kit Testing",
    "Spray Irrigation Kit",
    "Rain Hose & Fittings / 40 mm",
    "Rain Hose & Fittings / 20 mm",
    "Rain Hose & Fittings / 32 mm",
    "Rain Hose & Fittings / 50 mm",
    "Rain Hose & Fittings / 63 mm",
  ];

  const AllProducts = [
    "Irrigation Kit",
    "Water Kit Testing",
    "Spray Irrigation Kit",
    "Rain Hose & Fittings / 40 mm",
    "Rain Hose & Fittings / 20 mm",
    "Rain Hose & Fittings / 32 mm",
    "Rain Hose & Fittings / 50 mm",
    "Rain Hose & Fittings / 63 mm",
    "Rain Hose / Rain Pipe",
    "Flat Inline & Fittings /16 mm",
    "Flat Inline Drip Kit",
    "Round Inline & Fittings / 16 mm",
    "Round Plain & Fittings / 16 mm",
    "Drip Tape & Fittings / 16 mm",
    "Drip Tape & Fittings / 20 mm",
    "Lay Flat Pipe",
    "Filters & venturi",
    "Drip System Accessories",
    "Drum Seeder / Cono Weeder",
  ];

  return (
    <div>
      {/* Header First Div */}
      <div className={Styles.firstDiv}>
        <div className={Styles.spanDIv}>
          <span style={{ alignSelf: "center" }} className={Styles.customerNum}>
            Customer care +9489061175
          </span>
        </div>
        <div className={Styles.marqueeDiv}>
          <marquee>
            Due to COVID-19 restrictions there will be delay in delivery. Feel
            free to mail us at info@ksnm.in for any clarification.
          </marquee>
        </div>
        <div className={Styles.lastDiv}>
          <div className={Styles.rightDiv}>
            <div style={{ display: "flex" }}>
              <span className={Styles.rightDivSpan}>WishList(0)</span>
            </div>
            <div>
              <DropdownButton
                id="dropdown-basic-button"
                title="Currency ₹"
                size="sm"
                variant="white"
              >
                <Dropdown.Item href="#/action-1">
                  Indian Rupees (₹)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">US Doller ($)</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>

      {/* Header Second Div */}

      <div className={Styles.overallSecondDiv}>
        <div className={Styles.logoDiv}>
          <div className={Styles.logoImgDiv}>
            <img src={logo} alt="logo"></img>
          </div>
          <div className={Styles.ParentMenu}>
            <div className={Styles.menu}>
              <Navbar expand={false}>
                <Container
                  fluid
                  style={{
                    justifyContent: "end",
                    alignSelf: "center",
                    height: "86px",
                  }}
                >
                  <Navbar.Toggle
                    aria-controls="offcanvasNavbar"
                    style={{ border: "none" }}
                  />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="top"
                    style={{ height: "35vh" }}
                  >
                    <Offcanvas.Header
                      closeButton
                      style={{ justifyContent: "end" }}
                    >
                      {" "}
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ padding: "0" }}>
                      <div className={Styles.contentDivMenu}>
                        <div className={Styles.contentInnerDivMenu}>
                          <div
                            style={{
                              alignSelf: "center",
                              padding: "15px 8px",
                              borderBottom: "1px solid #beff7d",
                            }}
                          >
                            <DropdownButton
                              id="dropdown-basic-button"
                              title="Products"
                              size="sm"
                              variant="white"
                            >
                              {ProductList.map((e) => (
                                <Dropdown.Item href="#/action-1">
                                  {e}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                          </div>
                          <div
                            style={{
                              alignSelf: "center",
                              padding: "15px 8px",
                              borderBottom: "1px solid #beff7d",
                            }}
                          >
                            <DropdownButton
                              id="dropdown-basic-button"
                              title="Rain Hose"
                              size="sm"
                              variant="white"
                            >
                              {RainHoseList.map((e) => (
                                <Dropdown.Item href="#/action-1">
                                  {e}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                          </div>
                          <div
                            style={{
                              alignSelf: "center",
                              padding: "15px 8px",
                              borderBottom: "1px solid #beff7d",
                            }}
                          >
                            <button className={Styles.buttonStyle}>
                              <img
                                src={accountLogo}
                                style={{ width: "25px" }}
                                alt="profileLogo"
                              ></img>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                  alignSelf: "center",
                                }}
                                to="/myaccount"
                              >
                                <span>My Account</span>
                              </Link>
                            </button>
                          </div>
                          <div
                            style={{
                              alignSelf: "center",
                              height: "56px",
                              padding: "15px 8px",
                            }}
                          >
                            <button className={Styles.buttonStyle}>
                              <div style={{ display: "flex" }}>
                                <div className={Styles.cartImgDiv}>
                                  <img
                                    style={{ width: "23px" }}
                                    src={cartIcon}
                                    alt="cartlogo"
                                  ></img>
                                  <span className={Styles.cartSpanStyle}>
                                    0
                                  </span>
                                </div>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                    alignSelf: "center",
                                  }}
                                  to="/cart"
                                >
                                  <span>Cart</span>
                                </Link>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </div>
            <div className={Styles.contentDiv}>
              <div className={Styles.contentInnerDiv}>
                <div style={{ alignSelf: "center" }}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Products"
                    size="sm"
                    variant="white"
                  >
                    {ProductList.map((e) => (
                      <Dropdown.Item href="#/action-1">{e}</Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Rain Hose"
                    size="sm"
                    variant="white"
                  >
                    {RainHoseList.map((e) => (
                      <Dropdown.Item href="#/action-1">{e}</Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <button className={Styles.buttonStyle}>
                    <img
                      src={accountLogo}
                      style={{ width: "25px" }}
                      alt="profileLogo"
                    ></img>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        alignSelf: "center",
                      }}
                      to="/myaccount"
                    >
                      <span>My Account</span>
                    </Link>
                  </button>
                </div>
                <div style={{ display: "flex" }}>
                  <button className={Styles.buttonStyle}>
                    <div style={{ display: "flex" }}>
                      <div className={Styles.cartImgDiv}>
                        <img
                          style={{ width: "23px" }}
                          src={cartIcon}
                          alt="cartlogo"
                        ></img>
                        <span className={Styles.cartSpanStyle}>
                          {CartCount}
                        </span>
                      </div>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          alignSelf: "center",
                        }}
                        to="/cart"
                      >
                        <span style={{ alignSelf: "center" }}>Cart</span>
                      </Link>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Third Div */}
        <div>
          <div className={Styles.headerThirdDiv}>
            <div className={Styles.searchBoxContainer}>
              <div className={Styles.searchBoxProducts}>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="All Products"
                  size="sm"
                  variant="white"
                  // style={{ fontSize: "12px" }}
                >
                  {AllProducts.map((e) => (
                    <Dropdown.Item href="#/action-1">{e}</Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className={Styles.searchBox}>
                <input type={"text"} placeholder="Search Products"></input>
              </div>
              <div className={Styles.searchBoxBtn}>
                <button className={Styles.searhBtnStyle}>
                  <span>
                    <img
                      src={searchIcon}
                      className={Styles.searchImgStyle}
                      alt="searchicon"
                    ></img>
                    <span className={Styles.searchName}>Search</span>
                  </span>
                </button>
              </div>
            </div>
            <div className={Styles.specialOfferDiv}>
              <span>
                <img src={discountIcon} alt="discount"></img> Special offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
