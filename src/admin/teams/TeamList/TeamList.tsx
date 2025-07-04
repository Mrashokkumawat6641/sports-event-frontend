/** @format */

import React from "react";
import styles from "./TeamList.module.scss";

const TeamList = () => {
  return (
    <div className={styles.teamListWrapper}>
      <div className={styles.card}>
        <h2>Teams</h2>
        <div className={styles.tablePlaceholder}>
          Team list table coming soon...
        </div>
      </div>
    </div>
  );
};

export default TeamList;
