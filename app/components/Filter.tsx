"use client";
import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import axios from "axios";
import compromise from "compromise";

const getRandPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const lightness = Math.floor(Math.random() * 31) + 70;
  return `hsl(${hue}, 100%, ${lightness}%)`;
};

const formatPublishedAt = (publishedAt) => {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInMs = now - publishedDate;

  const hours = Math.floor(diffInMs / (1000 * 60 * 60));

  return ` [${hours}h]`;
};

const Filter = () => {
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [articles, setArticles] = useState([]);

  const fetchArticlesByKeyword = (keyword) => {
    const apiKey = "a09186874ff84af584e5f9ef29ea9f2e";
    const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  };

  const handleFilterClick = (keyword) => {
    setSelectedKeyword(keyword);
    fetchArticlesByKeyword(keyword);
  };

  useEffect(() => {
    const apiKey = "a09186874ff84af584e5f9ef29ea9f2e";
    const apiUrl = "https://newsapi.org/v2/top-headlines?country=us";

    axios
      .get(`${apiUrl}&apiKey=${apiKey}`)
      .then((response) => {
        const headlines = response.data.articles.map(
          (article) => article.title,
        );
        const allWords = headlines.join(" ");

        const parsed = compromise(allWords);
        const extractedKeywords = parsed.nouns().out("array");

        setKeywords(extractedKeywords.slice(0, 8));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Group articles by source
  const groupedArticles = articles.reduce((acc, article) => {
    const source = article.source.name;
    if (!acc[source]) {
      acc[source] = [];
    }
    acc[source].push(article);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <ul className={styles.filterList}>
        {keywords.map((keyword, index) => (
          <li
            className={`${styles.filterListIndv} ${
              selectedKeyword === keyword ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleFilterClick(keyword)}
          >
            {keyword}
          </li>
        ))}
      </ul>

      {selectedKeyword && (
        <div className={styles.articlesContainer}>
          <div className={styles.columns}>
            {Object.keys(groupedArticles).map((source, index) => (
              <div className={styles.column} key={index}>
                <h3
                  style={{ backgroundColor: getRandPastelColor() }}
                  className={styles.sitename}
                >
                  {source}
                </h3>
                <ul className={styles.newsCardTitleCont}>
                  {groupedArticles[source].map((article, index) => (
                    <li className={styles.newsCardTitle} key={index}>
                      <span>{article.title}</span>
                      {""}
                      <span className={styles.publishedAt}>
                        {formatPublishedAt(article.publishedAt)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
