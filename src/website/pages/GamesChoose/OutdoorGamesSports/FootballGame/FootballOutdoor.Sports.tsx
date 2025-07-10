/** @format */

import styles from "./FootballOutdoor.sports.module.scss";

export const FootballGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Football</h1>
        <p>
          The world’s most popular team sport played with passion and speed.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Football (also known as soccer) is a team sport played between two
          teams of 11 players using a spherical ball. The objective is to score
          by getting the ball into the opposing goal. It's known for its global
          fan base and events like the FIFA World Cup.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>Each team has 11 players including a goalkeeper.</li>
          <li>Match duration is 90 minutes (two halves of 45 minutes).</li>
          <li>Goals are scored when the ball fully crosses the goal line.</li>
          <li>Fouls, offsides, and handballs are penalized.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Work on passing accuracy and ball control.</li>
          <li>Understand positions like striker, midfielder, and defender.</li>
          <li>Practice stamina and sprint drills.</li>
          <li>Watch matches to learn strategy and formations.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?_gl=1*1xtr532*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDIwMDMkajQ3JGwwJGgw"
          alt="Football Match"
        />
        <img
          src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?_gl=1*bm7vw7*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDIwNDEkajkkbDAkaDA."
          alt="Football Stadium"
        />
        <img
          src="https://images.pexels.com/photos/718952/pexels-photo-718952.jpeg?_gl=1*lzpffm*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDIwNjkkajUzJGwwJGgw"
          alt="Football Stadium"
        />
      </section>
    </div>
  );
};
