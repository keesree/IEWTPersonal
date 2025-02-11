import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const quotes = [
  {
    img: "/quotes/1.png",
    text: "'In a world where you can be anything, be kind' - Jennifer Dukes",
  },
  {
    img: "/quotes/2.png",
    text: "'No one has ever become poor by giving' - Anne Frank",
  },
  {
    img: "/quotes/3.png",
    text: "'The measure of who we are is what we do with what we have' - Vince Lombardi",
  },
  {
    img: "/quotes/4.png",
    text: "'Service to others is the rent you pay for your room here on Earth' - Muhammad Ali",
  },
  {
    img: "/quotes/5.png",
    text: "'A journey of a thousand miles begins with a single step' - Lao Tzu",
  },
  {
    img: "/quotes/6.png",
    text: "'Progress is impossible without change and those who cannot change their minds cannot change anything.' - George Bernard Shaw",
  },
  {
    img: "/quotes/7.png",
    text: "'The smallest deed is better than the greatest intention' - John Burroughs",
  },
  {
    img: "/quotes/8.png",
    text: "'The more we give away, the more is given to us' - Dr. Wayne Dyer",
  },
  {
    img: "/quotes/9.png",
    text: "'A single sunbeam is enough to drive away many shadows' - St. Francis of Assisi",
  },
  {
    img: "/quotes/10.png",
    text: "'The people who are crazy enough to think they can change the world are the ones who do.' - John Burroughs",
  },
  {
    img: "/quotes/11.png",
    text: "'Let us make our future now, and let us make our dreams tomorrow's reality' - Unknown",
  },
  {
    img: "/quotes/12.png",
    text: "'Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain.' - Vivian Greene",
  },
  {
    img: "/quotes/12.png",
    text: "'Act as if what you do makes a difference? - it does.' - William James",
  },
  {
    img: "/quotes/13.png",
    text: "'It always seems impossible until it's done' - Nelson Mandela",
  },
  {
    img: "/quotes/14.png",
    text: "'Spread love everywhere you go. Let no one ever come to you without leaving happier.' - Mother Teresa",
  },
  {
    img: "/quotes/15.png",
    text: "'Happiness is not something ready-made. It comes from your own actions.' - Dalai Lama",
  },
  {
    img: "/quotes/16.png",
    text: "'The best way to lose yourself is to lose yourself in the service of others.' - Mahatma Gandhi",
  },
  {
    img: "/quotes/17.png",
    text: "'Keep your face toward the sunshine- and shadows will fall behind you.' - Walt Whitman",
  },
  {
    img: "/quotes/18.png",
    text: "'Choose to be optimistic, it feels better' - The Dalai Lama",
  },
  {
    img: "/quotes/19.png",
    text: "'Say something positive, and you'll see something positive' - Jim Thompson",
  },
  {
    img: "/quotes/20.png",
    text: "'If you are positive, you'll see opportunities instead of obstacles.' - Widad Akr'aiwi",
  },
  {
    img: "/quotes/21.png",
    text: "'When you know your 'why' then your 'what' has more impact because you're working toward your purpose.' - Michael Jr.",
  },
  {
    img: "/quotes/22.png",
    text: "'The human spirit is stronger than anything that can happen to it.' - C.C. Scott",
  },
  {
    img: "/quotes/23.png",
    text: "'As we work to create light for others, we naturally light our own way.' - Mary Anne Radmacher",
  },
];
const QuoteCarousel = () => {
  return (
    <div>
      <div className="featuredCarousel">
        <Carousel>
          {quotes.map((quote, index) => (
            <Carousel.Item key={index} interval={10000}>
              <div className="carouselBackground">
                <img
                  className="d-block w-100 carouselItems"
                  src={quote.img}
                  alt={quote.text}
                />
                <Carousel.Caption>
                  <h3 className="quoteCaption">{quote.text}</h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default QuoteCarousel;
