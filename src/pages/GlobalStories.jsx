import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ArticleCard.css'; // Ensure you have the correct CSS file for styling

const GlobalStories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwpOyTDnHP5co1B7uspaXe52wcGoFueWk6or-ETLhX9m4ndgE9gSpb-qzLhQuBxEzayow/exec' // Replace with your Web App URL
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
      <h1>Global Stories</h1>
      <div className="articles">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2>{article.title}</h2>
            {/* Display image */}
            {article.image && (
              <img src="https://media.gettyimages.com/id/1367479760/photo/view-over-dunes-with-dune-grass-at-sunset-by-the-sea.jpg?s=612x612&w=gi&k=20&c=klT9qRJyskvf0pbmvsFPsKG9B3E4QhO541Qq1qeq5Bk=" alt={article.title} className="article-image" />
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

export default GlobalStories;
