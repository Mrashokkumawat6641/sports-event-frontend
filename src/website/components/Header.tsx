/** @format */

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Header.module.scss";
import {
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const handleFontChange = (delta: number) => {
    const newFontSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newFontSize);
    document.documentElement.style.fontSize = `${newFontSize}px`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1751574062/jzkc3uf4muotujy79d4e.png"
          alt="Logo"
          className={styles.logo}
        />

        <div className={styles.menuToggle} onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav
          className={`${styles.navLinks} ${navOpen ? styles.active : ""}`}
          onClick={() => setNavOpen(false)}
        >
          <a href="/registration" className={styles.navLink}>
            Registration
          </a>
          <a href="#pro" className={styles.navLink}>
            About Us
          </a>
          <a href="#brands" className={styles.navLink}>
            Contact Us
          </a>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Terms & Conditon</span>
          </div>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Sports</span>
          </div>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Location</span>
          </div>
        </nav>
      </div>

      <div className={styles.right}>
        <button className={styles.fontBtn} onClick={() => handleFontChange(2)}>
          <FaPlus />
        </button>
        <button className={styles.fontBtn} onClick={() => handleFontChange(-2)}>
          <FaMinus />
        </button>
        <button className={styles.helpBtn}>
          <FaQuestionCircle />
        </button>

        {user?.email && (
          <div className={styles.profileWrapper}>
            <button
              className={styles.profileBtn}
              onClick={() => setShowMenu((prev) => !prev)}
              aria-label="Profile"
            >
              <span className={styles.profileAvatar}>
                {user.photoUrl ? (
                  <img src={user.photoUrl} alt="avatar" />
                ) : (
                  user.email.charAt(0).toUpperCase()
                )}
              </span>
            </button>

            {showMenu && (
              <div className={styles.profileMenu}>
                <div className={styles.profileTopSection}>
                  <div className={styles.profileAvatarLarge}>
                    {user.photoUrl ? (
                      <img src={user.photoUrl} alt="avatar" />
                    ) : (
                      <span>{user.email.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className={styles.profileInfo}>
                    <div className={styles.profileName}>
                      {user.name || "Mr Ashok"}
                    </div>
                    <div className={styles.profileEmail}>{user.email}</div>
                  </div>
                </div>
                <div className={styles.menuDivider} />
                <div className={styles.menuList}>
                  <div className={styles.menuItem}>
                    <span className={styles.menuIconCircle}>
                      <FaUserCircle />
                    </span>{" "}
                    Passwords & Autofill
                  </div>
                  <div className={styles.menuItem}>
                    <span className={styles.menuIconCircle}>
                      <FaCog />
                    </span>{" "}
                    Manage Account
                  </div>
                  <div className={styles.menuItem}>
                    <span className={styles.menuIconCircle}>
                      <FaCog />
                    </span>{" "}
                    Customise Profile
                  </div>
                  <div className={styles.menuItem}>
                    <span className={styles.menuIconCircle}>
                      <FaCog />
                    </span>{" "}
                    Sync is On
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
