import React from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "react-bootstrap/Carousel";
//import ExampleCarouselImage from "components/ExampleCarouselImage";
import "../App.css";

const about =() => {
  //Home page should have a carousel of featured stories

  return (
    <div>
      <div className="featuredCarousel ">
        <Carousel>
          <Carousel.Item >
            <img 
              className="d-block w-100 carouselItems"
              src="https://media.gettyimages.com/id/1367479760/photo/view-over-dunes-with-dune-grass-at-sunset-by-the-sea.jpg?s=612x612&w=gi&k=20&c=klT9qRJyskvf0pbmvsFPsKG9B3E4QhO541Qq1qeq5Bk="
              alt="Pic 1"
            />
            <Carousel.Caption>
              <h3>Inspiring Stories from Around the World!!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselItems"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWo0AOpzzT_in89hS2rsMy7d4nTxIoaj45A&s"
              alt="Pic 2"
            />
            <Carousel.Caption>
              <h3>Spreading Joy One Story at a Time!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselItems"
              src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhZG93fGVufDB8fDB8fHww"
              alt="Pic 3"
            />

            <Carousel.Caption>
              <h3>Your Daily Dose of Positivity!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        
       
        
      </div>
  );
};
export default about;
