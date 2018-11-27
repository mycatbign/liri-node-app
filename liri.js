require("dotenv").config();


var axios = required("axios");



//===========================================================================
// do we have log.txt file to log all transactions if not create it and open it
//===========================================================================




//===========================================================================
// get the users command line arguments which define what we will do
//===========================================================================
var fs = require("fs");
// get the liri command argument
var liriCmd = process.argv[2];
// get the artist, song argument
var cmdArg = process.argv[3];


//===========================================================================
// create a prompt for the command and for the argument
// coded out for now - if time we can prompt the user
//===========================================================================
// var inquirer = require("inquirer");
// inquirer
//     .prompt([
//         // What command does the user want to run - give a list to choose from.
//         {
//             type: "list",
//             message: "Which command do you wish to run?",
//             choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
//             name: "liriCmd"
//         },
//         // what argument goes with the command.
//         {
//             type: "input",
//             message: "What argument goes with your command selection?",
//             name: "cmdArg"
//         },
//         // ask the user to confirm.
//         {
//             type: "confirm",
//             message: "Are you sure?",
//             name: "confirm",
//             default: true
//         }
//     ])
//     .then(function (inquirerResponse) {
//         //===========================================================================
//         // run the liri
//         //===========================================================================
//     }); //inquirer .then command


//===========================================================================
// run the liri
//===========================================================================


//===========================================================================
// error check and make sure we have two arguments
//===========================================================================




//===========================================================================
// perform the command
//===========================================================================
switch (liriCmd) {

    case "concert-this":
        // search Bands in Town Artist Events API

        // write event information to the terminal
        console.log("Name of Venue: ");
        console.log("Venue Location: ");
        console.log("Date of Event: ");
        break;

    case "spotify-this-song":
        // search Spotify API for song information
        // DEFAULT TO ACE OF BASE THE SIGN??????????????????????????????

        // write song information to the terminal
        console.log("Artist(s): ");
        console.log("Song Name: ");
        console.log("Preview Link: ");
        console.log("Album: ");
        break;

    case "movie-this":
        // search OMDB API
        // DEFAULT TO MR NOBODY??????????????????????????????

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

// create string depicting the transaction 
appendString = "Command:" + liriCmd + " Argument:" + cmdArg;

// append the transaction to the log.txt file
fs.appendFile("log.txt", appendString, function (err) {
    if (err) { return console.log(err); }
});








