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
          className={`${styles.button} ${
            props.activePage === "home" ? styles.active : ""
          }`}
          onClick={() => props.onPageChange("home")}
        >
          Home
        </button>
        <button
          className={`${styles.button} ${
            props.activePage === "newArrivalsPage" ? styles.active : ""
          }`}
          onClick={() => props.onPageChange("newArrivalsPage")}
        >
          New Arrivals
        </button>
        <button
          className={`${styles.button} ${
            props.activePage === "men" ? styles.active : ""
          }`}
          onClick={() => props.onPageChange("men")}
        >
          Men
        </button>
        <button
          className={`${styles.button} ${
            props.activePage === "women" ? styles.active : ""
          }`}
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
