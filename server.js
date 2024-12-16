import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Import the cors package
import pool from './db.js';  // Make sure your DB connection is correct

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.get('/', (req, res) => {
    res.send('Server is running');
  });
  

// Endpoint to submit a story
app.post('/api/stories', async (req, res) => {
    const { title, author, content, image_url } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO stories (title, author, content, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, author, content, image_url]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving story');
    }
});

// Endpoint to get all stories
app.get('/api/stories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM stories ORDER BY submission_date DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching stories');
    }
});

// Endpoint to get a single story by ID
app.get('/api/stories/:id', async (req, res) => {
    const { id } = req.params;  // Get the story ID from the URL parameters
    try {
        const result = await pool.query('SELECT * FROM stories WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);  // Return the story details
        } else {
            res.status(404).send('Story not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching story details');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
