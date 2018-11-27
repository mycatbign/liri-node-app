//===========================================================================
// set up work
//===========================================================================

// 
require("dotenv").config();

// we will use axios packages to prepare data for queries
var axios = required("axios");


//===========================================================================
// get the users command line arguments which define what we will do
//===========================================================================
var fs = require("fs");
// get the liri command argument
var liriCmd = process.argv[2];
// get the artist, song, movie etc argument
var cmdArg = process.argv[3];





//===========================================================================
// run the liri
//===========================================================================


//===========================================================================
// define the use cases
//===========================================================================
//  node liri.js
//  node liri.js concert-this 
//  node liri.js concert-this "Imagine Dragons"
//  node liri.js spotify-this-song 
//  node liri.js spotify-this-song Radioactive
//  node liri.js movie-this 
//  node liri.js movie-this Frozen
//  node liri.js do-what-it-says 

//===========================================================================
// error check and make sure we have two arguments
//===========================================================================







//===========================================================================
// perform the command
//===========================================================================
switch (liriCmd) {

    case "concert-this":
        // search Bands in Town Artist Events API
        // create the axios package we need to run query

        // write event information to the terminal
        console.log("Name of Venue: ");
        console.log("Venue Location: ");
        console.log("Date of Event: ");
        break;

    case "spotify-this-song":
        // search Spotify API for song information
        // DEFAULT TO ACE OF BASE THE SIGN??????????????????????????????
        // create the axios package we need to run query

        // write song information to the terminal
        console.log("Artist(s): ");
        console.log("Song Name: ");
        console.log("Preview Link: ");
        console.log("Album: ");
        break;

    case "movie-this":
        // search OMDB API
        // DEFAULT TO MR NOBODY??????????????????????????????
        // create the axios package we need to run query

// // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// var request = require("request");

// // Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });


        // write movie information to the terminal
        console.log("Movie Title: ");
        console.log("Year movie came out: ");
        console.log("IMDB Rating: ");
        console.log("Rotten Tomatoes Rating: ");
        console.log("Country where movie was produced: ");
        console.log("Language of movie: ");
        console.log("Plot of the movie: ");
        console.log("Actors in the movie: ");
        break;

    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) { return console.log(error); }
            var dataArr = data.split(",");
            liriCmd = dataArr[0];
            cmdArg = dataArr[1];

        });
        break;

    default:
        break;
}


//===========================================================================
// log the transaction
//===========================================================================

// do we have log.txt file to log all transactions if not create it and open it


// create string depicting the transaction 
appendString = "Command:" + liriCmd + " Argument:" + cmdArg;

// append the transaction to the log.txt file
fs.appendFile("log.txt", appendString, function (err) {
    if (err) { return console.log(err); }
});








