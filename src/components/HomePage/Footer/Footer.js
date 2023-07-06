import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <hr className={styles.line} />
      </div>
      <div className={styles.section}>
        <img src={Logo} alt="Logo" />
        <p className={styles.text}>
          We don’t just sell shoes, we sell memories and collectibles.
          <br /> We collect the best in the best with an attention to all little
          details.
          <br /> we know that shoes speaks louder than words that’s why we’ve
          mastered the
          <br />
          science of good sneakers.
        </p>
        <p className={styles.copyright}>
          Copyright 2023 © by Dmytro Bezborodko
        </p>
      </div>
    </div>
  );
};

export default Footer;
