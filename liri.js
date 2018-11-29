//===========================================================================
// 
//===========================================================================
require("dotenv").config();

//===========================================================================
// initiate axios for packaging with the spotify API
//===========================================================================
var axios = require("axios");

//===========================================================================
// initiate inquirer to get input from the user from the command line
//===========================================================================
var inquirer = require("inquirer");

//===========================================================================
// initiate the file system for use with both logging transactions and 
// reading the random.txt input file
//===========================================================================
var fs = require("fs");

//===========================================================================
// initiate use of moment for converting dates to a readable format 
//===========================================================================
var moment = require("moment");

//===========================================================================
// get the users command line arguments which define what we will do
//===========================================================================
inquirer
    .prompt([
        // What command does the user want to run - give a list to choose from.
        {
            type: "list",
            message: "Which command do you wish to run?",
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
            name: "liriCmd"
        },
    ])
    .then(function (inquirerResponse) {
        //===========================================================================
        // perform the liri command that the user selected
        //===========================================================================
        switch (inquirerResponse.liriCmd) {

            case "movie-this":
                // search OMDB API for a movie
                inquirer.prompt([{
                    type: "input",
                    message: "what movie?",
                    name: "movie"
                },
                ])
                    .then(function (inquirerResponse) {
                        // perform the movie search
                        movieSearch(inquirerResponse.movie);
                        // log transaction data
                        logTransaction("movie-this", inquirerResponse.movie);
                    });
                break;
            //end "movie-this" search

            case "concert-this":
                // search Bands in Town Artist Events API
                inquirer.prompt([{
                    type: "input",
                    message: "what band?",
                    name: "band"
                },
                ])
                    .then(function (inquirerResponse) {
                        // perform the concert search
                        concertSearch(inquirerResponse.band);
                        // log transaction data
                        logTransaction("concert-this", inquirerResponse.band);
                    });
                break;
            //end "concert-this" search

            case "spotify-this-song":
                // search Spotify API for song information
                inquirer.prompt([{
                    type: "input",
                    message: "what song?",
                    name: "song"
                },
                ])
                    .then(function (inquirerResponse) {
                        // perform the song search
                        songSearch(inquirerResponse.song);
                        // log transaction data
                        logTransaction("spotify-this-song", inquirerResponse.song);
                    });
                break;
            //end "spotify-this-song" search

            case "do-what-it-says":
                fs.readFile("random.txt", "utf8", function (error, data) {
                    if (error) {
                        return console.log(error);
                    } else {
                        var dataArr = data.split(",");
                        var liriCmd = dataArr[0];
                        var cmdArg = dataArr[1];
                        // execute the command from the random.txt file
                        switch (liriCmd) {

                            case "movie-this":
                                // search OMDB API for a movie
                                movieSearch(cmdArg);
                                // log transaction data
                                logTransaction("movie-this", cmdArg);
                                break;
                            //end "movie-this" search

                            case "concert-this":
                                // search Bands in Town Artist Events API
                                concertSearch(cmdArg);
                                // log transaction data
                                logTransaction("concert-this", cmdArg);
                                break;
                            //end "concert-this" search

                            case "spotify-this-song":
                                // search Spotify API for song information
                                songSearch(cmdArg);
                                // log transaction data
                                logTransaction("spotify-this-song", cmdArg);
                                break;
                            //end "spotify-this-song" search

                            default:
                                break;
                        } // end of switch
                    }
                });
                break;

            default:
                break;
        }
    }); //inquirer .then command

//===========================================================================
// log the transaction that took place to the log.txt file
// input the command (selectedCmd) that was performed and the argument (userArg)
// that was entered with the command.
//===========================================================================
function logTransaction(selectedCmd, userArg) {
    // create the string we will append to the log.txt file
    var logString = "\r\nCommand run: " + selectedCmd + ". Argument: " + userArg + ".";
    // append the transaction to the log.txt file
    fs.appendFile("log.txt", logString, function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
}

//===========================================================================
// concertSearch takes a band as input and searches Bands in Town Artists Events
// API for concerts that the band will be performing. The function outputs info
// about each upcoming event. 
//===========================================================================
function concertSearch(bandName) {
    // Create the query we need for BandInTown API with the band specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    // run the BandInTown API query
    axios.get(queryUrl).then(
        function (response) {
            // output the response data 
            console.log("-------------------------------------------------------------------------------");
            console.log("Here are upcoming concert venues for " + bandName + ".");
            console.log("-------------------------------------------------------------------------------");
            for (var i = 0; i < response.data.length; i++) {
                var venue = response.data[i].venue;
                var venueDate = response.data[i].datetime;
                var venueDateFormatted = moment(venueDate).format("MM/DD/YYYY");
                console.log("Name of Venue:  " + venue.name + ".");
                console.log("Venue Location: " + venue.city + ", " + venue.region + ", " + venue.country + ".");
                console.log("Date of Event:  " + venueDateFormatted + ".");
                console.log("-------------------------------------------------------------------------------");
            }
        }
    );
};

//===========================================================================
// movieSearch takes a movie as input and searches the OMDB API for info
// about the movie. If no movie is provided - the movie "Mr Nobody" is provided
// as a deafult. The function outputs info about the movie. 
//===========================================================================
function movieSearch(movieName) {
    // if the movie selection is left blank - default to "Mr Nobody"
    if (movieName === "") {
        movieName = "Mr Nobody";
    }
    // Create the query we need for OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    // run the OMDB API query
    axios.get(queryUrl).then(
        function (response) {
            // console.log(response.data);
            // var ratingData = response.data.Ratings.Source
            for (var i = 0; i < response.data.Ratings.length; i++) {
                // get the rating data 
                if (response.data.Ratings[i].Source = 'Internet Movie Database') {
                    var IMDB_Rating = response.data.Ratings[i].Value;
                }
                if (response.data.Ratings[i].Source = 'Rotten Tomatoes') {
                    var Rotten_Tomatoes_Rating = response.data.Ratings[i].Value;
                }
            };
            // write song information to the terminal
            console.log("-------------------------------------------------------------------------------");
            console.log("Here is key data for the movie " + movieName + ".");
            console.log("-------------------------------------------------------------------------------");
            console.log("Movie Title:            " + response.data.Title);
            console.log("Year movie came out:    " + response.data.Year);
            console.log("IMDB Rating:            " + IMDB_Rating);
            console.log("Rotten Tomatoes Rating: " + Rotten_Tomatoes_Rating);
            console.log("Country where produced: " + response.data.Country);
            console.log("Language of movie:      " + response.data.Language);
            console.log("Plot of the movie:      " + response.data.Plot);
            console.log("Actors in the movie:    " + response.data.Actors);
            console.log("-------------------------------------------------------------------------------");
        }
    );
};

//===========================================================================
// songSearch takes a song as input and searches the Spotify API for info
// about the song. If no song is provided - the song "The Sign" by Ace of Base
// is provided as a deafult. The function outputs info about the song. 
//===========================================================================
function songSearch(songName) {

    //===========================================================================
    // initiate use of spotify 
    //===========================================================================
    var Spotify = require('node-spotify-api');
    // getting keys to enable spotify search
    var keys = require('./keys.js');
    // create spotify variable
    var spotify = new Spotify(keys.spotify);

    // if the song selection is left blank - default to "The Sign" by "Ace of Base"
    if (songName === "") {
        songName = "The Sign";
        songArtist = "Ace of Base";
    }

    // run the spotify API query
    spotify.search({
        type: 'track',
        query: songName,
        limit: 3
    }).then(function (response) {

        // write song information to the terminal
        console.log("-------------------------------------------------------------------------------");
        console.log("Here are artists for your selected song " + songName + ".");
        console.log("-------------------------------------------------------------------------------");

        //each song sent back, we print out the info for it.
        response.tracks.items.forEach(function (result) {
            console.log("Artist(s):     " + result.artists[0].name);
            console.log("Song Name:     " + result.name);
            console.log("Preview Link:  " + result.name);
            console.log("Album:         " + result.album.name);
            console.log("On Spotify:    " + result.external_urls.spotify);
            console.log("-------------------------------------------------------------------------------");
        }) // end outputting results
    }) // end the .then function

        // if something goes wrong
        .catch(function (err) {
            console.log("No song by that name found");
        });
};
