/** @format */

import React, { ReactNode } from "react";
import styles from "./AdminLayoutWrapper.module.scss";
import AdminSidebar from "../AdminSlidebar/AdminSidebar";
import AdminHeader from "../AdminHeader/AdminHeader";

interface AdminLayoutWrapperProps {
  children: ReactNode;
}

const AdminLayoutWrapper = ({ children }: AdminLayoutWrapperProps) => {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <div className={styles.main}>
        <AdminHeader />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayoutWrapper;
