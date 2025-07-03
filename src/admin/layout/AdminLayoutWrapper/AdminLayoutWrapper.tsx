/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AdminLayoutWrapper.module.scss";
import AdminSidebar from "../AdminSlidebar/AdminSidebar";
import AdminHeader from "../AdminHeader/AdminHeader";

const AdminLayoutWrapper = () => {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <div className={styles.main}>
        <AdminHeader />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayoutWrapper;
