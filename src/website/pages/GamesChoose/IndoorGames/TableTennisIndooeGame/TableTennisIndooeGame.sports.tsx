/** @format */

import styles from "./TableTennisIndooeGame.sports.module.scss";

export const TableTennisPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Table Tennis</h1>
        <p>Precision. Reflex. Power. Experience the thrill of the rally!</p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Table Tennis, also known as Ping Pong, is a fast-paced indoor sport
          where two or four players hit a lightweight ball across a table using
          small paddles. The goal is to score points by landing the ball on the
          opponent's side of the table.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Game Rules</h2>
        <ul>
          <li>Each game is played to 11 points.</li>
          <li>Players alternate serves every 2 points.</li>
          <li>First to reach 11 with 2-point lead wins.</li>
          <li>Matches are typically best of 5 or 7 games.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Focus on ball control over power.</li>
          <li>Learn the basic forehand and backhand strokes.</li>
          <li>Keep your stance low and balanced.</li>
          <li>Practice serves and returns regularly.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/8933713/pexels-photo-8933713.jpeg?_gl=1*qarvz4*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDAxMTYkajgkbDAkaDA."
          alt="Table Tennis"
        />
        <img
          src="https://images.pexels.com/photos/29873463/pexels-photo-29873463.jpeg?_gl=1*pgm55g*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDAxNzIkajQyJGwwJGgw"
          alt="Ping Pong"
        />
        <img
          src="https://images.pexels.com/photos/30408594/pexels-photo-30408594.jpeg?_gl=1*bbzsxb*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDAyMzMkajQ0JGwwJGgw"
          alt="Ping Pong"
        />
      </section>
    </div>
  );
};
