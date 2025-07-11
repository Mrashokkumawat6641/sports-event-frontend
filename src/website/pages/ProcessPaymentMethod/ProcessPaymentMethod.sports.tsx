/** @format */

import React, { useState } from "react";
import styles from "./ProcessPaymentMethod.sports.module.scss";
import { createOrder } from "../../service/payment.service";
import { useNavigate } from "react-router-dom";

const FeesPayment = () => {
  const navigate = useNavigate();
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = async () => {
    try {
      const { orderId, amount, key } = await createOrder();

      const options = {
        key: key,
        amount: amount,
        currency: "INR",
        name: "Sports Event",
        description: "Player Registration Fee",
        image: "https://your-logo.png",
        order_id: orderId,
        handler: function (response: any) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
          setPaymentDone(true);
        },
        prefill: {
          name: "Player Name",
          email: "email@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Your sports event address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment failed. Try again.");
      console.error(err);
    }
  };

  const handleSubmit = () => {
    navigate("/registration/RegistrationComplete");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.paymentCard}>
        <h2 className={styles.heading}>
          Entry <span style={{ color: "white" }}>Fee</span> Payment
        </h2>
        <p className={styles.note}>
          Pay your ₹199 registration fee using UPI, card, or wallet.
        </p>
        <button onClick={handlePayment} className={styles.payBtn}>
          Pay ₹199
        </button>
        <button
          onClick={handleSubmit}
          className={styles.payBtn}
          style={{ marginTop: "1rem" }}
          //   disabled={!paymentDone}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeesPayment;
