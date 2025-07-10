/** @format */

import styles from "./VolleyballOutdoor.sports.module.scss";

export const VolleyballGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>🏐 Volleyball</h1>
        <p>
          A fast-paced team sport played across a net with powerful spikes,
          strategic blocks, and sharp reflexes.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Volleyball is played between two teams of six players each. The
          objective is to send the ball over the net and prevent the opposing
          team from returning it successfully. It's a great mix of athleticism,
          strategy, and team coordination.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>
            A team scores a point when the ball touches the opponent’s court or
            they commit a fault.
          </li>
          <li>
            Each team can touch the ball up to 3 times before sending it back
            over the net.
          </li>
          <li>
            Matches are played in best-of-5 sets, and a team must win a set with
            at least 25 points and a 2-point lead.
          </li>
          <li>
            Players rotate clockwise after gaining a point on the opponent’s
            serve.
          </li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Practice proper hand positioning for bump, set, and spike.</li>
          <li>
            Work on communication with teammates — always call for the ball.
          </li>
          <li>Focus on quick footwork and staying low during defense.</li>
          <li>Serve consistently — underhand serves are good to start with.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?_gl=1*1u72hgl*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDM3NTckajU1JGwwJGgw"
          alt="Volleyball match"
        />
        <img
          src="https://images.pexels.com/photos/3067870/pexels-photo-3067870.jpeg?_gl=1*10715dr*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDM3ODIkajMwJGwwJGgw"
          alt="Volleyball beach play"
        />
        <img
          src="https://images.pexels.com/photos/1670848/pexels-photo-1670848.jpeg?_gl=1*1o9hf8u*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDM4MTAkajIkbDAkaDA."
          alt="Volleyball beach play"
        />
      </section>
    </div>
  );
};
