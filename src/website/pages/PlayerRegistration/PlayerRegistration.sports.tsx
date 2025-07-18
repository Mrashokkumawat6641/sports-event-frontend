/** @format */

import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { uploadImage } from "../../service/koachRegistration.service";
import { useRegistration } from "../../context/registration/RegistrationContext";
import { registerPlayer } from "../../service/playerRegistration.service";
import styles from "./PlayerRegistration.sports.module.scss";
import { useNavigate } from "react-router-dom";

const PlayerRegistration = () => {
  const { setData, data } = useRegistration();
  const [form, setForm] = useState({
    playerName: data?.player?.playerName || "",
    playerAge: data?.player?.playerAge || "",
    playerGender: data?.player?.playerGender || "",
    playerCity: data?.player?.playerCity || "",
    playerState: data?.player?.playerState || "",
    playerPhoto: data?.player?.playerPhoto || null,
    playerAdharPhoto: data?.player?.playerAdharPhoto || null,
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  // Uploading states for playerPhoto and playerAdharPhoto
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingAdhar, setUploadingAdhar] = useState(false);
  const [uploadErrorPhoto, setUploadErrorPhoto] = useState<string | null>(null);
  const [uploadErrorAdhar, setUploadErrorAdhar] = useState<string | null>(null);
  const [dotCountPhoto, setDotCountPhoto] = useState(1);
  const [dotCountAdhar, setDotCountAdhar] = useState(1);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (uploadingPhoto) {
      interval = setInterval(() => {
        setDotCountPhoto((prev) => (prev === 3 ? 1 : prev + 1));
      }, 400);
    } else {
      setDotCountPhoto(1);
    }
    return () => clearInterval(interval);
  }, [uploadingPhoto]);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (uploadingAdhar) {
      interval = setInterval(() => {
        setDotCountAdhar((prev) => (prev === 3 ? 1 : prev + 1));
      }, 400);
    } else {
      setDotCountAdhar(1);
    }
    return () => clearInterval(interval);
  }, [uploadingAdhar]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files[0]) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
      if (name === "playerPhoto") {
        setUploadingPhoto(true);
        setUploadErrorPhoto(null);
        (async () => {
          try {
            const url = await uploadImage(files[0]);
            setForm((prev) => ({ ...prev, [name]: url }));
          } catch (err) {
            setUploadErrorPhoto("Image upload failed");
          } finally {
            setUploadingPhoto(false);
          }
        })();
      } else if (name === "playerAdharPhoto") {
        setUploadingAdhar(true);
        setUploadErrorAdhar(null);
        (async () => {
          try {
            const url = await uploadImage(files[0]);
            setForm((prev) => ({ ...prev, [name]: url }));
          } catch (err) {
            setUploadErrorAdhar("Image upload failed");
          } finally {
            setUploadingAdhar(false);
          }
        })();
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Validate image fields are URLs
    if (
      typeof form.playerPhoto !== "string" ||
      !form.playerPhoto.startsWith("http")
    ) {
      setApiError("Please upload your photo before submitting.");
      return;
    }
    if (
      typeof form.playerAdharPhoto !== "string" ||
      !form.playerAdharPhoto.startsWith("http")
    ) {
      setApiError("Please upload your Aadhar card photo before submitting.");
      return;
    }

    setLoading(true);
    setData({ player: { ...form } });
    const flatPayload = {
      ...(data.koach || {}),
      ...(data.game || {}),
      ...(data.details || {}),
      ...(form || {}),
    };
    console.log("Payload sent to API:", flatPayload);
    try {
      await registerPlayer(flatPayload);
      setLoading(false);
      navigate("/registration/PlayerRegistrationFees");
    } catch (err: any) {
      setLoading(false);
      setApiError(
        err?.response?.data?.message ||
          err?.message ||
          "Registration failed. Try again."
      );
    }
  };

  return (
    <div className={styles.playerFormWrapper} style={{ position: "relative" }}>
      <BackButton to="/registration/ChooseSportsDetailsregistration" />
      <h2 className={styles.heading}>Player Details</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            <label className={styles.label} htmlFor="playerAge">
              Age
            </label>
            <input
              className={styles.input}
              type="number"
              id="playerAge"
              name="playerAge"
              value={form.playerAge}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="playerGender">
              Gender<span>*</span>
            </label>
            <select
              id="playerGender"
              name="playerGender"
              value={form.playerGender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="playerCity">
              City
            </label>
            <input
              className={styles.input}
              type="text"
              id="playerCity"
              name="playerCity"
              value={form.playerCity}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="playerState">
              State
            </label>
            <input
              className={styles.input}
              type="text"
              id="playerState"
              name="playerState"
              value={form.playerState}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="playerPhoto">
              Photo
            </label>
            <input
              className={styles.fileInput}
              type="file"
              id="playerPhoto"
              name="playerPhoto"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {uploadingPhoto && (
              <div style={{ color: "#00e6e6" }}>
                Uploading{".".repeat(dotCountPhoto)}
              </div>
            )}
            {uploadErrorPhoto && (
              <div style={{ color: "red" }}>{uploadErrorPhoto}</div>
            )}
            {typeof form.playerPhoto === "string" &&
              form.playerPhoto &&
              form.playerPhoto.startsWith("http") && (
                <div style={{ color: "green" }}>
                  Uploaded!{" "}
                  <a
                    href={form.playerPhoto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              )}
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="playerAdharPhoto">
              Aadhar Card Photo
            </label>
            <input
              className={styles.fileInput}
              type="file"
              id="playerAdharPhoto"
              name="playerAdharPhoto"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {uploadingAdhar && (
              <div style={{ color: "#00e6e6" }}>
                Uploading{".".repeat(dotCountAdhar)}
              </div>
            )}
            {uploadErrorAdhar && (
              <div style={{ color: "red" }}>{uploadErrorAdhar}</div>
            )}
            {typeof form.playerAdharPhoto === "string" &&
              form.playerAdharPhoto &&
              form.playerAdharPhoto.startsWith("http") && (
                <div style={{ color: "green" }}>
                  Uploaded!{" "}
                  <a
                    href={form.playerAdharPhoto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              )}
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
        <h3 className={styles.feesHeading}>Show the Registration Fees</h3>
        <button className={styles.feesBtn} type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register & Pay Fees"}
        </button>
        {apiError && (
          <div
            style={{
              color: "#ff4d4f",
              marginTop: 8,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {apiError}
          </div>
        )}
      </form>
    </div>
  );
};

export default PlayerRegistration;
