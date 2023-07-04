import React from "react";
import Logo from "../../assets/Logo.png";
import styles from "./Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />
        <button className={styles.button}>New Arrivals</button>
        <button className={styles.button}>Men</button>
        <button className={styles.button}>Women</button>
        <button className={styles.button}>Kids</button>
        <CartButton />
      </header>
    </>
  );
};

export default Header;
