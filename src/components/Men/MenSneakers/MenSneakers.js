import MenSneakersImg from "./MenSneakersImg";
import styles from "./MenSneakers.module.css";

const MenSneakers = () => {
  return (
    <div className={styles.page}>
      <h2>Men</h2>
      <MenSneakersImg />
    </div>
  );
};

export default MenSneakers;
