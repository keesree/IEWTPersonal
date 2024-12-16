import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import "../App.css";

const About = () => {
  return (
    <>
      <div>
        <br></br>
        {/* About Us Header */}
        <header className="aboutHeader">
          <h1>About Us</h1>
        </header>
        <br></br>

        {/* Main Content */}
        <main className="aboutContent">
          {/* About Organization */}
          <section>
            <p>
              <strong>Impact Earth</strong> is a <strong>501(c)(3) non-profit organization</strong> based in Los Angeles County, California, and working globally.
            </p>
          </section>
          <br></br>

          {/* Mission Statement */}
          <section>
            <h2>Mission</h2>
            <p>
              <em>Sharing stories that inspire change.</em>
            </p>
            <p>
              We celebrate the amazing work that individuals and organizations are doing around our planet. We are all in this together, and each of us has a part to play in solving the challenges we face. Through the power of stories, we aim to encourage and uplift one another so that we may <strong>Impact Earth</strong>.
            </p>
          </section>
          <br></br>

          {/* Programs Section */}
          <section>
            <h2>Programs</h2>
            <ul className="programsList">
              <li>Local Stories</li>
              <li>Global Stories</li>
              <li>Personal Stories</li>
              <li>Circles of Change</li>
            </ul>
          </section>
          <br></br>

          {/* About Director/Founder */}
          <section>
            <h2>About the Director/Founder</h2>
            <p>
              Learn more about the visionary behind Impact Earth and their commitment to inspiring global change through storytelling.
            </p>
          </section>
          <br></br>

          {/* Press Section */}
          <section>
            <h2>Press</h2>
            <p>
              Discover how Impact Earth is making headlines. Explore articles, interviews, and features in the media.
            </p>
          </section>
          <br></br>

          

          {/* Contact Section */}
          <section>
            <h2>Contact</h2>
            <p>
              We'd love to hear from you! Whether you have a story to share, want to join our mission, or have any questions, feel free to reach out.
            </p>
          </section>
        </main>
        <br></br>

        {/* Footer */}
        <footer>
          <p>&copy; {new Date().getFullYear()} Impact Earth. All rights reserved.</p>
          <ul>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default About;
