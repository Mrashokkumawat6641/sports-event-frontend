/** @format */

import React from "react";
import styles from "./AdminHeader.module.scss";

const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Sports Event</h1>
        <span className={styles.date}>Monday, October 23, 2023</span>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img
            src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1751574062/jzkc3uf4muotujy79d4e.png"
            alt="Profile"
          />
          <div className={styles.profileInfo}>
            <div className={styles.profileName}>Ashok</div>
            <div className={styles.profileEmail}>Ashok@k.in</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
