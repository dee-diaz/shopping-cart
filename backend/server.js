require('dotenv').config();
const express = require('express');
const cors = require('cors');

const baseUrl = 'https://api.discogs.com/';
const endpoint = 'masters/';
const url = baseUrl + endpoint;

const app = express();
const port = process.env.PORT || 3000;

const cache = new Map();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Vinyl Shop API is running');
});

// Route to get album info
app.get('/albums/:masterId', async (req, res) => {
  try {
    const { masterId } = req.params;

    if (cache.has(masterId)) {
      console.log(`Cache HIT: ${masterId}`);
      return res.json(cache.get(masterId));
    }

    console.log(`Cache MISS: ${masterId}, fetching...`);

    const response = await fetch(`${url}${masterId}`, {
      headers: {
        'User-Agent': 'VinylShop/1.0',
        Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Discogs API error: ${response.status}`);
    }

    const data = await response.json();
    cache.set(masterId, data);
    console.log(`Cached: ${masterId}`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching album:', error);
    res.status(500).json({ error: 'Failed to fetch album data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
