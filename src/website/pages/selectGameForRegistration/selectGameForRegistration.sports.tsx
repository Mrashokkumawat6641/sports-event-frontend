/** @format */

// /** @format */

// import React, { useState } from "react";
// import styles from "./selectGameForRegistration.sports.module.scss";
// import { useNavigate } from "react-router-dom";

// const GameChooseForRegistratiionSports = () => {
//   const [selected, setSelected] = useState<"indoor" | "outdoor" | null>(null);
//   const navigate = useNavigate();
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // handle next step
//     navigate("/registration/ChooseSportsDetailsregistration");
//   };
//   return (
//     <form className={styles.chooseWrapper} onSubmit={handleSubmit}>
//       <h2 className={styles.title}>Choose Game Type</h2>
//       <div className={styles.boxContainer}>
//         <div className={styles.boxWithRadio}>
//           <div
//             className={styles.box}
//             tabIndex={0}
//             role="button"
//             onClick={() => {
//               setSelected("indoor");
//             }}
//             style={{ position: "relative" }}
//           >
//             <input
//               type="radio"
//               id="choose-indoor"
//               name="gameType"
//               checked={selected === "indoor"}
//               onChange={() => setSelected("indoor")}
//               style={{
//                 width: 22,
//                 height: 22,
//                 accentColor: "#00e6e6",
//                 borderRadius: "50%",
//                 position: "absolute",
//                 top: 14,
//                 left: 14,
//                 zIndex: 2,
//               }}
//             />
//             <label htmlFor="choose-indoor" style={{ display: "none" }}></label>
//             <span className={styles.boxLabel}>Indoor</span>
//           </div>
//         </div>
//         <div className={styles.boxWithRadio}>
//           <div
//             className={styles.box}
//             tabIndex={0}
//             role="button"
//             onClick={() => {
//               setSelected("outdoor");
//             }}
//             style={{ position: "relative" }}
//           >
//             <input
//               type="radio"
//               id="choose-outdoor"
//               name="gameType"
//               checked={selected === "outdoor"}
//               onChange={() => setSelected("outdoor")}
//               style={{
//                 width: 22,
//                 height: 22,
//                 accentColor: "#00e6e6",
//                 borderRadius: "50%",
//                 position: "absolute",
//                 top: 14,
//                 left: 14,
//                 zIndex: 2,
//               }}
//             />
//             <label htmlFor="choose-outdoor" style={{ display: "none" }}></label>
//             <span className={styles.boxLabel}>Outdoor</span>
//           </div>
//         </div>
//       </div>
//       <button className={styles.nextBtn} type="submit">
//         Next
//       </button>
//     </form>
//   );
// };

// export default GameChooseForRegistratiionSports;

/** @format */

import React, { useState } from "react";
import styles from "./selectGameForRegistration.sports.module.scss";
import { useNavigate } from "react-router-dom";

const GameChooseForRegistratiionSports = () => {
  const [selected, setSelected] = useState<"indoor" | "outdoor" | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return alert("Please select game type");
    navigate("/registration/ChooseSportsDetailsregistration", {
      state: { selectedGameType: selected },
    });
  };

  return (
    <form className={styles.chooseWrapper} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Choose Game Type</h2>
      <div className={styles.boxContainer}>
        <div className={styles.boxWithRadio}>
          <div
            className={styles.box}
            tabIndex={0}
            role="button"
            onClick={() => {
              setSelected("indoor");
            }}
            style={{ position: "relative" }}
          >
            <input
              type="radio"
              id="choose-indoor"
              name="gameType"
              checked={selected === "indoor"}
              onChange={() => setSelected("indoor")}
              style={{
                width: 22,
                height: 22,
                accentColor: "#00e6e6",
                borderRadius: "50%",
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 2,
              }}
            />
            <label htmlFor="choose-indoor" style={{ display: "none" }}></label>
            <span className={styles.boxLabel}>Indoor</span>
          </div>
        </div>
        <div className={styles.boxWithRadio}>
          <div
            className={styles.box}
            tabIndex={0}
            role="button"
            onClick={() => {
              setSelected("outdoor");
            }}
            style={{ position: "relative" }}
          >
            <input
              type="radio"
              id="choose-outdoor"
              name="gameType"
              checked={selected === "outdoor"}
              onChange={() => setSelected("outdoor")}
              style={{
                width: 22,
                height: 22,
                accentColor: "#00e6e6",
                borderRadius: "50%",
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 2,
              }}
            />
            <label htmlFor="choose-outdoor" style={{ display: "none" }}></label>
            <span className={styles.boxLabel}>Outdoor</span>
          </div>
        </div>
      </div>
      <button className={styles.nextBtn} type="submit">
        Next
      </button>
    </form>
  );
};

export default GameChooseForRegistratiionSports;
