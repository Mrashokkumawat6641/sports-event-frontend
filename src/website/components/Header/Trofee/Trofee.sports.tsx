/** @format */

import React from "react";
import style from "./Trofee.sports.module.scss";

const TrophyPage = () => {
  return (
    <div className={style.container}>
      <div className={style.titleSection}>
        <h1 className={style.title}>
          🏆 Trophy <span style={{ color: "white" }}>&</span> Prizes
        </h1>
        <p className={style.subtitle}>
          Celebrating Excellence in Indoor and Outdoor Games
        </p>
      </div>

      <div className={style.prizesContainer}>
        <div className={style.firstPrize}>
          <img
            src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1752681676/e5lw52kdvjezcznvettq.png"
            alt="First Prize"
          />
          <h2>1st Prize</h2>
          <p>Outdoor: ₹1,00,000</p>
          <p>Indoor: ₹71,000</p>
        </div>

        <div className={style.lowerPrizes}>
          <div className={style.secondPrize}>
            <img
              src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1752682969/c13tguogaruafc1unpan.png"
              alt="Second Prize"
            />
            <h3>2nd Prize</h3>
            <p>Outdoor: ₹71,000</p>
            <p>Indoor: ₹51,000</p>
          </div>

          <div className={style.thirdPrize}>
            <img
              src="https://res.cloudinary.com/dpxvet5ra/image/upload/v1752683048/xu1dultmnvsqqiihe9jq.png"
              alt="Third Prize"
            />
            <h3>3rd Prize</h3>
            <p>Outdoor: ₹51,000</p>
            <p>Indoor: ₹31,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrophyPage;
