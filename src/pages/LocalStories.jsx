import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LocalStories = () => {
  const [stories, setStories] = useState([]);

  // Fetch stories from the backend when the component is mounted
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stories');
        setStories(response.data);  // Set the fetched stories into state
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="container mt-4">
      <h2>google form to here</h2>
      <div className="row">
        {stories.map((story) => (
          <div key={story.id} className="col-md-4 mb-4">
            <div className="card">
              <Link to={`/story/${story.id}`} style={{ textDecoration: 'none' }}>
                <img
                  src={story.image_url}
                  alt={story.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'black' }}>{story.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalStories;
