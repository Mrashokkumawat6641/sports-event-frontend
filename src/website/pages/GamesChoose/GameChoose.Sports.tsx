/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GameChooseSports.module.scss";

const GameChooseSports = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"indoor" | "outdoor" | null>(null);

  return (
    <div className={styles.chooseWrapper}>
      <h2 className={styles.title}>Choose Game Type</h2>
      <div className={styles.boxContainer}>
        <div className={styles.boxWithRadio}>
          <div
            className={styles.box}
            tabIndex={0}
            role="button"
            onClick={() => {
              setSelected("indoor");
              navigate("/indoor-games");
            }}
            style={{ position: "relative" }}
          >
            <input
              type="radio"
              id="choose-indoor"
              name="gameType"
              checked={selected === "indoor"}
              onChange={() => setSelected("indoor")}
              style={{
                width: 22,
                height: 22,
                accentColor: "#00e6e6",
                borderRadius: "50%",
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 2,
              }}
            />
            <label htmlFor="choose-indoor" style={{ display: "none" }}></label>
            <span className={styles.boxLabel}>Indoor</span>
          </div>
        </div>
        <div className={styles.boxWithRadio}>
          <div
            className={styles.box}
            tabIndex={0}
            role="button"
            onClick={() => {
              setSelected("outdoor");
              navigate("/outdoor-games");
            }}
            style={{ position: "relative" }}
          >
            <input
              type="radio"
              id="choose-outdoor"
              name="gameType"
              checked={selected === "outdoor"}
              onChange={() => setSelected("outdoor")}
              style={{
                width: 22,
                height: 22,
                accentColor: "#00e6e6",
                borderRadius: "50%",
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 2,
              }}
            />
            <label htmlFor="choose-outdoor" style={{ display: "none" }}></label>
            <span className={styles.boxLabel}>Outdoor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameChooseSports;
