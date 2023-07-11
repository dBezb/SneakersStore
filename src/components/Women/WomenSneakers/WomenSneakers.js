import WomenSneakersImg from "./WomenSneakersImg";
import styles from "./WomenSneakers.module.css";

const WomenSneakers = () => {
  return (
    <div className={styles.page}>
      <h2>Women</h2>
      <WomenSneakersImg />
    </div>
  );
};

export default WomenSneakers;
