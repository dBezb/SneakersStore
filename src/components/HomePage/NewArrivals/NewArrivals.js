import Images from "./Images";
import styles from "./NewArrivals.module.css";

const NewArrivals = (props) => {
  return (
    <div>
      <h2 className={styles["header-inscription"]}>All the new arrivals</h2>
      <div>
        <Images onPageChange={props.onPageChange} />
      </div>
    </div>
  );
};

export default NewArrivals;
