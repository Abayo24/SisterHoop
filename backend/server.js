const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/places', async (req, res) => {
    const { location, keyword } = req.query;
    try{
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location,
                radius: 5000,
                keyword,
                key: process.env.GOOGLE_MAPS_API_KEY,
            },
        });

        res.json(response.data)
    } catch (error) {
        res.status(500).send('server error');
    }
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});