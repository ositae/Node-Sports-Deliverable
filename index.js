const express = require('express'); // third party node module

const app = express(); //  instance of the app

const fs = require('fs');

fs.readFile('teams.txt', 'utf8', (error, data) => {
    if (error){
        console.log("Error: ", error)
    }else {
        console.log(data);
    };
})



// using core modules and req.query

// Example: localhost:8000/read?something=story

// {something: 'story'}

app.get('/read', (req, res) => {

    // grab a query string

    // pass the query string into the fs function

    // return the data that comes from the txt file

    let element = req.query.something; // players, teams

    fs.readFile(`${element}.txt`, 'utf-8', (error, data) => {

        if (error) {

            return res.json({message: 'There is an issue. Try again!'})

        } else {

            return res.json({message: data});

        }

    });

})

// set up a PORT number, and listen for server

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {

    console.log('Server is runing on PORT', PORT);

});