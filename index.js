const express = require('express');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Food Mood is delivering');
})

app.listen(port, () => {
    console.log(`Food Mood is running on port ${port}`);
})