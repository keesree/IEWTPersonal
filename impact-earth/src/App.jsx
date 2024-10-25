import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import GlobalStories from "./pages/GlobalStories";
import LocalStories from "./pages/LocalStories";
import GetInvolved from "./pages/GetInvolved";
import Support from "./pages/Support";
import ImpactEarthAward from "./pages/ImpactEarthAward";

function App() {
  /* let element = useRoutes([
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
  ]); */

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
