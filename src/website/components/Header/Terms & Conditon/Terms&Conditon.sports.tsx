/** @format */

import styles from "./Terms&Conditon.sports.module.scss";

export const TermsAndConditions = () => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Terms & Conditions\n\nWelcome to our sports platform.\n\n1. Introduction\nThese Terms and Conditions govern your use of our services.\n\n2. Eligibility\nYou must be at least 13 years old.\n\n3. Usage\nAll content is for personal and non-commercial use.\n\n4. Liability\nWe are not responsible for injuries or accidents during events.\n\n5. Privacy\nYour data is handled in accordance with our Privacy Policy.\n\nBy using our service, you agree to these terms.`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "terms-and-conditions.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Terms & Conditions</h1>
        <button onClick={handleDownload}>Download</button>
      </div>

      <div className={styles.section}>
        <h2>1. Introduction</h2>
        <p>
          These Terms & Conditions outline the rules and regulations for using
          our platform. By accessing this website, you accept these terms in
          full.
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. Eligibility</h2>
        <p>You must be at least 13 years of age to use this service.</p>
      </div>

      <div className={styles.section}>
        <h2>3. Usage Guidelines</h2>
        <ul>
          <li>Do not misuse or interfere with the service.</li>
          <li>Respect others’ rights and follow applicable laws.</li>
          <li>All event-related rules must be followed strictly.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>4. Liability Disclaimer</h2>
        <p>
          The platform is not liable for any injuries, damages, or losses that
          occur during sports participation or related activities.
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Privacy Policy</h2>
        <p>
          Your data will be collected and used in accordance with our Privacy
          Policy. We do not share your data with third parties without consent.
        </p>
      </div>

      <div className={styles.section}>
        <p>
          By using our services, you hereby consent to our Terms & Conditions
          and agree to abide by them.
        </p>
      </div>
    </div>
  );
};
