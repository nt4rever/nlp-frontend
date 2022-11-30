import styles from "./index.module.scss";
import shape_1 from "./../../assets/images/shape-1.png";
import shape_2 from "./../../assets/images/shape-2.png";
import image_main_1 from "./../../assets/images/main1.png";
import image_main_2 from "./../../assets/images/main2.png";

const Banner = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1>
          AI and Machine <span className="text-marker">Learning</span> Products
          Creators
        </h1>
        <div className={styles["wrap__text"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className={styles["button__group"]}>
          <li>
            <a href="#" className="btn btn-primary">
              Get Started Free
            </a>
          </li>
          <li>
            <a href="#" className="video-btn">
              <i className="fa-solid fa-play play-button"></i>
              Watch Intro Video
            </a>
          </li>
        </ul>
      </div>

      <div className={styles["image__shape--1"]}>
        <img src={shape_1} alt="shape" />
      </div>
      <div className={styles["image__shape--2"]}>
        <img src={shape_2} alt="shape" />
      </div>
      <div className={styles["image__shape--3"]}>
        <img src={shape_2} alt="shape" />
      </div>
      <div className={styles["image__banner"]}>
        <img src={image_main_1} alt="image" />
        <div className={styles["circle-shape"]}></div>
      </div>
      <div className={`${styles["image__banner"]} ${styles["right"]}`}>
        <img src={image_main_2} alt="image" />
        <div className={styles["circle-shape"]}></div>
      </div>
    </div>
  );
};

export default Banner;
