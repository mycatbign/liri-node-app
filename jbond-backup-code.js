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
