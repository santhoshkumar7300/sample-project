import Styles from "../Styles/AboutUsStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import leaf from "../images/leaf.svg";
import infra from "../images/infra.png";
import customer from "../images/customer.svg";
import mission from "../images/mission.svg";
import quality from "../images/quality.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutUs() {
  const [teamData, setTeamData] = useState([
    { name: "Madeswaran V", post: "Managing Director" },
    { name: "Siddharth M", post: "Director Sales" },
    { name: "Varadharajan R", post: "Director R&D" },
    { name: "Ramadas S", post: "Director Design" },
    { name: "Maragatham A", post: "Factory Manager" },
    { name: "Ganapathy S", post: "Marketing Manager" },
    { name: "Samadhan R", post: "Production Manager" },
  ]);

  const [Data, setData] = useState([
    {
      img: mission,
      title: "Mission",
      content:
        "KSNM's mission is to produce and market product that will enrich and enhance the lives of rural residents. Our products create prosperity for small farmers and bring a better way of life to other people in rural areas.",
    },
    {
      img: quality,
      title: "Quality Policy",
      content:
        "Our products create prosperity for small farmers. Ensure and exceed customers expectations. Continuously upgrade our technical competence to offer flawless products.",
    },
    {
      img: customer,
      title: "Our Customer",
      content:
        "Small and marginal farmers are our customers. Low-cost drip irrigation products remove the entry barrier for poor farmers. Our products are affordable and easy to install and maintain",
    },
  ]);

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
            <span className={Styles.spanStyle}>About Us</span>
          </span>
        </div>
      </div>

      <div>
        <div className={Styles.overallFirstContentDiv}>
          <div className={Styles.firstContentDiv}>
            <div className={Styles.firstContentImgDiv}>
              <img
                className={Styles.firstContentImg}
                src={leaf}
                alt="leaf"
              ></img>
            </div>
            <h4 className={Styles.h4Style}>With Happy Smile</h4>
            <p className={Styles.paraStyle}>
              Established in the year 2001, we are one of the eminent
              manufacturers of Drip Irrigation System. Our main motto is to
              offer products that are focused on enhancing productivity and
              improving the livelihoods of small farmers. We have two factory
              units, one in Onapalayam, Coimbatore District and the second unit
              in Ichipatti, Tiruppur District.V. Madeswaran, our mentor and MD,
              is efficiently leading the team. His futuristic vision and
              keenness towards innovation have helped us to offer a faultless
              range of Drip Irrigation Systems. There are 120 dealers throughout
              the country. Export is mainly to African countries.
            </p>
          </div>
        </div>

        <div className={Styles.overallSecondContentDiv}>
          <div className={Styles.secondContentDiv}>
            <div className={Styles.secondContentLeft}>
              <h4>infrastructure</h4>
              <hr className={Styles.hrStyle}></hr>
              <p className={Styles.secondContentPara}>
                The factory is spread over one, and half-acre near Onapalayam,
                Coimbatore at the base of Western Ghats and is surrounded by
                lush green environment. The second factory is located at
                Ichipatti, Tiruppur District, and spread over an area of three
                and a half acre land. We have a high roof built-up area of more
                than 60,000 square feet. There are 14 extruders to produce
                different types of drip tapes. We have an advanced
                infrastructure that offers installed annual capacity of 150
                million meters of round lateral, flat inline, rain hose and drip
                tapes. Most of the production operations are electronically
                monitored and controlled to produce high-quality products.
                Factory visits are encouraged for college students and farmers
                with prior written permission.
              </p>
            </div>
            <img
              className={Styles.secondContentRight}
              src={infra}
              alt="infra"
            ></img>
          </div>
        </div>

        <div className={Styles.overallThirdContentDiv}>
          <div className={Styles.ThirdContentDiv}>
            <h4>why choose us</h4>
            <hr className={Styles.hrStyleThirdContent}></hr>
            <p style={{ marginTop: "10px" }}>
              Our values vary from any other as we choose the betterment of the
              agricultural community as such.
            </p>
            {Data.map((e) => (
              <div className={Styles.thirdMapContent}>
                <img className={Styles.thirdMapContentImg} src={e.img}></img>
                <h5>{e.title}</h5>
                <p className={Styles.thirdMapContentPara}>{e.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.overallFourthContentDiv}>
          <div className={Styles.FourthContentDiv}>
            <h4 style={{ paddingBottom: "20px" }}>research & Development</h4>
            <hr className={Styles.hrStyleFourthContent}></hr>
            <p style={{ paddingTop: "20px" }}>
              Mr Varadharajan Ramasamy is heading the research and development.
              His passion for innovation is well known. We are constantly
              involved in researches and surveys to gauge the market trends, and
              clients varied demands. We also keep a constant watch on the
              latest technology and sophisticated machinery available in the
              market. Further, they are engaged in improving the quality of our
              products. Nanotechnology in punching of drip tape is an example of
              our supremacy over technology. Rain Hose production is ingenuously
              manufactured. All the required machinery are developed in-house.
            </p>
          </div>
        </div>

        <div className={Styles.overallFifthContentDiv}>
          <div className={Styles.FifthContentDiv}>
            <h3>OUR TEAM</h3>
            <hr className={Styles.hrStyleFifthContent}></hr>
            {teamData.map((e) => (
              <div className={Styles.teamDiv}>
                <h4>{e.name}</h4>
                <h6>{e.post}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
