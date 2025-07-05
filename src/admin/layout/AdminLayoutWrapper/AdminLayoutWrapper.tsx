/** @format */

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./AdminLayoutWrapper.module.scss";
import AdminSidebar from "../AdminSlidebar/AdminSidebar";
import AdminHeader from "../AdminHeader/AdminHeader";

const AdminLayoutWrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (window.innerWidth > 480) setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.layout}>
      <AdminSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        isMobile={isMobile}
      />
      <div
        className={styles.main}
        style={{
          marginLeft: !sidebarOpen || isMobile ? 0 : undefined,
          width: !sidebarOpen || isMobile ? "100%" : undefined,
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <AdminHeader
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayoutWrapper;
