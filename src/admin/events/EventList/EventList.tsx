/** @format */

import React from "react";
import styles from "./EventList.module.scss";

const EventList = () => {
  return (
    <div className={styles.eventListWrapper}>
      <div className={styles.card}>
        <h2>Events</h2>
        <div className={styles.tablePlaceholder}>
          Event list table coming soon...
        </div>
      </div>
    </div>
  );
};

export default EventList;
