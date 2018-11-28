//===========================================================================
// create a prompt for the command and for the argument
// coded out for now - if time we can prompt the user
//===========================================================================
var inquirer = require("inquirer");
inquirer
    .prompt([
        // What command does the user want to run - give a list to choose from.
        {
            type: "list",
            message: "Which command do you wish to run?",
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
            name: "liriCmd"
        },
        // what argument goes with the command.
        {
            type: "input",
            message: "What argument goes with your command selection?",
            name: "cmdArg"
        },
        // ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        //===========================================================================
        // run the liri
        //===========================================================================
    }); //inquirer .then command



        //===========================================================================
        // sample spotify command
        //===========================================================================

    .then(function (inquirerResponse) {
    userCommand = inquirerResponse.choice;

    switch (userCommand) {
        case 'spotify-this-song':
            inquirer.prompt([{
                type: "input",
                message: "what song?",
                name: "search"
            },
            ])
                .then(function (inquirerResponse) {
                    userInput = inquirerResponse.search;
                    const keys = require("./keys");
                    keys.spotify
                        .search({
                            type: 'tracl',
                            query: '${userInput}',
                            limit: '1'
                        })
                        .then(function (response) {
                            console.log('artists name: ${response.tracks.items[0].artist...)
        })
                        .catch(function (err) {
                            console.log(err);
                            console.log("error")
                        });
                })
            break;
            //end spotify commmand


            //===========================================================================
            // sample spotify search
            //===========================================================================
            function venueSearch(input)) {
    var artist = input;
    artist = artist.charAt(0).toUpperCase() + artist.slice(1);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("Here are " + response.data.length + " upcoming concert venues for " + artist + ".\r\n");
            for i = 0, i < response.data.length; i++) {
                var venue = response.data[i].venue;
                var date = response.data[i].datetime;
                var formatDate = moment(date).format("MM/DD/YYYY");
                var dateUntil = moment(date).diff(moment(), 'days');
                console.log("this" + artist + "concert is at" + venue.name + ".");
                console.log("The " + artist + " concert is located in " + venue.city + "," + venue.region + ", " + venue.country + ". ");
                console.log("The " + artisit + "conscert is on" + formatDate + ".");
            }
        }
    );
}

//===========================================================================
// define valid use cases
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


