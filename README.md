# liri-node-app

#Description:
liri.js is a node app that takes user inputs around movies, songs, and bands and searches OMDB, Spotify, and Bands in Town to return useful information. Users first select which type of search they would like to perform and then can enter specifically what they wish to search for. For instance the user can select a "movie" search and then enter in the name of a movie such as "Frozen". The app will execute a search on OMDB and return movie data. Finally the app will log all transactions in to log.txt. 

##Current commands supported include:
  
* spotify-this-song 	<song name>
  * if song is left blank it defaults to "The Sign" by "Ace of Base".
  
* movie-this	 <movie title>
  * if movie title left blank it defaults to "Mr Nobody".
  
* concert-this	<band name>
  
* do-what-it-says 
  * this will run whatever selection if entered in random.txt file.

#Requirements and Technology Used:
  run npm install -y to automatically install necessary files
  dependencies include: 
  - axios
  - node-spotify-api
  - moment
  - dotenv
  - inquirer

#Screenshots:

###Concert-This Image
This image demonstrates selecting "Concert-This" and then entering "Red Hot Chilli Peppers":
![Concert-This](/images/Concert-This.png)

###Do-What-It-Says Image
This image demonstrates selecting "Do-What-It-Says" which in turn reads the random.txt file and reads the entry and performs the search. In this case the search was "Spotify-This-Song" and the some is "I Want it That Way":
![Do-What-It-Says](/images/Do-What-It-Says.png)

###Movie-This (Blank) Image
This image demonstrates selecting "Movie-This" but not entering any movie. As a result the display is for "Mr. Nobody":
![Movie-This-Blank](/images/Movie-This Blank.png)

###Movie-This Image
This image demonstrates selecting "Movie-This" and then entering "Frozen":
![Movie-This](/images/Movie-This.png)

###Spotify-This-Song Image
This image demonstrates selecting "Spotify-This-Song" and then entering "Hey Jude":
![Spotify-This-Song](/images/Spotify-This-Song.png)

#Remaining Challenges
* Spotify-This-Song will not yet default to "The Sign" by Ace of Base.
* No error checking on the Concert-This if no band is entered.

