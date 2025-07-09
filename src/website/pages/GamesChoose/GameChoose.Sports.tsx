/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GameChooseSports.module.scss";

const GameChooseSports = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.chooseWrapper}>
      <h2 className={styles.title}>Choose Game Type</h2>
      <div className={styles.boxContainer}>
        <div
          className={styles.box}
          tabIndex={0}
          role="button"
          onClick={() => navigate("/indoor-games")}
        >
          <span className={styles.boxLabel}>Indoor</span>
        </div>
        <div
          className={styles.box}
          tabIndex={0}
          role="button"
          onClick={() => navigate("/outdoor-games")}
        >
          <span className={styles.boxLabel}>Outdoor</span>
        </div>
      </div>
    </div>
  );
};

export default GameChooseSports;
