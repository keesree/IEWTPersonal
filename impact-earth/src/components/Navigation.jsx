import React from "react";
import "../App.css";
import "../css/Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>🌎Impact Earth!🌎</h1>
        </li>
      </ul>

      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/globalstories">Global Stories</a>
        </li>
        <li>
          <a href="/localstories">Local Stories</a>
        </li>
        <li>
          <a href="/getinvolved">Get Involved</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
        <li>
          <a href="/award">Impact Earth Award</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
