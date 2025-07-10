/** @format */

import styles from "./ContactUs.sports.module.scss";

export const ContactUs = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.contactContainer}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h4>Address</h4>
            <p>
              Sobhasaria Group of Institution,
              <br />
              NH 52, Sikar, Rajasthan 332001
            </p>
          </div>
          <div className={styles.infoItem}>
            <h4>Email</h4>
            <p>mrniteshkumawat213@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <h4>Phone</h4>
            <p>+91 91663 02608</p>
          </div>
        </div>

        <div className={styles.form}>
          <form>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Your Email"
              required
            />
            <textarea
              className={styles.textarea}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.3281507543406!2d75.20944146981654!3d27.57318213004604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbe629f2601ab%3A0xe9f98cf7d1045691!2sSobhasaria%20Group%20of%20Institution%20-%20B.Tech%2C%20MBA%20In%20Sikar!5e0!3m2!1sen!2sin!4v1752148915755!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
