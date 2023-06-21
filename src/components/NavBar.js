import React from "react";
import styles from "./Nav.module.css";

function NavBar() {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src="./Vector.png" alt="logo" />
    </div>
  );
}
export default NavBar;
