import React from "react";
import styles from "./NewsCard.module.css";
import newsData from "../api/data.js";

const NewsComponent = () => {
  return (
    <div className={styles.test}>
      {newsData.map((site, index) => (
        <div className={styles.newsCardMainCont}>
          <p className={styles.newsCardSite}>{site.site}</p>
          <ul className={styles.newsCardTitleCont}>
            {site.headlines.map((headline, index) => (
              <li key={index} className={styles.newsCardTitle}>
                <p className={styles.newsCardTitleheadline}>
                  <span className={styles.newsCardTitleheadline}>
                    {headline.title}
                  </span>{" "}
                  <span className={styles.newsCardTitleHours}>
                    [{headline.hoursAgo}h]
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
