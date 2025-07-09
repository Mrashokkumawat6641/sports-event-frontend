/** @format */

// /** @format */

// import React, { useState } from "react";
// import styles from "../styles/Registration.module.scss";

// const Registration = () => {
//   const [form, setForm] = useState({
//     coachName: "",
//     middleName: "",
//     photo: null,
//     age: "",
//     gender: "",
//     city: "",
//     state: "",
//     mobile: "",
//     altMobile: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // handle next step
//   };

//   return (
//     <div className={styles.bgWrapper}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <h2 className={styles.title}>Sports Registration</h2>
//         <div className={styles.row}>
//           <div className={styles.fieldGroup}>
//             <label>
//               Koach Name<span>*</span>
//             </label>
//             <input
//               type="text"
//               name="coachName"
//               value={form.coachName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>Middle Name</label>
//             <input
//               type="text"
//               name="middleName"
//               value={form.middleName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.fieldGroup}>
//             <label>
//               Photo<span>*</span>
//             </label>
//             <input
//               type="file"
//               name="photo"
//               accept="image/*"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>
//               Age<span>*</span>
//             </label>
//             <input
//               type="number"
//               name="age"
//               value={form.age}
//               onChange={handleChange}
//               required
//               min="1"
//             />
//           </div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.fieldGroup}>
//             <label>
//               Gender<span>*</span>
//             </label>
//             <select
//               name="gender"
//               value={form.gender}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>
//               City<span>*</span>
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={form.city}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>
//               State<span>*</span>
//             </label>
//             <input
//               type="text"
//               name="state"
//               value={form.state}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.fieldGroup}>
//             <label>
//               Mobile Number<span>*</span>
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               required
//               pattern="[0-9]{10}"
//             />
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>Alternative Number</label>
//             <input
//               type="tel"
//               name="altMobile"
//               value={form.altMobile}
//               onChange={handleChange}
//               pattern="[0-9]{10}"
//             />
//           </div>
//         </div>
//         <button className={styles.nextBtn} type="submit">
//           Next
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;

/** @format */

import React, { useState } from "react";
import styles from "../styles/Registration.module.scss";

const Registration = () => {
  const [form, setForm] = useState({
    coachName: "",
    middleName: "",
    photo: null,
    age: "",
    gender: "",
    city: "",
    state: "",
    mobile: "",
    altMobile: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle next step
  };

  return (
    <div className={styles.bgWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sports Registration</h2>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="coachName">
              Koach Name<span>*</span>
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
              Photo<span>*</span>
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
            />
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
