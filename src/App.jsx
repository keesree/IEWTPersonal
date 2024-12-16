import React from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalStories from "./pages/GlobalStories";
import LocalStories from "./pages/LocalStories";
import GetInvolved from "./pages/GetInvolved";
import Support from "./pages/Support";
import ImpactEarthAward from "./pages/ImpactEarthAward";
import StoryDetail from "./pages/StoryDetail";  // Import the story detail page
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/globalstories",
      element: <GlobalStories />,
    },
    {
      path: "/localstories",
      element: <LocalStories />,
    },
    {
      path: "/getinvolved",
      element: <GetInvolved />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/award",
      element: <ImpactEarthAward />,
    },
    {
      path: "/submit",  // Add the route for the form submission page
      element: <GetInvolved />,
    },
    {
      path: "/story/:id",  // Add the dynamic route for the story detail page
      element: <StoryDetail />,
    },
  ]);

  return (
    <div className="app">
      <Navigation />
      <main>{element}</main>
    </div>
  );
}

export default App;
