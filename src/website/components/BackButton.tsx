/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";

const BackButton = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.backBtn}
      onClick={() => navigate(to)}
      aria-label="Go Back"
      style={{
        position: "absolute",
        top: 18,
        left: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#00e6e6" />
        <path
          d="M18 22L12 16L18 10"
          stroke="#18202c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackButton;
