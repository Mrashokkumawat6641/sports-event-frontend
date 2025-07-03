/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

const AdminSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>🏆 SportAdmin</div>
      <nav className={styles.nav}>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/players"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Players
        </NavLink>
        <NavLink
          to="/admin/teams"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Teams
        </NavLink>
        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Events
        </NavLink>
        <NavLink to="/admin/logout">Logout</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
