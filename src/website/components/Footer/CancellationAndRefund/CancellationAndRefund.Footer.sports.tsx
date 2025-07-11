/** @format */

import React from "react";
import styles from "./CancellationAndRefund.Footer.sports.module.scss";

const CancellationAndRefund = () => (
  <div className={styles.cancellationWrapper}>
    <h2 className={styles.heading}>Cancellation and Refund Policy</h2>
    <p className={styles.text}>
      Once the registration fee is paid via Razorpay, it is non-refundable
      except in case of event cancellation by the organizers. If the event is
      cancelled, the refund will be processed to the original payment method
      within 7-10 business days after verification.
    </p>
    <p className={styles.text}>
      For any issues or disputes, Razorpay’s payment verification and dispute
      resolution process will be followed as per their terms.
    </p>
  </div>
);

export default CancellationAndRefund;
