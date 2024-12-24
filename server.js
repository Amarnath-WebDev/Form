// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

    fs.appendFile('form-data.txt', formData, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Form data saved successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});