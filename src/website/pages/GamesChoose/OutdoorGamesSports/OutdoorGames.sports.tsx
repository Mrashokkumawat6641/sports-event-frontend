/** @format */

import React, { useEffect, useState } from "react";
import styles from "./OutdoorGames.sports.module.scss";
import {
  FaFutbol,
  FaVolleyballBall,
  FaBasketballBall,
  FaBaseballBall,
  FaCompactDisc,
  FaHorse,
  FaBullseye,
  FaRunning,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const outdoorGames = [
  {
    title: "Cricket",
    description:
      "Experience the thrill of batting, bowling, and fielding in the open air.",
    image:
      "https://static.cricbuzz.com/a/img/v1/750x422/i1/c716320/south-africa-celebrate-winning-icc-wtc-final-2025.jpg",
    icon: <FaBaseballBall />,
  },
  {
    title: "Football",
    description:
      "Fast-paced action and teamwork on the field. Score goals and defend your turf.",
    image:
      "https://www.sportsboom.com/_next/image?url=https%3A%2F%2Fassets.sportsboom.com%2FGetty_Images_525841728_96eb165398.jpg&w=3840&q=75",
    icon: <FaFutbol />,
  },
  {
    title: "Basketball",
    description:
      "Dribble, shoot, and dunk your way to victory under the open sky.",
    image:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?cs=srgb&dl=pexels-markusspiske-1752757.jpg&fm=jpg",
    icon: <FaBasketballBall />,
  },
  {
    title: "Kabaddi",
    description:
      "Dribble, shoot, and dunk your way to victory under the open sky.",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2019-10/14/full/1571071624-4895.jpg",
    icon: <FaRunning />,
  },
  {
    title: "Volleyball",
    description:
      "Dribble, shoot, and dunk your way to victory under the open sky.",
    image:
      "https://volleycountry.com/wp-content/uploads/2020/11/olympics-volleyball-rio.jpg",
    icon: <FaVolleyballBall />,
  },
  {
    title: "Athletics",
    description:
      "Run, jump, and throw your way to glory in various track and field events.",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/avinash-sable-132453221-16x9.jpg?VersionId=TmgVpvV55qX74wQGW4TpPFVjwR14EJ6W&size=690:388",
    icon: <FaRunning />,
  },
  {
    title: "Archery",
    description:
      "Test your precision and focus with bow and arrow in this ancient sport.",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/udhh6oqddjuajbcxyqnz",
    icon: <FaBullseye />,
  },
  {
    title: "Horse Riding",
    description: "Experience the thrill and elegance of equestrian sports.",
    image: "https://stabletalk.com/wp-content/uploads/2023/10/Darry-Lou.jpg",
    icon: <FaHorse />,
  },
  {
    title: "Frisbee",
    description: "Enjoy fast-paced fun and teamwork with flying discs.",
    image:
      "https://greatershepparton.com.au/images/assets/files/images/news/2022/10/DSC_2105_-_Photo_Credit_Mark_Milne_6~2000_auto_-1_80_f21e.jpg",
    icon: <FaCompactDisc />,
  },
];

const OutdoorGamesSection = () => {
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
    <section className={styles["outdoor-games"]}>
      <h1 className={styles.title}>Outdoor Games</h1>
      <ul>
        {outdoorGames.map((game, idx) => (
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
        {outdoorGames.map((game, idx) => (
          <div
            key={idx}
            className={styles.gameSelectBox}
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => {
              if (game.title === "Cricket") {
                navigate("/outdoor-games/Cricket");
              } else if (game.title === "Football") {
                navigate("/outdoor-games/Football");
              } else if (game.title === "Basketball") {
                navigate("/outdoor-games/Basketball");
              } else if (game.title === "Kabaddi") {
                navigate("/outdoor-games/Kabaddi-sports");
              } else if (game.title === "Volleyball") {
                navigate("/outdoor-games/VolleyBall-sports");
              } else if (game.title === "Athletics") {
                navigate("/outdoor-games/Athletics-sports");
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

export default OutdoorGamesSection;
