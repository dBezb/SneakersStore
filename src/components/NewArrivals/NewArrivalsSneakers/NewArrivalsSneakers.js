import NewSneakersImg from "./NewSneakersImg";
import styles from "./NewArrivalsSneakers.module.css";
const NewArrivalsSneakers = () => {
  return (
    <div className={styles.page}>
      <h2>The new arrivals</h2>
      <NewSneakersImg />
    </div>
  );
};

export default NewArrivalsSneakers;
