/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

// /** @format */

import React from "react";
import styles from "./Footer.sports.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerMain}>
      <div className={styles.brandSection}>
        <div className={styles.logoRow}>
          <img src="/logo192.png" alt="Logo" className={styles.logo} />
          <span className={styles.brandName}>
            sports
            <span className={styles.brandDot}>.</span>dev
          </span>
        </div>
        <div className={styles.brandDesc}>
          sports.dev is a professional network for sports enthusiasts to learn,
          collaborate, and grow together.
        </div>
        <div className={styles.appButtons}>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className={styles.appIcon}
              style={{ height: 40 }}
            />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className={styles.appIcon}
              style={{ height: 40 }}
            />
          </a>
        </div>
        <div className={styles.socialRow}>
          <a href="#" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/mrashokkumawat6641/"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
      <div className={styles.linksSection}>
        <div className={styles.linkCol}>
          <div className={styles.linkTitle}>Product</div>
          <a href="#">Chrome extension</a>
          <a href="#">Edge add-on</a>
          <a href="#">iOS app</a>
          <a href="#">Android app</a>
          <a href="#">Web version</a>
          <a href="#">Changelog</a>
          <a href="#">Status</a>
        </div>
        <div className={styles.linkCol}>
          <div className={styles.linkTitle}>Community</div>
          <a href="#">Docs</a>
          <a href="#">Open source</a>
          <a href="#">Feature requests</a>
          <a href="#">Online events</a>
          <a href="#">Swag store</a>
        </div>
        <div className={styles.linkCol}>
          <div className={styles.linkTitle}>Company</div>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="/footer/CancellationAndRefund">Cancellation And Refund</a>
          <a href="/footer/ShippingAndDelivery">ShippingAndDelivery</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Sports Dev Ltd. &nbsp;{" "}
        <a href="/Header/TermsAndConditions">Terms</a> &nbsp; | &nbsp;{" "}
        <a href="/footer/PrivacyPolicy">Privacy Policy</a> &nbsp; | &nbsp;{" "}
        <a href="#">Guidelines</a>
      </div>
      <div className={styles.flagsRow}>
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Italy"
        />
        <img
          src="https://cdn.prod.website-files.com/5e6988439312b5bbb3f95631/66bf1ca1a9040d4ad6005302_au.svg"
          alt="Israel"
        />
        <img
          src="https://cdn.prod.website-files.com/5e6988439312b5bbb3f95631/66bf1f35cdd4f45da9cf2d2c_cu.svg"
          alt="Philippines"
        />
        <img
          src="https://cdn.prod.website-files.com/5e6988439312b5bbb3f95631/66bf25a3d774008a7088f805_gb.svg"
          alt="Netherlands"
        />
        <img
          src="https://cdn.countryflags.com/thumbs/china/flag-square-250.png"
          alt="UK"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="USA"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Australia"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Poland"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Norway"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Albania"
        />
        <img
          src="https://i.pinimg.com/736x/ea/14/0a/ea140a9f6e4681b64b35262cf873f026.jpg"
          alt="Morocco"
        />
      </div>
      <div className={styles.remoteText}>
        Working remotely wherever we're happiest
      </div>
    </div>
  </footer>
);

export default Footer;
