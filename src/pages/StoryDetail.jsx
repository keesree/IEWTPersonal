import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StoryDetail = () => {
    const { id } = useParams();  // Get the story ID from the URL
    const [story, setStory] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/stories/${id}`);
                setStory(response.data);  // Store the story details in state
            } catch (error) {
                console.error('Error fetching story details:', error);
            }
        };

        fetchStory();
    }, [id]);  // Fetch story whenever the ID changes

    if (!story) return <p>Loading...</p>;

    return (
        <div className="story-detail">
            <h2>{story.title}</h2>
            <p>By: {story.author}</p>
            <div>{story.content}</div>
            {story.image_url && <img src={story.image_url} alt={story.title} />}
        </div>
    );
};

export default StoryDetail;
