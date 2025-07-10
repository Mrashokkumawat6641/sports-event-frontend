/** @format */

import styles from "./BadmintonIndoorGame.sports.module.scss";

export const BadmintonPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>🏸 Badminton</h1>
        <p>
          A fast-paced indoor game that sharpens your reflexes and endurance.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Badminton is a racquet sport played using racquets to hit a
          shuttlecock across a net. It can be played in singles or doubles
          format. The game is widely played for recreation as well as in
          competitive formats globally.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Game Rules</h2>
        <ul>
          <li>The game is played to 21 points per set (best of 3 sets).</li>
          <li>A point is scored on every serve (rally scoring).</li>
          <li>
            If the shuttle hits the ground or goes outside boundaries, it’s a
            point for the opponent.
          </li>
          <li>Players switch sides after each set.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Focus on footwork and court coverage.</li>
          <li>Use wrist power for smashes and drop shots.</li>
          <li>
            Keep the shuttle low over the net to prevent opponent’s smash.
          </li>
          <li>Stay alert and anticipate your opponent’s shots.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/5767580/pexels-photo-5767580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Badminton court"
        />
        <img
          src="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?_gl=1*kr5fe6*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxMzk1MDIkajU1JGwwJGgw"
          alt="Shuttlecock"
        />
        <img
          src="https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?_gl=1*8gjdcl*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxMzk1OTAkajQwJGwwJGgw"
          alt="Shuttlecock"
        />
      </section>
    </div>
  );
};
