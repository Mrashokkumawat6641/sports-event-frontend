/** @format */

import styles from "./AthleticsOutdoor.sports.module.scss";

export const AthleticsGame = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Athletics</h1>
        <p>
          The foundation of sports, athletics includes track and field events
          that test speed, strength, and endurance.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Sport</h2>
        <p>
          Athletics is a collection of sporting events that involve competitive
          running, jumping, throwing, and walking. It includes events like
          sprints, marathons, high jump, long jump, shot put, javelin throw, and
          more.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Basic Rules</h2>
        <ul>
          <li>
            Each event in athletics has specific rules (e.g., false start rules
            in sprints, proper take-off in long jump).
          </li>
          <li>Track events are timed, and the fastest athlete wins.</li>
          <li>
            In field events, athletes get multiple attempts, and the best valid
            score counts.
          </li>
          <li>
            Events are usually held on standard tracks or fields with regulation
            equipment and surfaces.
          </li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Start with proper warm-up and stretching to prevent injuries.</li>
          <li>Focus on form and technique, not just speed or distance.</li>
          <li>Stay hydrated and maintain a balanced diet for endurance.</li>
          <li>Use spikes or proper shoes for track events for better grip.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?_gl=1*1wk5qt0*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDQxMjkkajQ3JGwwJGgw"
          alt="Athletics track event"
        />
        <img
          src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?_gl=1*lz2b2x*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDQxNDYkajMwJGwwJGgw"
          alt="Athletics field event"
        />
        <img
          src="https://images.pexels.com/photos/5319375/pexels-photo-5319375.jpeg?_gl=1*1kmwwoq*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxNDQxNjUkajExJGwwJGgw"
          alt="Athletics field event"
        />
      </section>
    </div>
  );
};
