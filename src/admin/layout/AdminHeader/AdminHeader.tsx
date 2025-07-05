/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { parseJwt } from "../../../utils/jwt";
import styles from "./AdminHeader.module.scss";

const AdminHeader = ({
  isMobile,
  sidebarOpen,
  setSidebarOpen,
}: {
  isMobile?: boolean;
  sidebarOpen?: boolean;
  setSidebarOpen?: (v: boolean) => void;
}) => {
  // Get user info from context and JWT
  const { user }: any = useContext(AuthContext);
  let name = "Admin";
  let email = "admin@admin.com";
  if (user?.token) {
    const payload = parseJwt(user.token);
    // Try all possible keys for admin name/email
    if (payload?.name) name = payload.name;
    else if (payload?.username) name = payload.username;
    else if (payload?.user) name = payload.user;
    if (payload?.email) email = payload.email;
    else if (payload?.mail) email = payload.mail;
    else if (payload?.userEmail) email = payload.userEmail;
  }

  // Get current date and weekday
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Sports Event</h1>
        <span className={styles.date}>{`${weekday}, ${dateStr}`}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img
            src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1751574062/jzkc3uf4muotujy79d4e.png"
            alt="Profile"
          />
          <div className={styles.profileInfo}>
            <div className={styles.profileName}>{name}</div>
            <div className={styles.profileEmail}>{email}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
