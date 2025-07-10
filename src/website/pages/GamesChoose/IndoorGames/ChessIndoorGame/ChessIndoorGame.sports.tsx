/** @format */

import styles from "./ChessIndoorGame.sports.module.scss";

export const ChessPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Chess</h1>
        <p>The Game of Kings — where every move matters.</p>
      </section>

      <section className={styles.details}>
        <h2>About the Game</h2>
        <p>
          Chess is a two-player strategy board game played on an 8×8 grid.
          Originating centuries ago, chess develops critical thinking, planning,
          and patience. Each player controls an army with different pieces like
          pawns, knights, bishops, rooks, a queen, and a king.
        </p>
      </section>

      <section className={styles.rules}>
        <h2>Game Rules</h2>
        <ul>
          <li>Each player starts with 16 pieces.</li>
          <li>White makes the first move, followed by Black.</li>
          <li>The objective is to checkmate the opponent’s king.</li>
          <li>
            Draws can occur via stalemate, repetition, or the 50-move rule.
          </li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Beginners</h2>
        <ol>
          <li>Control the center of the board early.</li>
          <li>Develop knights and bishops before the queen and rooks.</li>
          <li>Castle early for king safety.</li>
          <li>Don't rush — think ahead and protect your pieces.</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <img
          src="https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?_gl=1*16hc9n3*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxMzk4MjckajExJGwwJGgw"
          alt="Chess board"
        />
        <img
          src="https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?_gl=1*1tod6ey*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxMzk4ODMkajUxJGwwJGgw"
          alt="Chess piece"
        />
        <img
          src="https://images.pexels.com/photos/163427/chess-figure-game-play-163427.jpeg?_gl=1*1m1xosh*_ga*ODU1NjEyMjE2LjE3NTIxMzk0MjU.*_ga_8JE65Q40S6*czE3NTIxMzk0MjQkbzEkZzEkdDE3NTIxMzk5MjgkajYkbDAkaDA."
          alt="Chess piece"
        />
      </section>
    </div>
  );
};
