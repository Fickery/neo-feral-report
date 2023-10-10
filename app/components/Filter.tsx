import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filterMain}>
      <ul className={styles.filterList}>
        <li className={styles.filterListIndv}>China</li>
        <li className={styles.filterListIndv}>Ukraine Invasion</li>
        <li className={styles.filterListIndv}>Malaysia</li>
        <li className={styles.filterListIndv}>Russia</li>
        <li className={styles.filterListIndv}>COVID-19</li>
        <li className={styles.filterListIndv}>Wellness</li>
        <li className={styles.filterListIndv}>Israel-Hamas Conflict</li>
        <li className={styles.filterListIndv}>Climate Change</li>
        <li className={styles.filterListIndv}>Influenza</li>
      </ul>
    </div>
  );
};

export default Filter;
