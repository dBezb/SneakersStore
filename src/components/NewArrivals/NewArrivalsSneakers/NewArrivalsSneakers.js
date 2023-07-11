import NewSneakersImg from "./NewSneakersImg";
import styles from "./NewArrivalsSneakers.module.css";
const NewArrivalsSneakers = (props) => {
  return (
    <div className={styles.page}>
      <h2>The new arrivals</h2>
      <NewSneakersImg onPageChange={props.onPageChange} />
    </div>
  );
};

export default NewArrivalsSneakers;
