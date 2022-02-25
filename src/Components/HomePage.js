import { Carousel } from "react-bootstrap";
import banner from "../images/banner.jpeg";
import banner2 from "../images/banner2.jpeg";
import banner3 from "../images/banner3.jpeg";
import Styles from "../Styles/BannerComponentStyle.module.css";
import BodyComponent from "./BodyComponent";
import BodyOptionOne from "./BodyOptionOne";

export default function HomePage() {
  const myStyle = {
    width: "100%",
    position: "relative",
    float: "left",
    zIndex: "-1",
  };

  return (
    <div>
      <div>
        <Carousel variant="dark" style={myStyle}>
          <Carousel.Item>
            <img
              className={Styles.bannerImgStyle}
              src={banner3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={Styles.bannerImgStyle}
              src={banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={Styles.bannerImgStyle}
              src={banner}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <BodyOptionOne />
      <BodyComponent />
    </div>
  );
}
