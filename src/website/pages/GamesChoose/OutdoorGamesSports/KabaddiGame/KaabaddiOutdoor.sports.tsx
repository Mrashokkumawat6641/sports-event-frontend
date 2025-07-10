/** @format */

import styles from "./KaabaddiOutdoor.sports.module.scss";

export const KabaddiGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Kabaddi</h1>
        <p>
          A thrilling Indian contact sport that requires strength, strategy, and
          breath control.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Kabaddi is a team sport played between two teams of seven players. The
          goal is for a "raider" to enter the opponent’s half, tag as many
          defenders as possible, and return safely — all while holding their
          breath and chanting "Kabaddi Kabaddi".
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>Each team has 7 players on the field and 5 as substitutes.</li>
          <li>
            The raider must chant "Kabaddi" and tag opponents before returning.
          </li>
          <li>One point is earned for each defender tagged.</li>
          <li>If the raider is caught, the opposing team scores a point.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Focus on breath control and stamina.</li>
          <li>Practice quick footwork and dodging skills.</li>
          <li>Build team strategies for raiding and defense.</li>
          <li>Always keep your body low and balanced while raiding.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://wallpapers.com/images/high/u-mumba-kabaddi-kmdg1na9154e3wla.webp"
          alt="Kabaddi match"
        />
        <img
          src="https://wallpapers.com/images/high/kabaddi-asian-games-uaqch130xexowyut.webp"
          alt="Kabaddi players"
        />
        <img
          src="https://wallpapers.com/images/high/kabaddi-ajay-thakur-31qcsprltgg657qa.webp"
          alt="Kabaddi players"
        />
      </section>
    </div>
  );
};
