/** @format */

import styles from "./Location.sports.module.scss";

export const SportsLocation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Location</h1>
      <h1 className={styles.heading}>
        Sports <span style={{ color: "white" }}>Event</span> Location
      </h1>
      <div className={styles.content}>
        <div className={styles.map}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.3281507543406!2d75.20944146981654!3d27.57318213004604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbe629f2601ab%3A0xe9f98cf7d1045691!2sSobhasaria%20Group%20of%20Institution%20-%20B.Tech%2C%20MBA%20In%20Sikar!5e0!3m2!1sen!2sin!4v1752148915755!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.address}>
          {/* <h3>Head Office</h3>
          <p>
            1st Floor, ABC Complex,
            <br />
            Near Central Mall, MI Road,
            <br />
            Jaipur, Rajasthan - 302001, India
          </p> */}
          <h3>Contact</h3>
          <p>
            Phone: +91 91663 02608
            <br />
            Email: mrniteshkumawat213@gmail.com
          </p>
          <a
            href="https://www.google.com/maps?q=Jaipur"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};
