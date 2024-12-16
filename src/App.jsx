import React from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import GlobalStories from "./pages/GlobalStories";
import LocalStories from "./pages/LocalStories";
import GetInvolved from "./pages/GetInvolved";
import Support from "./pages/Support";
import ImpactEarthAward from "./pages/ImpactEarthAward";
import StoryDetail from "./pages/StoryDetail";  // Import the story detail page
import Navigation from "./components/Navigation";
import "./App.css";
import PersonalStories from "./pages/PersonalStories";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <About/>,
    },
    {
      path: "/localstories",
      element: <LocalStories />,
    },
    {
      path: "/globalstories",
      element: <GlobalStories />,
    },
    {
      path: "/PersonalStories",
      element: <PersonalStories/>,
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
      path: "/stories/:id", // Add dynamic route for StoryDetail
      element: <StoryDetail />,
    }
  ]);

  return (
    <div className="app">
      <Navigation />
      <main>{element}</main>
    </div>
  );
}

export default App;
