/** @format */

import styles from "./CarromIndoorGame.sports.module.scss";

export const CarromPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Carrom</h1>
        <p>
          A classic board game of precision, aim, and strategy played with
          fingers.
        </p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Carrom is a tabletop game played with small disks (carrom men) on a
          wooden board. The goal is to use a striker to pocket your own color
          pieces before your opponent. It is extremely popular in India and
          across Asia.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Game Rules</h2>
        <ul>
          <li>
            Each player tries to pocket all their carrom men (black or white).
          </li>
          <li>Whoever pockets the red queen must follow it up with a cover.</li>
          <li>Players use fingers to flick the striker from the base line.</li>
          <li>If the striker goes into a pocket, a penalty is applied.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Use your index or middle finger for controlled shots.</li>
          <li>Try to cover the queen immediately after pocketing it.</li>
          <li>Practice rebound shots to control the striker direction.</li>
          <li>Focus on defensive play if ahead in score.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.unsplash.com/photo-1652558973276-365360d5024a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnJvbSUyMGJvYXJkfGVufDB8fDB8fHww"
          alt="Carrom Board"
        />
        <img
          src="https://images.unsplash.com/photo-1652558973197-498325ed3758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fycm9tJTIwYm9hcmR8ZW58MHx8MHx8fDA%3D"
          alt="Playing Carrom"
        />
        <img
          src="https://images.unsplash.com/photo-1652558973174-1d14eb5b1b40?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Playing Carrom"
        />
        {/* <img
          src="https://images.unsplash.com/photo-1620741211956-32977c8973be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm9tJTIwYm9hcmR8ZW58MHx8MHx8fDA%3D"
          alt="Playing Carrom"
        /> */}
      </section>
    </div>
  );
};
