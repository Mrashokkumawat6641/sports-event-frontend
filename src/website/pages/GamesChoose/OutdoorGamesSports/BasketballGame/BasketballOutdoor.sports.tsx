/** @format */

import styles from "./BasketballOutdoor.sports.module.scss";

export const BasketballGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Basketball</h1>
        <p>
          A fast-paced indoor game played with energy, teamwork, and precision
          shooting.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Basketball is a dynamic team sport where two teams of five players
          each compete to score by throwing a ball into the opposing team’s
          basket. It is popular in schools, colleges, and leagues globally like
          the NBA.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>Each team consists of 5 players on the court.</li>
          <li>
            The game is played in four quarters of 12 minutes each (NBA) or 10
            minutes (FIBA).
          </li>
          <li>
            2 points for regular field goals, 3 points for long-distance shots,
            1 point for free throws.
          </li>
          <li>No traveling, double dribble, or personal fouls allowed.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Master basic dribbling and passing skills.</li>
          <li>Practice layups and jump shots regularly.</li>
          <li>Focus on defense and teamwork.</li>
          <li>
            Watch professional matches to understand plays and strategies.
          </li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?_gl=1*8yh60u*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDI0NTckajQ5JGwwJGgw"
          alt="Basketball Match"
        />
        <img
          src="https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg?_gl=1*5x07hm*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDI0OTkkajckbDAkaDA."
          alt="Basketball Court"
        />
        <img
          src="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?_gl=1*dlf47o*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDI1MjUkajU3JGwwJGgw"
          alt="Basketball Court"
        />
      </section>
    </div>
  );
};
