/** @format */

import React from "react";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <h3>Total Players</h3>
          <p>10,256</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Teams</h3>
          <p>758</p>
        </div>
        <div className={styles.statCard}>
          <h3>Ongoing Matches</h3>
          <p>16</p>
        </div>
        <div className={styles.statCard}>
          <h3>New Registrations</h3>
          <p>124</p>
        </div>
      </div>
      <div className={styles.sectionsRow}>
        <div className={styles.sectionLeft}>
          <h4>Upcoming Matches</h4>
          <ul>
            <li>PSG vs MU - 3:30 PM</li>
            <li>Real Madrid vs Barcelona - 6:00 PM</li>
            <li>Liverpool vs Chelsea - 8:00 PM</li>
          </ul>
        </div>
        <div className={styles.sectionRight}>
          <h4>Top Scorers</h4>
          <ul>
            <li>1. Erling Haaland</li>
            <li>2. Lionel Messi</li>
            <li>3. Neymar Jr</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
