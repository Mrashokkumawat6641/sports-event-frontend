/** @format */

import React, { useState } from "react";
import styles from "./PlayerRegistration.sports.module.scss";
import { useNavigate } from "react-router-dom";

const PlayerRegistration = () => {
  const [form, setForm] = useState({
    playerName: "",
    age: "",
    city: "",
    state: "",
    photo: null as File | null,
    adharPhoto: null as File | null,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFeesPayment = () => {
    navigate("/registration/PlayerRegistrationFees");
  };

  return (
    <div className={styles.playerFormWrapper}>
      <h2 className={styles.heading}>Player Details</h2>
      <form className={styles.form}>
        <div className={styles.leftFields}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="playerName">
              Player Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="playerName"
              name="playerName"
              value={form.playerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="age">
              Age
            </label>
            <input
              className={styles.input}
              type="number"
              id="age"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="state">
              State
            </label>
            <input
              className={styles.input}
              type="text"
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="photo">
              Photo
            </label>
            <input
              className={styles.fileInput}
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="adharPhoto">
              Aadhar Card Photo
            </label>
            <input
              className={styles.fileInput}
              type="file"
              id="adharPhoto"
              name="adharPhoto"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <h3 style={{ color: "skyblue" }}>Aadhar Card Sample</h3>
          <img
            className={styles.adharSample}
            src="https://www.shutterstock.com/image-vector/dummy-aadhar-card-unique-identity-260nw-1661857774.jpg"
            alt="Aadhar Card Sample"
          />
        </div>
      </form>
      <h3 className={styles.feesHeading}>Show the Registration Fees</h3>
      <button
        className={styles.feesBtn}
        type="button"
        onClick={handleFeesPayment}
      >
        Fess Payment
      </button>
    </div>
  );
};

export default PlayerRegistration;
