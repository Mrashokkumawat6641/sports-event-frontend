/** @format */

import React from "react";
import styles from "./RegistrationComplete.sports.module.scss";
import { useNavigate } from "react-router-dom";

const RegistrationComplete = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.completeWrapper}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#27AE60" />
            <path
              d="M20 34L28 42L44 26"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className={styles.title}>Registration Successful!</h2>
        <p className={styles.message}>
          Thank you for registering. Your form has been submitted and payment is
          confirmed.
        </p>
        <button className={styles.homeBtn} onClick={() => navigate("/")}>
          Go to Home
        </button>
        <h3
          className={styles.linkHeading}
          onClick={() => navigate("/registration/PlayerRegistrationDetails")}
        >
          new player registration in same sports{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>
            Click Here. !
          </span>
        </h3>
        <h3
          className={styles.linkHeading}
          style={{ marginTop: 16 }}
          onClick={() => navigate("/registration/ChooseGame_registration")}
        >
          another game registration{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>
            Click Here. !
          </span>
        </h3>
      </div>
    </div>
  );
};

export default RegistrationComplete;
