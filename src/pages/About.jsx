import React from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "react-bootstrap/Carousel";
import QuoteCarousel from "../components/QuoteCarousel";

//import ExampleCarouselImage from "components/ExampleCarouselImage";
import "../App.css";

const about =() => {
  //Home page should have a carousel of featured stories

  //Want to modify this so that it rotates through all of the images in the carousel (23)
  return (
    <div>
      <div className="featuredCarousel ">
      <QuoteCarousel />

      </div>
        
       
        
      </div>
  );
};
export default about;
