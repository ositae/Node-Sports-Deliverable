const express = require('express'); // third party node module

const app = express(); //  instance of the app

const fs = require('fs');

const { averagePoints } = require('./average');

// home route
app.get('/', (req, res) => {
    

    return res.json({ message: 'Welcome to my Node App' })
});

app.get('/average/:num1/:num2/:num3/:num4/:num5/', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let num3 = Number(req.params.num3);
    let num4 = Number(req.params.num4);
    let num5 = Number(req.params.num5);
    let average = averagePoints(num1, num2, num3, num4, num5);
    return res.json ({ average: average});
});

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
    return res.json ({message: "Teams With Number 1 Draft Picks since 1970"});
});

// set up a PORT number, and listen for server

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {

    console.log('Server is runing on PORT', PORT);

});