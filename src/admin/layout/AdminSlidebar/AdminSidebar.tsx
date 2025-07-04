/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <img
          src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1751574062/jzkc3uf4muotujy79d4e.png"
          alt="User"
          className={styles.userAvatar}
        />
        <div>
          <div className={styles.userName}>Sports Event</div>
          <div className={styles.userEmail}>Sports@Event.in</div>
        </div>
      </div>
      <div className={styles.searchBox}>
        <FaSearch size={18} />
        <input type="text" placeholder="Search" />
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaHome size={20} /> Dashboard{" "}
        </NavLink>
        <NavLink
          to="/admin/players"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaUsers size={20} /> Players{" "}
        </NavLink>
        <NavLink
          to="/admin/teams"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaShieldAlt size={20} /> Teams{" "}
        </NavLink>
        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaCalendarAlt size={20} /> Events{" "}
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaCalendarAlt size={20} /> Results{" "}
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <FaCalendarAlt size={20} /> Media{" "}
        </NavLink>
        <NavLink to="/admin/logout">
          {" "}
          <FaSignOutAlt size={20} /> Logout{" "}
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
