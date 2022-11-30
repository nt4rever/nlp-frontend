import styles from "./index.module.scss";
import icon_1 from "../../assets/images/icon1-2-1-1.png";
import icon_2 from "../../assets/images/icon2-2-1-1.png";
import icon_3 from "../../assets/images/icon3-2-1-1.png";

const Feature = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["item"]}>
        <div className={styles["top-featured-content"]}>
          <h3>
            Our top <span className="text-marker">Featured</span> Solutions
          </h3>
          <p>Lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
          <a href="#" className="btn btn-primary">
            Get Started Free
          </a>
        </div>
      </div>
      <div className={styles["item"]}>
        <div className={styles["top-featured-card"]}>
          <div className={styles["image-icon"]}>
            <img decoding="async" src={icon_1} alt="icon image"></img>
          </div>
          <h3>
            <a href="#">Robotic Automation</a>
          </h3>
          <a href="#" className={styles["button"]}>
            Read more
          </a>
        </div>
      </div>
      <div className={styles["item"]}>
        <div className={styles["top-featured-card"]}>
          <div className={styles["image-icon"]}>
            <img decoding="async" src={icon_2} alt="icon image"></img>
          </div>
          <h3>
            <a href="#">Machine Learning</a>
          </h3>
          <a href="#" className={styles["button"]}>
            Read more
          </a>
        </div>
      </div>
      <div className={styles["item"]}>
        <div className={styles["top-featured-card"]}>
          <div className={styles["image-icon"]}>
            <img decoding="async" src={icon_3} alt="icon image"></img>
          </div>
          <h3>
            <a href="#">Cognitive Engagement</a>
          </h3>
          <a href="#" className={styles["button"]}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
