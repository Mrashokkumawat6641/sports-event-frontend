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
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AdminSidebar = ({
  open,
  setOpen,
  isMobile,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  isMobile?: boolean;
}) => {
  return (
    <aside
      className={`${styles.sidebar} ${open ? styles.open : styles.closed} ${
        isMobile ? styles.mobile : ""
      }`}
      style={
        isMobile
          ? {
              position: "fixed",
              zIndex: 2000,
              left: 0,
              top: 0,
              height: "100vh",
              width: open ? 220 : 60,
              background: "#f7f8fa",
              transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
            }
          : {}
      }
    >
      {/* Header with hamburger/cross icon */}
      {isMobile && !open && (
        <button
          className={styles.sidebarToggleBtn}
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
          style={{
            position: "fixed",
            top: 14,
            left: 360,
            zIndex: 2100,
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            color: "#222",
            padding: 0,
          }}
        >
          <FaBars size={24} color="#222" />
        </button>
      )}
      {isMobile && open && (
        <div
          style={{
            width: "100%",
            height: 56,
            top: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 10px",
            borderBottom: "1px solid #eee",
            position: "relative",
            background: "#f7f8fa",
            zIndex: 2100,
          }}
        >
          <button
            className={styles.sidebarToggleBtn}
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              color: "#222",
              padding: 0,
              marginLeft: "auto",
            }}
          >
            <FaTimes size={24} color="#222" />
          </button>
        </div>
      )}
      {open && (
        <>
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
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.icon}>
                <FaHome size={20} />
              </span>
              <span className={styles.text}>Dashboard</span>
            </NavLink>
            <NavLink
              to="/admin/players"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaUsers size={20} /> Players
            </NavLink>
            <NavLink
              to="/admin/teams"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaShieldAlt size={20} /> Teams
            </NavLink>
            <NavLink
              to="/admin/events"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaCalendarAlt size={20} /> Events
            </NavLink>
            <NavLink
              to="/admin/events"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaCalendarAlt size={20} /> Results
            </NavLink>
            <NavLink
              to="/admin/events"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaCalendarAlt size={20} /> Media
            </NavLink>
            <NavLink to="/admin/logout">
              <FaSignOutAlt size={20} /> Logout
            </NavLink>
          </nav>
        </>
      )}
    </aside>
  );
};

export default AdminSidebar;
