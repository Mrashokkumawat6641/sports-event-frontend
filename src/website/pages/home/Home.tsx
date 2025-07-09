/** @format */

import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          THE ULTIMATE <span className={styles.accent}>AI-POWERED</span>
          <br />
          SPORTS OPERATIONS ENGINE
        </h1>
        <p className={styles.heroSubtitle}>
          Intelligent software for sports league scheduling, tournament
          management, and experiential sponsorship for brands.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#role" className={styles.ctaBtn}>
            CHOOSE YOUR ROLE{" "}
            <span style={{ fontSize: "1.2em", marginLeft: 6 }}>&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
