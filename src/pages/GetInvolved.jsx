import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const SubmitYourStory = () => {
    const [formData, setFormData] = useState({ title: '', author: '', content: '', image_url: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/stories", formData);
            alert("Story submitted successfully!");
            setFormData({ title: "", author: "", content: "", image_url: "" });
        } catch (err) {
            console.error(err);
            alert("Error submitting story");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    put a google form here
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Image URL"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Submit Story
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SubmitYourStory;
