/** @format */

import React from "react";
import styles from "./PrivacyPolicy.Footer.sports.module.scss";

const PrivacyPolicy = () => (
  <div className={styles.privacyWrapper}>
    <h2 className={styles.heading}>Privacy Policy</h2>
    <p className={styles.text}>
      We value your privacy. All personal and payment information is encrypted
      and securely processed via Razorpay. We do not store your card or UPI
      details. Your data is used only for registration and event communication.
      For payment verification, Razorpay may request additional information as
      per RBI guidelines.
    </p>
    <p className={styles.text}>
      For any privacy concerns, contact us at the details provided on our
      Contact Us page.
    </p>
  </div>
);

export default PrivacyPolicy;
