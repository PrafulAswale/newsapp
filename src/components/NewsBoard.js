import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [articles, setArticles] = useState([]);
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=0006b867993046c2b8f7ea8a832d94cc`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        response.json().then((data) => setArticles(data.articles));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });
  return (
    <div className="mt-5">
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default NewsBoard;
