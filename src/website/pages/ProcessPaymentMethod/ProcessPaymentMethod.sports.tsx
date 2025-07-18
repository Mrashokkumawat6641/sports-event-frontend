/** @format */

import React, { useState, useEffect, useRef } from "react";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../../context/registration/RegistrationContext";
import {
  createPaypalOrder,
  capturePaypalOrder,
} from "../../service/payment.service";
import styles from "./ProcessPaymentMethod.sports.module.scss";

declare global {
  interface Window {
    paypal?: any;
  }
}

const FeesPayment = () => {
  const [paymentDone, setPaymentDone] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { data } = useRegistration();
  // If you have any local form state, initialize it from context here

  // Load PayPal SDK
  useEffect(() => {
    const loadScript = async () => {
      const existingScript = document.getElementById("paypal-sdk");
      if (existingScript) {
        setPaypalReady(true);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=ASKCaPO_r4m1FcyZZCcK4ALOipYvSnbm1VYC3Tdzz7u5lvIcgSQHJQnyNP9jlNNkyaiiwM3sdN_nVZaf&currency=USD";
      script.id = "paypal-sdk";
      script.onload = () => {
        console.log("✅ PayPal SDK loaded");
        setPaypalReady(true);
      };
      script.onerror = () => {
        console.error("❌ Failed to load PayPal SDK");
        setPaypalError("Failed to load PayPal. Please refresh and try again.");
      };
      document.body.appendChild(script);
    };

    loadScript();

    // 🧹 Clean up on unmount
    return () => {
      const container = document.getElementById("paypal-button-container");
      if (container) container.innerHTML = "";
    };
  }, []);

  // Render PayPal Buttons when SDK is ready
  useEffect(() => {
    if (paypalReady && window.paypal && paypalRef.current) {
      paypalRef.current.innerHTML = ""; // clear previous

      window.paypal
        .Buttons({
          createOrder: async () => {
            try {
              const res = await createPaypalOrder();
              console.log("🧾 PayPal Order Created:", res);

              const orderId = res?.data?.id;
              if (orderId) return orderId;

              throw new Error("No order ID returned");
            } catch (err) {
              console.error("❌ Create order error:", err);
              setPaypalError("Something went wrong during order creation.");
              throw err;
            }
          },
          onApprove: async (data: { orderID: string }) => {
            try {
              console.log("✅ Payment Approved:", data.orderID);
              const capture = await capturePaypalOrder(data.orderID);
              console.log("💰 Capture Response:", capture);

              if (capture?.status === "COMPLETED") {
                setPaymentDone(true);
                alert("✅ Payment Successful!");
              } else {
                alert("⚠️ Payment not completed.");
              }
            } catch (err) {
              console.error("❌ Capture error:", err);
              setPaypalError("Something went wrong during payment capture.");
            }
          },
          onError: (err: any) => {
            console.error("❌ PayPal button error:", err);
            setPaypalError("Something went wrong during payment.");
          },
        })
        .render(paypalRef.current);
    }
  }, [paypalReady]);

  const handleSubmit = () => {
    if (paymentDone) {
      navigate("/registration/RegistrationComplete");
    } else {
      alert("Please complete payment first.");
    }
  };

  return (
    <div className={styles.wrapper} style={{ position: "relative" }}>
      <BackButton to="/registration/PlayerRegistrationDetails" />
      <div className={styles.paymentCard}>
        <h2 className={styles.heading}>
          Entry <span style={{ color: "white" }}>Fee</span> Payment
        </h2>
        <p className={styles.note}>
          Pay your ₹199 registration fee using PayPal (international cards).
        </p>

        {paypalError && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            {paypalError}
          </div>
        )}

        {!paypalReady && !paypalError && (
          <button className={styles.payBtn} disabled>
            Loading Pay Now...
          </button>
        )}

        {/* PayPal Button will render here */}
        <div
          ref={paypalRef}
          id="paypal-button-container"
          style={{ marginTop: "1rem" }}
        />

        <button
          onClick={handleSubmit}
          className={styles.payBtn}
          style={{ marginTop: "1rem" }}
          disabled={!paymentDone}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeesPayment;
