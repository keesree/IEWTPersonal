import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ArticleCard.css'; // Ensure you have the correct CSS file for styling
import { useRoutes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "react-bootstrap/Carousel";
//import ExampleCarouselImage from "components/ExampleCarouselImage";
import "../App.css";
const LocalStories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbyyBGJinEpq6jXEXcoyGcOrCHmpDGNVdSVFV-uRpjXrh15tVY12ZW5NrRjFuL22eErC/exec' // Replace with your Web App URL
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
    // carousel of featured stories
    return (
      <><div>
        <div className="featuredCarousel ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselItems"
                src="https://media.gettyimages.com/id/1367479760/photo/view-over-dunes-with-dune-grass-at-sunset-by-the-sea.jpg?s=612x612&w=gi&k=20&c=klT9qRJyskvf0pbmvsFPsKG9B3E4QhO541Qq1qeq5Bk="
                alt="Pic 1" />
              <Carousel.Caption>
                <h3>Inspiring Stories from Around the World!!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselItems"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWo0AOpzzT_in89hS2rsMy7d4nTxIoaj45A&s"
                alt="Pic 2" />
              <Carousel.Caption>
                <h3>Spreading Joy One Story at a Time!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselItems"
                src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhZG93fGVufDB8fDB8fHww"
                alt="Pic 3" />

              <Carousel.Caption>
                <h3>Your Daily Dose of Positivity!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div><Carousel>
          <div className="stories">
            <h1>Local Stories</h1>
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

        </Carousel></>
    
        )
      };

export default LocalStories;
