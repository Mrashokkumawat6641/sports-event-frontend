/** @format */

import React, { useState } from "react";
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
  FaImage,
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
  const [search, setSearch] = useState("");
  const navItems = [
    { label: "Dashboard", to: "/admin/dashboard", icon: <FaHome size={20} /> },
    { label: "Players", to: "/admin/players", icon: <FaUsers size={20} /> },
    { label: "Teams", to: "/admin/teams", icon: <FaShieldAlt size={20} /> },
    { label: "Events", to: "/admin/events", icon: <FaCalendarAlt size={20} /> },
    {
      label: "Results",
      to: "/admin/ScoreList",
      icon: <FaSearch size={20} />, // Unique icon for Results
    },
    { label: "Gallery", to: "/admin/gallery", icon: <FaImage size={20} /> },
    { label: "Logout", to: "/admin/logout", icon: <FaSignOutAlt size={20} /> },
  ];
  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

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
          </div>
          <div className={styles.searchBox}>
            <FaSearch size={18} />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <nav className={styles.nav}>
            {filteredNav.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.text}>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </>
      )}
    </aside>
  );
};

export default AdminSidebar;
