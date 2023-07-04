import styles from "./Layout.module.css";
import SneackersHeader from "../../assets/SneackersHeader.png";
import SneackersFind from "../../assets/SneackersFind.png";

const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <h1>
          Puma <br /> Running SX
        </h1>
        <h3 className={styles.text}>
          The shoe that moved mountains for eternity and still does so <br />
          with a swift touch of modernism
        </h3>
        <h3>Only 60$</h3>
        <button className={styles.button}>Add to cart</button>
        <br></br>
        <img
          src={SneackersFind}
          alt="SneackersFind"
          className={styles["img-under"]}
        />
      </div>
      <div>
        <img
          src={SneackersHeader}
          alt="SneackersHeader"
          className={styles["img-header"]}
        />
      </div>
    </>
  );
};

export default Layout;
