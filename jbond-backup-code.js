
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


https://rest.bandsintown.com/artists/the offspring/events?app_id=codingbootcamp
--------------------------------------------
Name of Venue:
Venue Location:
Date of Event:

[ { offers: [ [Object] ],
    venue:
     { name: 'Good Things Festival Sideshow',
       country: 'Australia',
       region: '',
       city: 'Torrensville',
       latitude: '-34.9174945',
       longitude: '138.5612516' },
    datetime: '2018-12-05T19:00:16',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring', 'Horror My Friend' ],
    id: '100430482',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100430482?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Good Things Festival',
       country: 'Australia',
       region: '',
       city: 'Ascot Vale',
       latitude: '-37.779',
       longitude: '144.919' },
    datetime: '2018-12-07T19:00:17',
    on_sale_datetime: '',
    description: '',
    lineup:
     [ 'The Offspring',
       'Stone Sour',
       'All Time Low',
       'Dropkick Murphys',
       'Bullet for My Valentine',
       'The Used' ],
    id: '100255564',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100255564?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Good Things Festival',
       country: 'Australia',
       region: '',
       city: 'Parramatta Park',
       latitude: '-16.9264612',
       longitude: '145.766177' },
    datetime: '2018-12-08T19:00:40',
    on_sale_datetime: '',
    description: '',
    lineup:
     [ 'The Offspring',
       'Stone Sour',
       'All Time Low',
       'Dropkick Murphys',
       'Bullet for My Valentine',
       'The Used' ],
    id: '100255566',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100255566?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Good Things Festival',
       country: 'Australia',
       region: '',
       city: 'Bowen Hills',
       latitude: '-27.443194',
       longitude: '153.038389' },
    datetime: '2018-12-09T19:00:03',
    on_sale_datetime: '',
    description: '',
    lineup:
     [ 'The Offspring',
       'Stone Sour',
       'All Time Low',
       'Dropkick Murphys',
       'Bullet for My Valentine',
       'The Used' ],
    id: '100255567',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100255567?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [],
    venue:
     { name: 'Zepp Osaka Bayside',
       country: 'Japan',
       region: 'Ōsaka-fu',
       city: 'Ōsaka-shi',
       latitude: '34.6937378',
       longitude: '135.5021651' },
    datetime: '2019-01-06T19:00:08',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100434122',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100434122?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [],
    venue:
     { name: 'Zepp Nagoya',
       country: 'Japan',
       region: 'Aichi-ken',
       city: 'Nagoya-shi',
       latitude: '35.1814464',
       longitude: '136.906398' },
    datetime: '2019-01-07T19:00:27',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100434138',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100434138?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [],
    venue:
     { name: 'Toyosu PIT',
       country: 'Japan',
       region: 'Tōkyō-to',
       city: 'Kōtō-ku',
       latitude: '35.6728535',
       longitude: '139.8174097' },
    datetime: '2019-01-09T19:00:48',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100434151',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100434151?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [],
    venue:
     { name: 'Toyosu PIT',
       country: 'Japan',
       region: 'Tōkyō-to',
       city: 'Kōtō-ku',
       latitude: '35.6728535',
       longitude: '139.8174097' },
    datetime: '2019-01-10T19:00:24',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100434181',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100434181?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Open Flair Festival (Aug 7 - 11)',
       country: 'Germany',
       region: '',
       city: 'Eschwege',
       latitude: '51.1894464',
       longitude: '10.0587178' },
    datetime: '2019-08-07T17:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100434264',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100434264?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Taubertal-Festival',
       country: 'Germany',
       region: '',
       city: 'Rothenburg Ob Der Tauber',
       latitude: '49.3801834',
       longitude: '10.1867388' },
    datetime: '2019-08-09T19:00:38',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100384392',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100384392?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Rocco del Schlacko Festival',
       country: 'Germany',
       region: '',
       city: 'Püttlingen',
       latitude: '49.28332950000001',
       longitude: '6.883231099999999' },
    datetime: '2019-08-10T19:00:14',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring' ],
    id: '100384400',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100384400?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
  { offers: [ [Object] ],
    venue:
     { name: 'Bay Fest (Aug 12 -14)',
       country: 'Italy',
       region: '',
       city: 'Rimini',
       latitude: '44.0678288',
       longitude: '12.5695158' },
    datetime: '2019-08-12T19:00:26',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'The Offspring', 'NOFX' ],
    id: '100515188',
    artist_id: '327',
    url: 'https://www.bandsintown.com/e/100515188?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' } ]






    $ node liri
? Which command do you wish to run? movie-this
? what movie? frozen
http://www.omdbapi.com/?t=frozen&y=&plot=short&apikey=trilogy
{ Title: 'Frozen',
  Year: '2013',
  Rated: 'PG',
  Released: '27 Nov 2013',
  Runtime: '102 min',
  Genre: 'Animation, Adventure, Comedy, Family, Fantasy, Musical',
  Director: 'Chris Buck, Jennifer Lee',
  Writer: 'Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by "The Snow Queen" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)',
  Actors: 'Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad',
  Plot: 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
  Language: 'English, Norwegian',
  Country: 'USA',
  Awards: 'Won 2 Oscars. Another 77 wins & 57 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
  Ratings:
   [ { Source: 'Internet Movie Database', Value: '7.5/10' },
     { Source: 'Rotten Tomatoes', Value: '90%' },
     { Source: 'Metacritic', Value: '74/100' } ],
  Metascore: '74',
  imdbRating: '7.5',
  imdbVotes: '496,175',
  imdbID: 'tt2294629',
  Type: 'movie',
  DVD: '18 Mar 2014',
  BoxOffice: '$400,736,600',
  Production: 'Walt Disney Pictures',
  Website: 'http://www.disney.com/frozen',
  Response: 'True' }







