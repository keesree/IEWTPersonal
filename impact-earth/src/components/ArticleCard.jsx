import React from "react";
import { useRoutes } from "react-router-dom";
import "../App.css";
import '../css/ArticleCard.css'

const ArticleCard = () => {
  return (
    <div className="articleCard">
      <img src="https://t4.ftcdn.net/jpg/05/86/77/59/360_F_586775980_e3C7KDR7qoq8gDs0HAIoAxcN8zBpE7QU.jpg" />
      <h3>Article title</h3>
      <p>Article date</p>
      <p>Article tags</p>
    </div>
  );
};
export default ArticleCard;
