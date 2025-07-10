/** @format */

import styles from "./AboutUs.sports.module.scss";

export const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>About Us</h1>
        <p>
          Welcome to SportsZone — your ultimate destination for everything
          sports! From indoor classics to adrenaline-pumping outdoor games, we
          unite players, fans, and communities through events, passion, and fair
          play.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To promote physical activity and sportsmanship by organizing
          large-scale events and competitions that foster teamwork, leadership,
          and a healthy lifestyle.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become India’s largest sports event organizer and digital sports
          platform, connecting over 10,000+ players and encouraging sporting
          excellence across all age groups.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Our Team</h2>
        <div className={styles.team}>
          <div className={styles.member}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team member"
            />
            <h4>Rohit Sharma</h4>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.member}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team member"
            />
            <h4>Anjali Mehra</h4>
            <p>Marketing Head</p>
          </div>
          <div className={styles.member}>
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="Team member"
            />
            <h4>Deepak Saini</h4>
            <p>Event Coordinator</p>
          </div>
        </div>
      </div>
    </section>
  );
};
