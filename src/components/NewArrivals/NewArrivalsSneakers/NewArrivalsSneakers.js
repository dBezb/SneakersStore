import NewSneakersImg from "./NewSneakersImg";
import styles from "./NewArrivalsSneakers.module.css";
const NewArrivalsSneakers = (props) => {
  return (
    <div className={styles.page}>
      <div className={styles.brandFilter}>
        <button
          className={
            props.selectedBrand === null
              ? styles.selectedBrandButton
              : styles.brandButton
          }
          onClick={() => props.onBrandChange(null)}
        >
          All
        </button>
        <button
          className={
            props.selectedBrand === "Nike"
              ? styles.selectedBrandButton
              : styles.brandButton
          }
          onClick={() => props.onBrandChange("Nike")}
        >
          Nike
        </button>
        <button
          className={
            props.selectedBrand === "Adidas"
              ? styles.selectedBrandButton
              : styles.brandButton
          }
          onClick={() => props.onBrandChange("Adidas")}
        >
          Adidas
        </button>
        <button
          className={
            props.selectedBrand === "Puma"
              ? styles.selectedBrandButton
              : styles.brandButton
          }
          onClick={() => props.onBrandChange("Puma")}
        >
          Puma
        </button>
        <button
          className={
            props.selectedBrand === "Jordan"
              ? styles.selectedBrandButton
              : styles.brandButton
          }
          onClick={() => props.onBrandChange("Jordan")}
        >
          Jordan
        </button>
      </div>
      <NewSneakersImg selectedBrand={props.selectedBrand} />
    </div>
  );
};

export default NewArrivalsSneakers;
