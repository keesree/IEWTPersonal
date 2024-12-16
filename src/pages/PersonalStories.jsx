import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ArticleCard.css'; // Ensure you have the correct CSS file for styling

const PersonalStories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbzCeitt_6plSqkLnTi9ybtbzGfqRd9wdlBKxi2B1xVHY3N8JfgkQQLeXXWQdcfXNKcX/exec' // Replace with your Web App URL
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="stories">
      <h1>Personal Stories</h1>
      <div className="articles">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2>{article.title}</h2>
            {/* Display image */}
            {article.image && (
              <img src={article.image} alt={article.title} className="article-image" />
            )}
            <p><strong>Author:</strong> {article.author}</p>
            <p>{article.summary}</p>
            <Link 
              
              to={`/stories/${index}`} 
              state={{ article }} // Pass the full article data via state
              className="read-more"
            > 
              Read Full Article
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalStories;
