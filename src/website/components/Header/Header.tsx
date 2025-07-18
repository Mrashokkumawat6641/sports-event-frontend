/** @format */

import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Header.module.scss";
import { uploadUserProfileImage } from "../../service/userImageUpload.service";
import { updateUserProfilePhoto } from "../../service/userProfile.service";
import {
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaBars,
  FaTimes,
  FaCamera,
} from "react-icons/fa";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem("profileImage") || user?.photoUrl || null;
  });

  React.useEffect(() => {
    if (user?.photoUrl) {
      setProfileImage(user.photoUrl);
      localStorage.setItem("profileImage", user.photoUrl);
    }
  }, [user?.photoUrl]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const data = await uploadUserProfileImage(file);
      if (data && data.url) {
        setProfileImage(data.url);
        localStorage.setItem("profileImage", data.url);
        if (user && user._id) {
          await updateUserProfilePhoto(user._id, data.url);
          if (setUser) setUser({ ...user, photoUrl: data.url });
        }
      }
    } catch (err: any) {
      setError(typeof err === "string" ? err : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

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
          <a href="/Header/SportsEventAboutUs" className={styles.navLink}>
            About Us
          </a>
          <a href="/Header/SportsEventContactUs" className={styles.navLink}>
            Contact Us
          </a>
          <a href="/Header/Trofee" className={styles.navLink}>
            Trofee
          </a>
          <a href="/Header/TermsAndConditions" className={styles.navLink}>
            Terms & Conditon
          </a>
          <a href="/choose-game" className={styles.navLink}>
            Sports
          </a>
          <a href="/Header/SportsEventLocation" className={styles.navLink}>
            Location
          </a>
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
              <span
                className={styles.profileAvatar + " " + styles.roundedAvatar}
                style={{ cursor: "pointer", position: "relative" }}
                title="Profile"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="avatar"
                    className={styles.avatarImg}
                  />
                ) : (
                  <span className={styles.avatarInitial}>
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                )}
              </span>
            </button>

            {showMenu && (
              <div
                className={styles.profileMenu + " " + styles.profileMenuModern}
              >
                <div className={styles.profileTopSection}>
                  <div
                    className={
                      styles.profileAvatarLarge +
                      " " +
                      styles.roundedAvatarLarge
                    }
                    style={{ position: "relative" }}
                    title="Upload profile image"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="avatar"
                        className={styles.avatarImgLarge}
                      />
                    ) : (
                      <span className={styles.avatarInitialLarge}>
                        {user.email.charAt(0).toUpperCase()}
                      </span>
                    )}
                    <span
                      onClick={handleAvatarClick}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        background: "#23202b",
                        borderRadius: "50%",
                        width: 28,
                        height: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 4px #0002",
                        border: "2px solid #fff",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                      title="Change profile image"
                    >
                      <FaCamera style={{ color: "#00e6e6", fontSize: 16 }} />
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      disabled={uploading}
                    />
                    {uploading && (
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(0,0,0,0.4)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          fontSize: 12,
                          zIndex: 3,
                        }}
                      >
                        Uploading...
                      </span>
                    )}
                  </div>
                  {error && (
                    <div
                      style={{
                        color: "#ff5252",
                        textAlign: "center",
                        margin: "8px 0 0 0",
                        fontSize: 13,
                      }}
                    >
                      {error}
                    </div>
                  )}
                  <div className={styles.profileInfo}>
                    <div className={styles.profileName}>
                      {user.name || "Mr Ashok"}
                    </div>
                    <div className={styles.profileEmail}>{user.email}</div>
                  </div>
                </div>
                <div className={styles.menuDivider} />
                <div className={styles.menuList}>
                  <div
                    className={styles.menuItem + " " + styles.menuItemModern}
                  >
                    <span
                      className={
                        styles.menuIconCircle +
                        " " +
                        styles.menuIconCircleModern
                      }
                    >
                      <FaUserCircle />
                    </span>
                    Passwords & Autofill
                  </div>
                  <div
                    className={styles.menuItem + " " + styles.menuItemModern}
                  >
                    <span
                      className={
                        styles.menuIconCircle +
                        " " +
                        styles.menuIconCircleModern
                      }
                    >
                      <FaCog />
                    </span>
                    Manage Account
                  </div>
                  <div
                    className={styles.menuItem + " " + styles.menuItemModern}
                  >
                    <span
                      className={
                        styles.menuIconCircle +
                        " " +
                        styles.menuIconCircleModern
                      }
                    >
                      <FaCog />
                    </span>
                    Customise Profile
                  </div>
                  <div
                    className={styles.menuItem + " " + styles.menuItemModern}
                  >
                    <span
                      className={
                        styles.menuIconCircle +
                        " " +
                        styles.menuIconCircleModern
                      }
                    >
                      <FaCog />
                    </span>
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
