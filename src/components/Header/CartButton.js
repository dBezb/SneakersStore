import CartIcon from "../../assets/CartIcon.png";
import styles from "./CartButton.module.css";

const CartButton = () => {
  return (
    <div>
      <button className={styles.button}>
        <img src={CartIcon} alt="CartIcon"></img>
      </button>
    </div>
  );
};

export default CartButton;
