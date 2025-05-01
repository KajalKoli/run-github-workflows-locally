const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js server! Hello there.. we are  trying to run the github workflows locally');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});