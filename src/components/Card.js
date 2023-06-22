import React from "react";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.cardpic1} src="image 12.png" alt="logo" />
      <div className={styles.underpic}>
        <img className={styles.star} src="star 1.png" alt="star" />
        <p className={styles.rating}>5.0</p>
        <p className={styles.number}>(6)</p>
        <img className={styles.dot} src="Ellipse 6.png" alt="dot" />
        <p className={styles.location}>USA</p>
      </div>
      <h1 className={styles.title}>Life lessons with Katie Zaferes</h1>
      <p className={styles.price}>
        From $136 / <span className={styles.person}>person</span>
      </p>
    </div>
  );
}
export default Card;
