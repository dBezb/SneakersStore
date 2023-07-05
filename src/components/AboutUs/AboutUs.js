import styles from "./AboutUs.module.css";
import aboutUsImage from "../../assets/AboutUsImage.png";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Good sneakers</h1>
        <h1>take your good places</h1>
        <p>look no furtner, this is where you find the best pair!</p>
      </div>
      <div className={styles.img}>
        <img src={aboutUsImage} alt="aboutUsImage" />
      </div>
    </div>
  );
};

export default AboutUs;
