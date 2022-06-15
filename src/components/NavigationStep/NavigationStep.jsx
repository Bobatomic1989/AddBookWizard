import React from "react";
import styles from "./NavigationStep.module.css";

function NavigationStep({ index, title, active }) {
  return (
    <div className={styles.container}>
      <div
        className={`${
          active ? "bg-secondary text-white " : "bg-light text-dark"
        } ${styles.stepNumber} rounded-circle`}
      >
        {index}
      </div>
      <div className={`${active ? styles.stepTitleActive : ""}`}>{title}</div>
    </div>
  );
}

export default NavigationStep;
