/** @format */

import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { useRegistration } from "../../context/registration/RegistrationContext";
import styles from "./FillGameDetails.sports.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const INDOOR_GAMES = [
  "Badminton",
  "Table Tennis",
  "Chess",
  "Carrom",
  "Wrestling",
];
const OUTDOOR_GAMES = [
  "Cricket",
  "Football",
  "Basketball",
  "Kabaddi",
  "Volleyball",
  "Athletics",
];

const FillGameDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setData, data } = useRegistration();
  const selectedGameType = (data?.game?.selectedGameType ||
    location.state?.selectedGameType) as "indoor" | "outdoor" | null;

  const [selectedGame, setSelectedGame] = useState(
    data?.details?.selectedGame || ""
  );

  const gameList = selectedGameType === "indoor" ? INDOOR_GAMES : OUTDOOR_GAMES;

  const handleNext = () => {
    if (selectedGame) {
      setData({ details: { selectedGameType, selectedGame } });
      navigate("/registration/PlayerRegistrationDetails");
    }
  };

  return (
    <div className={styles.fillGameWrapper} style={{ position: "relative" }}>
      <BackButton to="/registration/ChooseGame_registration" />
      <h2 className={styles.heading}>
        Choose <span>Sports</span> Name
      </h2>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="game-select">
          Select Game
        </label>
        <select
          id="game-select"
          className={styles.select}
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
        >
          <option value="">-- Select --</option>
          {gameList.map((game) => (
            <option key={game} value={game}>
              {game}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        className={styles.nextBtn}
        style={{ marginTop: "1.5rem" }}
        disabled={!selectedGame}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default FillGameDetails;
