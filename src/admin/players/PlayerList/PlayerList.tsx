/** @format */

import React from "react";
import styles from "./PlayerList.module.scss";

const PlayerList = () => {
  return (
    <div className={styles.playerListWrapper}>
      <div className={styles.card}>
        <h2>Players</h2>
        <div className={styles.tablePlaceholder}>
          Player list table coming soon...
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
