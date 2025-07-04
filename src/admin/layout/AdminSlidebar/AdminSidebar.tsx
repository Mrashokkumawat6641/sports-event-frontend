/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";
import { Home, Users, Shield, Calendar, LogOut, Search } from "lucide-react";

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
        <Search size={18} />
        <input type="text" placeholder="Search" />
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Home size={20} /> Dashboard{" "}
        </NavLink>
        <NavLink
          to="/admin/players"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Users size={20} /> Players{" "}
        </NavLink>
        <NavLink
          to="/admin/teams"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Shield size={20} /> Teams{" "}
        </NavLink>
        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Calendar size={20} /> Events{" "}
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Calendar size={20} /> Results{" "}
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {" "}
          <Calendar size={20} /> Media{" "}
        </NavLink>
        <NavLink to="/admin/logout">
          {" "}
          <LogOut size={20} /> Logout{" "}
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
