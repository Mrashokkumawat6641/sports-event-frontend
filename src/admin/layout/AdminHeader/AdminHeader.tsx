/** @format */

import React from "react";
import styles from "./AdminHeader.module.scss";

const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Admin Panel</h1>
    </header>
  );
};

export default AdminHeader;
