const express = require('express');
const app = express();
const port = 3000; // Set your desired port

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Set the directory for static files (e.g., form.html)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/lab 7.html'); // Serve the HTML form
});

app.post('/', (req, res) => {
    // Retrieve values from the form inputs
    const noun = req.body.noun;
    const adjective = req.body.adjective;
    const verb = req.body.verb;
    const place = req.body.place;
    const color = req.body.color;

    // Construct the Mad Lib using the user inputs
    const madLib = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb} in a ${color} ${place}.`;

    // Send the filled Mad Lib as the server response
    res.send(madLib);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
