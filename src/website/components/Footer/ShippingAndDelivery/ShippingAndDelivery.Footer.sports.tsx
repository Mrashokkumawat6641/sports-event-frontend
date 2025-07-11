/** @format */

import React from "react";
import styles from "./ShippingAndDelivery.Footer.sports.module.scss";

const ShippingAndDelivery = () => (
  <div className={styles.shippingWrapper}>
    <h2 className={styles.heading}>Shipping and Delivery Policy</h2>
    <p className={styles.text}>
      This is a digital event registration. No physical products will be
      shipped. All confirmations and receipts will be delivered via email or SMS
      after successful payment through Razorpay.
    </p>
    <p className={styles.text}>
      For any queries regarding your registration or payment, please contact our
      support team.
    </p>
  </div>
);

export default ShippingAndDelivery;
