/** @format */

import React, { useState, useEffect } from "react";
import styles from "./IndoorGames.sports.module.scss";
import { FaTableTennis, FaChess, FaVolleyballBall } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const indoorGames = [
  {
    title: "Table Tennis",
    description:
      "Fast-paced rallies and lightning reflexes. Master spin and precision at the table.",
    image:
      "https://blog.playo.co/wp-content/uploads/2017/09/Sharath-Kamal-Indian-Table-Tennis-Players.jpg",
    icon: <FaTableTennis />,
  },
  {
    title: "Chess",
    description:
      "Unleash strategic brilliance in every move. A battle of minds played in silence.",
    image:
      "https://media.istockphoto.com/id/2148071253/photo/chess-game-at-home-checkmate.jpg?s=612x612&w=0&k=20&c=sQNSGy2SVdA2UWizhOIA2z3xngIzfTUexXwsyw4tw9o=",
    icon: <FaChess />,
  },
  {
    title: "Badminton",
    description:
      "Indoor smashes and rally wars. Test agility and precision on the court.",
    image:
      "https://t3.ftcdn.net/jpg/03/10/62/12/360_F_310621281_foEqKBGtGlNWFQRePgdF5BpLOFyTsnzO.jpg",
    icon: <FaTableTennis />,
  },
  {
    title: "Carrom",
    description:
      "Strike and pocket the coins with skill and precision. A classic indoor board game.",
    image:
      "https://www.shutterstock.com/image-photo/focus-on-coins-top-view-600nw-1967985457.jpg",
    icon: <FaChess />,
  },
  {
    title: "Wrestling",
    description:
      "Test your strength and technique in this intense indoor sport.",
    image:
      "https://sm.ign.com/ign_in/photo/t/the-top-25/the-top-25-wrestlers-of-all-time_wfqa.jpg",
    icon: <FaVolleyballBall />,
  },
];

export const IndoorGamesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedGameIdx, setSelectedGameIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const list = document.querySelector("." + styles["indoor-games"] + " ul");
    const items = list?.querySelectorAll("li");

    const setIndex = (event: Event) => {
      const target = event.target as HTMLElement;
      const closest = target.closest("li");
      if (!closest || !list || !items) return;
      const index = Array.from(items).indexOf(closest);

      const cols = Array.from(items).map((_, i) => {
        (items[i] as HTMLElement).dataset.active = (i === index).toString();
        return i === index ? "10fr" : "1fr";
      });
      (list as HTMLElement).style.gridTemplateColumns = cols.join(" ");
    };

    list?.addEventListener("pointermove", setIndex);
    list?.addEventListener("click", setIndex);

    return () => {
      list?.removeEventListener("pointermove", setIndex);
      list?.removeEventListener("click", setIndex);
    };
  }, []);

  return (
    <section className={styles["indoor-games"]}>
      <h1 className={styles.title}>Indoor Games</h1>
      <ul>
        {indoorGames.map((game, idx) => (
          <li
            key={idx}
            data-active={activeIdx === idx}
            onMouseEnter={() => setActiveIdx(idx)}
            onFocus={() => setActiveIdx(idx)}
            tabIndex={0}
          >
            <div className={styles["vertical-title"]}>
              {game.icon}
              <span>{game.title}</span>
            </div>
            <img src={game.image} alt={game.title} />
            <div className={styles["card-content"]}>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <a href="#">
                <span>Watch now</span>
                {game.icon}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.gameSelectGrid}>
        {indoorGames.map((game, idx) => (
          <div
            key={idx}
            className={styles.gameSelectBox}
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => {
              if (game.title === "Table Tennis") {
                navigate("/indoor-games/table-tennis");
              } else if (game.title === "Chess") {
                navigate("/indoor-games/chess");
              } else if (game.title === "Badminton") {
                navigate("/indoor-games/Badminton");
              } else if (game.title === "Carrom") {
                navigate("/indoor-games/Carrom");
              } else if (game.title === "Wrestling") {
                navigate("/indoor-games/wrestling");
              } else {
                setSelectedGameIdx(idx);
              }
            }}
          >
            <img
              src={game.image}
              alt={game.title}
              className={styles.gameImgBg}
            />
            <div className={styles.gameImgOverlay}></div>
            <input
              type="radio"
              id={`select-game-${idx}`}
              name="indoorGame"
              className={styles.roundRadio}
              checked={selectedGameIdx === idx}
              onChange={() => setSelectedGameIdx(idx)}
              style={{
                width: 22,
                height: 22,
                accentColor: "#00e6e6",
                borderRadius: "50%",
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 3,
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <label htmlFor={`select-game-${idx}`} className={styles.gameLabel}>
              <span>{game.title}</span>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};
