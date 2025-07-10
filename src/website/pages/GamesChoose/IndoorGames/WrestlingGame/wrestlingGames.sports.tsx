/** @format */

import styles from "./wrestlingGames.sports.module.scss";

export const WrestlingPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Wrestling</h1>
        <p>
          A combat sport focused on grappling, throws, pins, and physical
          endurance.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Wrestling is a form of combat sport involving grappling-type
          techniques such as clinch fighting, throws and takedowns, joint locks,
          pins, and other holds. It’s an Olympic sport and also practiced as
          freestyle and Greco-Roman styles.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Game Rules</h2>
        <ul>
          <li>
            The objective is to pin the opponent’s shoulders to the mat for a
            win.
          </li>
          <li>Points are awarded for takedowns, reversals, and near falls.</li>
          <li>
            Matches are divided into two or three rounds of 2–3 minutes each.
          </li>
          <li>
            Illegal moves like choking or biting result in disqualification.
          </li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Focus on maintaining balance and body posture.</li>
          <li>
            Practice basic techniques like double-leg takedown and sprawl.
          </li>
          <li>Improve strength, agility, and cardiovascular fitness.</li>
          <li>Watch professional matches to understand strategies.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLNjE2ieBgbzuDq6YlMMeVkKmHVhW7atJeA&s"
          alt="Wrestling Match"
        />
        <img
          src="https://wallpapers.com/images/hd/live-wrestling-match-gppjezbmysunevmn.jpg"
          alt="Wrestling in Action"
        />
        <img
          src="https://i.ytimg.com/vi/q2URamgKLcY/maxresdefault.jpg"
          alt="Wrestling in Action"
        />
      </section>
    </div>
  );
};
