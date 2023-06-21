import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.logopic} src="screen.png" alt="logo" />
      <h1 className={styles.title}>Online Experiences</h1>
      <h2 className={styles.subtitle}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h2>
    </div>
  );
}
export default Hero;
