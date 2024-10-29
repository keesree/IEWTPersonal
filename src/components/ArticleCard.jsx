import React from "react";
import { useRoutes } from "react-router-dom";
import "../App.css";
import '../css/ArticleCard.css'

const ArticleCard = () => {
  return (
    <div className="articleCard">
      <img src="src\assets\testImage.jpg" />
      <h3>Article Title</h3>
      <p>Article Information</p>
    </div>
  );
};
export default ArticleCard;
