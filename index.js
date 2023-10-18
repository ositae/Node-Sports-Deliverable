const express = require('express'); // third party node module

const app = express(); //  instance of the app

const fs = require('fs');

// home route
app.get('/', (req, res) => {
    

    return res.json({ message: 'Welcome to my Node App' })
});

// fs.readFile('teams.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log("Error: ", error)
//     } else {
//         console.log(data);
//     };
// })



// using core modules and req.query

// Example: localhost:8000/read?something=story

// {something: 'story'}

app.get('/read', (req, res) => {

    // grab a query string

    // pass the query string into the fs function

    // return the data that comes from the txt file

    let element = req.query.search; // players, teams

    fs.readFile(`${element}.txt`, 'utf-8', (error, data) => {

        if (error) {

            return res.json({ message: 'There is an issue. Try again!' })

        } else {

            return res.json({ message: data });

        }

    });

})

// read number one draft picks
app.get('/players', (req, res) => {
    return res.json ({message: "Number 1 Draft Picks since 1970"});
});

// read team names 
app.get('/teams', (req, res) => {
    return res.json ({message: "Number 1 Draft Picks since 1970"});
});

// set up a PORT number, and listen for server

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {

    console.log('Server is runing on PORT', PORT);

});