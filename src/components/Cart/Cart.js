import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import styles from "./Cart.module.css";
import Modal from "./Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.price} x {item.amount}
          <button
            onClick={() => cartCtx.removeItem(item.id)}
            className={styles["delete-button"]}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total:</span>
        <span>{cartCtx.totalAmount}$</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
