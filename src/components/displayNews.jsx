import React, { useEffect, useState } from "react";
import './displayNews.css';

function DisplayNews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=5e7bc88db0c24d3abd4682fc6d348069";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Limit for today`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.articles); // Assuming articles is the array you want to display
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="container">
      {error && <div className="error">Error: {error}</div>}
      {data && (
        <div>
          <h2 className="headline">Top headlines:</h2>
          <ul>
            {data.map((article, index) => (
              <div key={index}>
                <h3 className="article"><a href={article.url} target='_blank' rel="noopener noreferrer">{article.title}</a></h3>
                <p className="isi">{article.author}</p>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DisplayNews;
