import Styles from "../Styles/ViewStyle.module.css";
import cardViewImg from "../images/card.jpg";
import heart from "../images/heart.svg";
import shareFacebook from "../images/Sharefacebook.svg";
import shareWhatsapp from "../images/Sharewhatsapp.jpeg";
import shareTwitter from "../images/Sharetwitter.svg";
import shareYoutube from "../images/Shareyoutube.svg";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function View() {
  const ProductList = [
    "All Products",
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
  console.log("santhosh");
  return (
    <div className={Styles.overallViewDiv}>
      {/* Left Side */}

      <div className={Styles.sideMenuDiv}>
        <h4 className={Styles.h4Style}>Products</h4>
        <ul>
          {ProductList.map((e, index) => (
            <li>{e}</li>
          ))}
        </ul>
        <h4 className={Styles.h4Style}>Rain Hose</h4>
        <ul>
          {RainHoseList.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className={Styles.imgDiv}>
        <div>
          <img className={Styles.img} src={cardViewImg} alt="card img"></img>
        </div>
        <div className={Styles.rightContentDiv}>
          <span className={Styles.topSpan}>
            Round plain-1100 / 16 mm / 100 meter
          </span>
          <hr className={Styles.hrStyle}></hr>
          <div className={Styles.rightContentSecondDiv}>
            <h5>
              <span>
                <span style={{ fontWeight: "normal" }}>Product Code :</span>{" "}
                <span>1318</span>
              </span>
            </h5>
            <h5 className={Styles.h5Style}>
              <span>
                <span style={{ fontWeight: "normal" }}>Availability :</span>{" "}
                <span>In stock</span>
              </span>
            </h5>
          </div>
          <hr></hr>
          <h2 className={Styles.h2Style}>₹1100.00</h2>
          <hr></hr>
          <div className={Styles.rightOverallSecondDiv}>
            <span className={Styles.qtySpan}>Qty :</span>
            <div className={Styles.tableQtyDiv}>
              <button className={Styles.tableQtyBtnStyle}>-</button>
              <span style={{ alignSelf: "center" }}>0</span>
              <button className={Styles.tableQtyBtnStyle}>+</button>
            </div>

            <button className={Styles.updateBtn}>Update Cart</button>
            <span className={Styles.heartDiv}>
              <img className={Styles.heartImg} src={heart} alt="heart"></img>
              <span style={{ paddingLeft: "6px" }}>Add to Wishlist</span>
            </span>
          </div>

          <div>
            <p>
              Drip laterals are produced from special grade virgin poly ethylene
              mixture. The laterals are protected against UV degradation
              ensuring longer life. Smooth inner space reduces frictional
              losses.{" "}
            </p>
          </div>

          <div>
            <span style={{ float: "left" }}>Share with :</span>
            <img
              className={Styles.shareIcons}
              src={shareWhatsapp}
              alt="whatsapp"
            ></img>
            <img
              className={Styles.shareIcons}
              src={shareYoutube}
              alt="youtube"
            ></img>
            <img
              className={Styles.shareIcons}
              src={shareFacebook}
              alt="facebook"
            ></img>
            <img
              className={Styles.shareIcons}
              src={shareTwitter}
              alt="twitter"
            ></img>
          </div>
        </div>
        <div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}