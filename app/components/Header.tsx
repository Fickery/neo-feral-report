import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavLeft}>
        <p className={styles.headerBoldFontX}>NEO-FERAL REPORT</p>
        <p className={styles.headerRefreshDate}>
          Last refresh: <i>09 October 2023, 10 AM (GMT+7)</i>
        </p>
      </div>

      <div className={styles.headerNavRight}>
        <div className={styles.headerNavButton}>Sign In</div>
      </div>
    </nav>
  );
};

export default Header;
