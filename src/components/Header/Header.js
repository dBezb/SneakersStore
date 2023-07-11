import React from "react";
import Logo from "../../assets/Logo.png";
import styles from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />
        <button
          className={styles.button}
          onClick={() => props.onPageChange("home")}
        >
          Home
        </button>
        <button
          className={styles.button}
          onClick={() => props.onPageChange("newArrivalsPage")}
        >
          New Arrivals
        </button>
        <button
          className={styles.button}
          onClick={() => props.onPageChange("men")}
        >
          Men
        </button>
        <button
          className={styles.button}
          onClick={() => props.onPageChange("women")}
        >
          Women
        </button>
        <CartButton />
      </header>
    </>
  );
};

export default Header;
