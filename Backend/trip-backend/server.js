
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ai Planner backend is running')
})


app.post('/api/itinerary', (req, res) => {
    const newItinerary = req.body;

    let existingData = [];

    try {
        const raw = fs.readFileSync('itineraries.json');
        existingData = JSON.parse(raw)
    } catch (err) {
        console.error('Starting With an empty file.')
    }

    existingData.push(newItinerary)

    fs.writeFileSync('itineraries.json', JSON.stringify(existingData, null, 2))
   
    res.status(201).json({ message: 'Itinerary saved successfully!'})

})

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`)
})