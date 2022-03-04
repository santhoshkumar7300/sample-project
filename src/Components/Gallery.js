import { Link, useNavigate, useParams } from "react-router-dom";
import Styles from "../Styles/GalleryStyle.module.css";
import rightArrow from "../images/rightArrow.png";
import testImg from "../images/testGallery.jpg";
import { useEffect, useState } from "react";
import { gallery } from "../Api/ApiData";
export default function Gallery() {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [type, setType] = useState(1);
  let navigate = useNavigate();
  let param = useParams();
  console.log(param.galleryData, "------");

  useEffect(() => {
    let formData = new FormData();
    formData.append("type", type);
    if (param?.galleryData) formData.append("searchkey", param.galleryData);
    gallery(formData)
      .then((res) => {
        if (res.data.status === 1) {
          setPhotoGallery(res.data.gallery_item_list);
        }
      })
      .catch((err) => console.log(err));
  }, [type, param]);

  const photo = () => {
    setType(1);
  };

  const video = () => {
    setType(2);
  };

  console.log(photoGallery);

  const data = [
    "Rain Hose / Spray Kit ",
    "Drip Tape / Drip Kit ",
    "Flat Inline ",
    "Round Inline",
    "Gallery testing ",
    " Video galley testing ",
  ];

  return (
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
          <span className={Styles.spanStyle}>Gallery</span>
        </span>
      </div>
      <div className={Styles.overallContentDiv}>
        <div className={Styles.leftContent}>
          <h4 className={Styles.leftHeading}>Categories</h4>
          {data.map((e) => (
            <p
              onClick={() => navigate(`/gallery/${e}`)}
              className={Styles.leftOptions}
            >
              {e}
            </p>
          ))}
        </div>
        <div className={Styles.rightContent}>
          <h3>Rain Hose / Spray Kit</h3>
          <hr className={Styles.hrStyle}></hr>
          <button onClick={photo} className={Styles.photoGalleryBtn}>
            Photo Gallery
          </button>
          <button onClick={video} className={Styles.videoGalleryBtn}>
            Video Gallery
          </button>
          <div>
            {photoGallery.map((e) => {
              let temp =
                type === 1 ? (
                  <img
                    className={Styles.imgStyle}
                    src={e.path}
                    alt="image"
                  ></img>
                ) : (
                  <iframe
                    src={e.path}
                    title="W3Schools Free Online Web Tutorials"
                    className={Styles.iframeStyle}
                  ></iframe>
                );
              return temp;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
