import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import styles from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />

        <nav>
          <Link
            to="/"
            className={props.activePage === "/" ? styles.active : ""}
            onClick={() => props.onPageChange("/")}
          >
            Home
          </Link>
          <Link
            to="/new-arrivals"
            className={
              props.activePage === "newArrivalsPage" ? styles.active : ""
            }
            onClick={() => props.onPageChange("newArrivalsPage")}
          >
            New Arrivals
          </Link>
          <Link
            to="/men"
            className={props.activePage === "men" ? styles.active : ""}
            onClick={() => props.onPageChange("men")}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={props.activePage === "women" ? styles.active : ""}
            onClick={() => props.onPageChange("women")}
          >
            Women
          </Link>
        </nav>
        <CartButton onShowCart={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;
