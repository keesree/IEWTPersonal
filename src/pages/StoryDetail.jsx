import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StoryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article; // Get the article data from state

  if (!article) {
    // If no article data is found, redirect or show an error
    return (
      <div>
        <h2>Article Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="story-detail">
      <h1>{article.title}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      {article.image && <img src={article.image} alt={article.title} className="story-image" />}
      <p>{article.summary}</p>
      <div>
        <p>{article.fullContent}</p> {/* Render full content if available */}
      </div>
    </div>
  );
};

export default StoryDetail;
