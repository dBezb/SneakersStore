import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../../assets/CartIcon.png";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <div>
      <button className={styles.button} onClick={props.onShowCart}>
        <img src={CartIcon} alt="CartIcon"></img>
      </button>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </div>
  );
};

export default CartButton;
