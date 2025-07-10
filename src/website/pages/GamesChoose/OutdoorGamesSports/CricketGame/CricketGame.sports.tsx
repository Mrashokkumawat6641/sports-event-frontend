/** @format */

import styles from "./CricketGame.sports.module.scss";

export const CricketGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Cricket</h1>
        <p>The gentleman's game played with bat, ball, and team strategy.</p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Cricket is a bat-and-ball sport played between two teams of 11
          players. Originating from England, it's now widely popular in
          countries like India, Australia, and the UK. The game is played in
          formats like Test, ODI, and T20.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>Each team bats and bowls in turns (innings).</li>
          <li>
            The batting team tries to score runs by hitting the ball and running
            between wickets.
          </li>
          <li>
            The bowling team tries to get the batsmen out and restrict runs.
          </li>
          <li>
            Match formats: T20 (20 overs), ODI (50 overs), Test (Unlimited overs
            over 5 days).
          </li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Understand fielding positions and rules like LBW and no-ball.</li>
          <li>Practice both defensive and attacking batting techniques.</li>
          <li>Improve throwing and catching with field drills.</li>
          <li>Watch international games to learn tactics.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/32897235/pexels-photo-32897235.jpeg?_gl=1*146dis5*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDEzMjEkajM2JGwwJGgw"
          alt="Cricket Batting"
        />
        <img
          src="https://images.pexels.com/photos/3689540/pexels-photo-3689540.jpeg?_gl=1*1pjyst8*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDEzNjckajUzJGwwJGgw"
          alt="Cricket Stadium"
        />
        <img
          src="https://images.pexels.com/photos/32801372/pexels-photo-32801372.jpeg?_gl=1*1t9tpkm*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDE0MDYkajE0JGwwJGgw"
          alt="Cricket Stadium"
        />
      </section>
    </div>
  );
};
