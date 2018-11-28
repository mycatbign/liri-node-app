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
                        movieSearch(inquirerResponse.movie);
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
                        concertSearch(inquirerResponse.band);
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
                        songSearch(inquirerResponse.song);
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
                                break;
                            //end "movie-this" search

                            case "concert-this":
                                // search Bands in Town Artist Events API
                                concertSearch(cmdArg);
                                break;
                            //end "concert-this" search

                            case "spotify-this-song":
                                // search Spotify API for song information
                                songSearch(cmdArg);
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

        //===========================================================================
        // log the transaction
        //===========================================================================

        // do we have log.txt file to log all transactions if not create it and open it

        // create string depicting the transaction 
        // appendString = "Command:" + liriCmd + " Argument:" + cmdArg;

        // append the transaction to the log.txt file
        // fs.appendFile("log.txt", appendString, function (err) {
        //     if (err) { return console.log(err); }
        // });

    }); //inquirer .then command

function concertSearch(bandName) {
    // Create the query we need for BandInTown API with the band specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    // run the BandInTown API query
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        }
    )
    // write event information to the terminal
    console.log("--------------------------------------------");
    console.log("Name of Venue: ");
    console.log("Venue Location: ");
    console.log("Date of Event: ");
};

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
            console.log(response.data);
        }
    )
    // write movie information to the terminal
    console.log("--------------------------------------------");
    console.log("Movie Title: ");
    console.log("Year movie came out: ");
    console.log("IMDB Rating: ");
    console.log("Rotten Tomatoes Rating: ");
    console.log("Country where movie was produced: ");
    console.log("Language of movie: ");
    console.log("Plot of the movie: ");
    console.log("Actors in the movie: ");
};

function songSearch(songName) {
    // if the song selection is left blank - default to "The Sign" by "Ace of Base"
    if (songName === "") {
        songName = "The Sign";
        songArtist = "Ace of Base";
    }
    // Create the query we need for Spotify API with the song specified
    var queryUrl = "http://www.spotify...";
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    // run the spotify API query
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        }
    )
    // write song information to the terminal
    console.log("--------------------------------------------");
    console.log("Artist(s): ");
    console.log("Song Name: ");
    console.log("Preview Link: ");
    console.log("Album: ");
};
