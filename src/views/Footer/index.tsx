import styles from "./index.module.scss";
import cicle_map from "./../../assets/images/circle-map-1-1-1.png";
const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["circle-map"]}>
        <img src={cicle_map} alt="map" />
      </div>
    </div>
  );
};

export default Footer;
