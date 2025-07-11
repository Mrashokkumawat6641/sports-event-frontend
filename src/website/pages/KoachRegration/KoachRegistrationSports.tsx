/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";
import { uploadImage } from "../../service/registraionSports.service";

const Registration = () => {
  const [form, setForm] = useState({
    coachName: "",
    middleName: "",
    photo: null as File | null,
    age: "",
    gender: "",
    city: "",
    state: "",
    mobile: "",
    altMobile: "",
  });
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [dotCount, setDotCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (uploading) {
      interval = setInterval(() => {
        setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
      }, 400);
    } else {
      setDotCount(1);
    }
    return () => clearInterval(interval);
  }, [uploading]);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "photo" && files && files[0]) {
      setForm((prev) => ({ ...prev, photo: files[0] }));
      setUploading(true);
      setUploadError(null);
      setUploadedUrl(null);
      try {
        const url = await uploadImage(files[0]);
        setUploadedUrl(url);
      } catch (err) {
        setUploadError("Image upload failed");
      } finally {
        setUploading(false);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle next step
    navigate("/registration/ChooseGame_registration");
  };

  return (
    <div className={styles.bgWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sports Registration</h2>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="coachName">
              Coach Name<span>*</span>
            </label>
            <input
              type="text"
              id="coachName"
              name="coachName"
              value={form.coachName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={form.middleName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="photo">
              Coach Photo<span>*</span>
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {uploading && (
              <div style={{ color: "#00e6e6" }}>
                Uploading{".".repeat(dotCount)}
              </div>
            )}
            {uploadError && <div style={{ color: "red" }}>{uploadError}</div>}
            {uploadedUrl && (
              <div style={{ color: "green" }}>
                Uploaded!{" "}
                <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="age">
              Age<span>*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="gender">
              Gender<span>*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="state">
              State<span>*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="mobile">
              Mobile Number<span>*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="altMobile">Alternative Number</label>
            <input
              type="tel"
              id="altMobile"
              name="altMobile"
              value={form.altMobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <button className={styles.nextBtn} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default Registration;
