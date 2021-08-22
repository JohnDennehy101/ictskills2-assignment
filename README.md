# Assignment - ReactJS app.

Name: John Dennehy (20091408)

## Overview.

This assignment was an extension of the movies fan app completed in the labs.
Additional functionality provided includes ability to create user / guest web application sessions, write reviews for movies / TV shows that persist via a Firebase Realtime database implementation, view full cast for movies / TV shows, view full credits for individual cast member if available from API, view trending content over last 24 hours / past week, complete detailed filter search of movies / tv shows, view upcoming content, view similar content to an individual movie / tv show.

## User Features (Extension of Movies Fan App)

- View Full Cast For Movie / TV Show
- View Details about individual cast member if available from API
- View list of TV shows
- View Trending Items (Movies / TV Shows / People) with different timeframes (last 24 hours, last week)
- Advanced Filter (release year, duration greater than, duration less than, average rating greater than, average rating less than, original language, sort by most popular, release date etc.)
- Create logged in user session (with authentication by TMDB API) on web application homepage
- Create guest user session (with creation of session token by TMDB API) on web application homepage
- View upcoming movies / tv shows
- View similar content to specific movie / tv show
- Private & Public routing (user can only view home route before either creating a user session / guest session)
- Persistence of user reviews (rating posted to TMDB API, review posted to Firebase realtime database)
- Display of user reviews (details obtained from Firebase realtime database)
- Pagination for movies & TV shows allows user to explore full library of content provided by TMDB API
- Responsive design provides users with a good User Experience, irrespective of mobile / desktop device
- Extensive caching ensures that any browser refresh results in a fast initial render of content for the user

## Setup requirements.

- Open the command line
- Enter the following command in the terminal -
  `git clone https://github.com/JohnDennehy101/ictskills2-assignment`
- Locate the the downloaded folder in the terminal and enter using the following command -
  `cd ictskills2-assignment`
- NPM modules need to be installed, enter the following command in the terminal - `npm install`
- To get the app functional, a .env file needs to be added to the project. To do this, enter the following command - `touch .env`
- The .env file should now be created. To edit this file, enter the following - `nano .env`
- A nano editor should now be displayed in terminal with the .env file open. This now needs to be populated with the relevant environment variables needed for the app to function.
  To create an API key for TMDB, navigate to the following link and create an account `https://www.themoviedb.org/`. Once the account is created, create an API key.
- A Firebase realtime database also needs to be created for the application. To do this, navigate to `https://firebase.google.com/` and click 'Get Started'. This will take you to a page where you’ll be asked to authenticate with your Google account. Select the account that you’d like this project to be affiliated with, and press OK. This should take you to the Firebase console. Create the project’s database. Click 'Add Project'. Call it “tmdb-web-app” and press OK. Select Add Firebase to your web app. This will trigger a popup with some code that will contain the details needed for the below environment variables.

  - REACT_APP_TMDB_KEY={Enter your TMDB API Key here}
  - REACT_APP_FIREBASE_API_KEY={Enter your Firebase API Key here}
  - REACT_APP_AUTH_DOMAIN={Enter your Firebase app auth domain here}
  - REACT_APP_DATABASE_URL= {Enter your Firebase database url here}
  - REACT_APP_PROJECT_ID= {Enter your Firebase project id here}
  - REACT_APP_STORAGE_BUCKET= {Enter your Firebase storage bucket here}
  - REACT_APP_MESSAGING_SENDER_ID= {Enter your Firebase sender id here}
  - REACT_APP_APP_ID={Enter your Firebase App ID here}
  - FAST_REFRESH=false

- Save the .env file `(Ctrl + O)`
- To exit the file enter `(Ctrl + X)`

- Once all this is complete, enter `npm start` to get the project running locally on localhost.

## API Data Model.

- Get Similar Movies

  ```
  https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
  ```

  Response

  ```
  {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/pP4qymqnkjKoJrKuqqR4I3xTrmo.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 531593,
            "title": "Reprisal",
            "original_language": "en",
            "original_title": "Reprisal",
            "overview": "Jacob, a bank manager haunted by a violent heist that took the life of a coworker, teams up with his ex-cop neighbor, James, to bring down the assailant. While the two men work together to figure out the thief’s next move, Gabriel, the highly-trained criminal, is one step ahead. When Gabriel kidnaps Jacob’s wife and daughter, Jacob barrels down a path of bloodshed that initiates an explosive counterattack and brings all three men to the breaking point.",
            "popularity": 27.396,
            "poster_path": "/qBsQUK5QSeZjRPLFUVgSGHxj2PI.jpg",
            "release_date": "2018-08-31",
            "video": false,
            "vote_average": 5.337,
            "vote_count": 206
        },
        {
            "adult": false,
            "backdrop_path": "/AmzVV7kqds8BJBXwnQtx5YpqFdU.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 638449,
            "title": "The Last Letter From Your Lover",
            "original_language": "en",
            "original_title": "The Last Letter From Your Lover",
            "overview": "A young journalist in London becomes obsessed with a series of letters she discovers that recounts an intense star-crossed love affair from the 1960s.",
            "popularity": 179.827,
            "poster_path": "/7AO6kkh2WYjEniQfZVxRwF7u4XI.jpg",
            "release_date": "2021-07-23",
            "video": false,
            "vote_average": 7.611,
            "vote_count": 193
        },
        {
            "adult": false,
            "backdrop_path": "/iDw6J49rf7Xlu9QZBWpvmrMqSzI.jpg",
            "genre_ids": [
                53,
                9648,
                878
            ],
            "id": 575604,
            "title": "The Call",
            "original_language": "ko",
            "original_title": "콜",
            "overview": "Connected by phone in the same home but 20 years apart, a serial killer puts another woman’s past — and life — on the line to change her own fate.",
            "popularity": 14.982,
            "poster_path": "/oz8hvZHg7tIdGwh0ErPRhobJKPR.jpg",
            "release_date": "2020-11-27",
            "video": false,
            "vote_average": 7.649,
            "vote_count": 368
        },
        {
            "adult": false,
            "backdrop_path": "/5gTQmnGYKxDfmUWJ9GUWqrszRxN.jpg",
            "genre_ids": [
                10751,
                16,
                9648,
                35
            ],
            "id": 721656,
            "title": "Happy Halloween, Scooby-Doo!",
            "original_language": "en",
            "original_title": "Happy Halloween, Scooby-Doo!",
            "overview": "Scooby-Doo and the gang team up with their pals, Bill Nye The Science Guy and Elvira Mistress of the Dark, to solve this mystery of gigantic proportions and save Crystal Cove!",
            "popularity": 93.7,
            "poster_path": "/5aL71e0XBgHZ6zdWcWeuEhwD2Gw.jpg",
            "release_date": "2020-10-06",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 138
        },
        {
            "adult": false,
            "backdrop_path": "/eIqyISB5j99OSRZUuvdN9g2bBsS.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 619592,
            "title": "Force of Nature",
            "original_language": "en",
            "original_title": "Force of Nature",
            "overview": "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
            "popularity": 13.124,
            "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
            "release_date": "2020-07-02",
            "video": false,
            "vote_average": 5.2,
            "vote_count": 321
        },
        {
            "adult": false,
            "backdrop_path": "/edCKQA7LnN1R7fOPPj2nBIi6xeE.jpg",
            "genre_ids": [
                53,
                27
            ],
            "id": 621151,
            "title": "Spell",
            "original_language": "en",
            "original_title": "Spell",
            "overview": "A father survives a plane crash in rural Appalachia, but becomes suspicious of the elderly couple who take him in to nurse him back to health with the ancient remedies.",
            "popularity": 70.756,
            "poster_path": "/4rjHhj1BAREc9zNFU8FheLJQdFf.jpg",
            "release_date": "2020-10-30",
            "video": false,
            "vote_average": 6.413,
            "vote_count": 179
        },
        {
            "adult": false,
            "backdrop_path": "/e3JXvbbWNARPqMURImTALZBHVME.jpg",
            "genre_ids": [
                27,
                53,
                28
            ],
            "id": 760883,
            "title": "Blood Red Sky",
            "original_language": "de",
            "original_title": "Blood Red Sky",
            "overview": "A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight. In order to protect her son she will have to reveal a dark secret, and unleash the inner monster she has fought to hide.",
            "popularity": 454.164,
            "poster_path": "/ky8Fua6PD7FyyOA7JACh3GDETli.jpg",
            "release_date": "2021-07-23",
            "video": false,
            "vote_average": 7.149,
            "vote_count": 751
        },
        {
            "adult": false,
            "backdrop_path": "/dFSF6cIzacFsgOBIfsztd90AIyj.jpg",
            "genre_ids": [
                18,
                53,
                9648
            ],
            "id": 345,
            "title": "Eyes Wide Shut",
            "original_language": "en",
            "original_title": "Eyes Wide Shut",
            "overview": "After Dr. Bill Harford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
            "popularity": 21.287,
            "poster_path": "/a0YOhU3zq0RkOYrVlPXCeE1oFkR.jpg",
            "release_date": "1999-07-16",
            "video": false,
            "vote_average": 7.454,
            "vote_count": 4307
        },
        {
            "adult": false,
            "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
            "genre_ids": [
                27,
                878
            ],
            "id": 348,
            "title": "Alien",
            "original_language": "en",
            "original_title": "Alien",
            "overview": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
            "popularity": 45.478,
            "poster_path": "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
            "release_date": "1979-05-25",
            "video": false,
            "vote_average": 8.121,
            "vote_count": 10773
        },
        {
            "adult": false,
            "backdrop_path": "/g9ROrZey0JYp7kf8DoAyZtKnObj.jpg",
            "genre_ids": [
                27
            ],
            "id": 377,
            "title": "A Nightmare on Elm Street",
            "original_language": "en",
            "original_title": "A Nightmare on Elm Street",
            "overview": "Teenagers in a small town are dropping like flies, apparently in the grip of mass hysteria causing their suicides. A cop's daughter, Nancy Thompson, traces the cause to child molester Fred Krueger, who was burned alive by angry parents many years before. Krueger has now come back in the dreams of his killers' children, claiming their lives as his revenge. Nancy and her boyfriend, Glen, must devise a plan to lure the monster out of the realm of nightmares and into the real world...",
            "popularity": 59.262,
            "poster_path": "/wGTpGGRMZmyFCcrY2YoxVTIBlli.jpg",
            "release_date": "1984-11-14",
            "video": false,
            "vote_average": 7.289,
            "vote_count": 3613
        },
        {
            "adult": false,
            "backdrop_path": "/8b4vDh7hNSLZKyAYUnZJalExbJb.jpg",
            "genre_ids": [
                80,
                18,
                53
            ],
            "id": 388,
            "title": "Inside Man",
            "original_language": "en",
            "original_title": "Inside Man",
            "overview": "When an armed, masked gang enter a Manhattan bank, lock the doors and take hostages, the detective assigned to effect their release enters negotiations preoccupied with corruption charges he is facing.",
            "popularity": 17.737,
            "poster_path": "/mf4i9zZVXMmqWsEb9D0OAY7k3t.jpg",
            "release_date": "2006-03-17",
            "video": false,
            "vote_average": 7.422,
            "vote_count": 4295
        },
        {
            "adult": false,
            "backdrop_path": "/wgvc3PmjQGtYYDWaeuV867mnFDs.jpg",
            "genre_ids": [
                12,
                14,
                28,
                53,
                878
            ],
            "id": 18,
            "title": "The Fifth Element",
            "original_language": "en",
            "original_title": "The Fifth Element",
            "overview": "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
            "popularity": 39.343,
            "poster_path": "/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
            "release_date": "1997-05-02",
            "video": false,
            "vote_average": 7.494,
            "vote_count": 8404
        },
        {
            "adult": false,
            "backdrop_path": "/jz9Kep0xWjiA6QDHSsd43ASxNfj.jpg",
            "genre_ids": [
                878,
                18,
                10749
            ],
            "id": 38,
            "title": "Eternal Sunshine of the Spotless Mind",
            "original_language": "en",
            "original_title": "Eternal Sunshine of the Spotless Mind",
            "overview": "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
            "popularity": 32.167,
            "poster_path": "/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
            "release_date": "2004-03-19",
            "video": false,
            "vote_average": 8.087,
            "vote_count": 11335
        },
        {
            "adult": false,
            "backdrop_path": "/3YzVtvNERQOIJXnrcWv3xhj5EMT.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 55,
            "title": "Amores Perros",
            "original_language": "es",
            "original_title": "Amores perros",
            "overview": "A fatalistic car crash in Mexico City sets off a chain of events in the lives of three persons: a young man aching to run off with his sister-in-law, a supermodel, and a homeless man. Their lives are catapulted into unforeseen circumstances instigated by the seemingly inconsequential destiny of a dog.",
            "popularity": 36.736,
            "poster_path": "/n3QrQvLM7lZ9AGExvG89OREkCXW.jpg",
            "release_date": "2000-06-16",
            "video": false,
            "vote_average": 7.612,
            "vote_count": 1785
        },
        {
            "adult": false,
            "backdrop_path": "/6gyZF4SeifiUUYDELkCS8nOqsu2.jpg",
            "genre_ids": [
                878,
                9648,
                12
            ],
            "id": 62,
            "title": "2001: A Space Odyssey",
            "original_language": "en",
            "original_title": "2001: A Space Odyssey",
            "overview": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
            "popularity": 30.629,
            "poster_path": "/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
            "release_date": "1968-04-02",
            "video": false,
            "vote_average": 8.072,
            "vote_count": 8639
        },
        {
            "adult": false,
            "backdrop_path": "/rPRcZAOMJLcUX98Jqo9iqlKY998.jpg",
            "genre_ids": [
                878,
                53,
                9648
            ],
            "id": 63,
            "title": "Twelve Monkeys",
            "original_language": "en",
            "original_title": "Twelve Monkeys",
            "overview": "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
            "popularity": 24.634,
            "poster_path": "/fCZnJSARoTbLefr9ThwWBSkJ7oR.jpg",
            "release_date": "1995-12-29",
            "video": false,
            "vote_average": 7.587,
            "vote_count": 6339
        },
        {
            "adult": false,
            "backdrop_path": "/zb5aFldTPWcvAR70vXWTQWkuDnQ.jpg",
            "genre_ids": [
                35,
                878
            ],
            "id": 68,
            "title": "Brazil",
            "original_language": "en",
            "original_title": "Brazil",
            "overview": "Low-level bureaucrat Sam Lowry escapes the monotony of his day-to-day life through a recurring daydream of himself as a virtuous hero saving a beautiful damsel. Investigating a case that led to the wrongful arrest and eventual death of an innocent man instead of wanted terrorist Harry Tuttle, he meets the woman from his daydream, and in trying to help her gets caught in a web of mistaken identities, mindless bureaucracy and lies.",
            "popularity": 16.065,
            "poster_path": "/d0PibPzCK4fVikjoD1PqHovbvkt.jpg",
            "release_date": "1985-02-20",
            "video": false,
            "vote_average": 7.677,
            "vote_count": 2428
        },
        {
            "adult": false,
            "backdrop_path": "/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg",
            "genre_ids": [
                9648,
                53
            ],
            "id": 77,
            "title": "Memento",
            "original_language": "en",
            "original_title": "Memento",
            "overview": "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
            "popularity": 24.228,
            "poster_path": "/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
            "release_date": "2000-10-11",
            "video": false,
            "vote_average": 8.194,
            "vote_count": 11332
        },
        {
            "adult": false,
            "backdrop_path": "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
            "genre_ids": [
                878,
                18,
                53
            ],
            "id": 78,
            "title": "Blade Runner",
            "original_language": "en",
            "original_title": "Blade Runner",
            "overview": "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
            "popularity": 39.974,
            "poster_path": "/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
            "release_date": "1982-06-25",
            "video": false,
            "vote_average": 7.926,
            "vote_count": 10656
        },
        {
            "adult": false,
            "backdrop_path": "/2hMt6zKQsvYvH3ZRe8T6RzAD2XB.jpg",
            "genre_ids": [
                12,
                28
            ],
            "id": 87,
            "title": "Indiana Jones and the Temple of Doom",
            "original_language": "en",
            "original_title": "Indiana Jones and the Temple of Doom",
            "overview": "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
            "popularity": 34.006,
            "poster_path": "/5VPmZF77ZjTMqIUQlXZWmdMsGIN.jpg",
            "release_date": "1984-05-23",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 6872
        }
    ],
    "total_pages": 500,
    "total_results": 10000
  }
  ```

- Get Similar TV Shows

  ```
  https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
  ```

  Response

  ```
  {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/jdri5Eu0yQfPe6h0MbOM7hbXrZC.jpg",
            "genre_ids": [
                10759,
                16,
                10762,
                10765
            ],
            "id": 51817,
            "name": "Teenage Mutant Ninja Turtles",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Teenage Mutant Ninja Turtles",
            "overview": "The Teenage Mutant Ninja Turtles are back in an all-new animated series on Nickelodeon! Surfacing topside for the first time on their fifteenth birthday, the titular turtles, Leonardo, Michelangelo, Raphael and Donatello, find that life out of the sewers isn't exactly what they thought it would be. Now the turtles must work together as a team to take on new enemies that arise to take over New York City.",
            "popularity": 48.744,
            "poster_path": "/ncSzMsFCy5HXQzo3JBgxkX10FER.jpg",
            "first_air_date": "2012-09-28",
            "vote_average": 8.131,
            "vote_count": 378
        },
        {
            "adult": false,
            "backdrop_path": "/cnA7Az2oPGJurfCy2jJ9QqckxVG.jpg",
            "genre_ids": [
                18,
                35
            ],
            "id": 62117,
            "name": "Younger",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Younger",
            "overview": "Liza Miller, a suddenly single stay-at-home mother, tries to get back into the working world, only to find it’s nearly impossible to start at the bottom at 40-year old. When a chance encounter convinces her she looks younger than she is, Liza tries to pass herself off as 26 and lands a job as an assistant at Empirical Press. Now she just has to make sure no one finds out the secret only she and her best friend Maggie share.",
            "popularity": 26.744,
            "poster_path": "/feWw6i09zaX2apzRqd7QbKEAsx9.jpg",
            "first_air_date": "2015-03-31",
            "vote_average": 6.7,
            "vote_count": 128
        },
        {
            "adult": false,
            "backdrop_path": "/yYnxld9hgTLCOFORequmOK6paj2.jpg",
            "genre_ids": [
                35,
                18
            ],
            "id": 64254,
            "name": "Master of None",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Master of None",
            "overview": "30-year-old New York actor Dev takes on such pillars of maturity as the first big job, a serious relationship, and busting sex offenders on the subway.",
            "popularity": 17.054,
            "poster_path": "/nLGBrpSSLogxEP7RmKvBbxPTmqJ.jpg",
            "first_air_date": "2015-11-06",
            "vote_average": 7.666,
            "vote_count": 296
        },
        {
            "adult": false,
            "backdrop_path": "/f4h4X5GBasNlHq8ikq2n49bvbiU.jpg",
            "genre_ids": [
                35
            ],
            "id": 61920,
            "name": "Catastrophe",
            "origin_country": [
                "GB"
            ],
            "original_language": "en",
            "original_name": "Catastrophe",
            "overview": "Rob Delaney and Sharon Horgan write and star in a comedy that follows an American man and an Irish woman who make a bloody mess as they struggle to fall in love in London.",
            "popularity": 15.054,
            "poster_path": "/2saxUzvXv2b0FgjuzAqItH5bH0x.jpg",
            "first_air_date": "2015-01-19",
            "vote_average": 7.535,
            "vote_count": 71
        },
        {
            "adult": false,
            "backdrop_path": "/jFclWhCwbW6r7ecQ3vF83QXnEWJ.jpg",
            "genre_ids": [
                18
            ],
            "id": 62852,
            "name": "Billions",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Billions",
            "overview": "A complex drama about power politics in the world of New York high finance. \n\nShrewd, savvy U.S. Attorney Chuck Rhoades and the brilliant, ambitious hedge fund king Bobby \"Axe\" Axelrod are on an explosive collision course, with each using all of his considerable smarts, power and influence to outmaneuver the other. The stakes are in the billions in this timely, provocative series.",
            "popularity": 54.239,
            "poster_path": "/lbIMe94gXNGBzlFACqbrUyEXpyN.jpg",
            "first_air_date": "2016-01-17",
            "vote_average": 7.571,
            "vote_count": 523
        },
        {
            "adult": false,
            "backdrop_path": "/80yqeIJEb7wObNw9IJkEJSWZXyi.jpg",
            "genre_ids": [
                35
            ],
            "id": 62875,
            "name": "BUNK'D",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "BUNK'D",
            "overview": "Siblings Emma, Ravi, and Zuri Ross leave their extravagant New York City penthouse once again to return to Camp Kikiwaka, a rustic summer camp in Maine where their parents met as teenagers.",
            "popularity": 36.87,
            "poster_path": "/aCg84c5Pg3woJbzXKxeCVkLgiEd.jpg",
            "first_air_date": "2015-07-31",
            "vote_average": 7.3,
            "vote_count": 75
        },
        {
            "adult": false,
            "backdrop_path": "/cskp0s5YsqKmTBNHx6XSu0WuBaB.jpg",
            "genre_ids": [
                10751,
                35
            ],
            "id": 62457,
            "name": "العيادة",
            "origin_country": [],
            "original_language": "ar",
            "original_name": "العيادة",
            "overview": "",
            "popularity": 15.072,
            "poster_path": "/cqNZvVENaU41O1oQQHZDQ0Ewp7K.jpg",
            "first_air_date": "2008-09-01",
            "vote_average": 9.0,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/nAByi95Wdm8IMxFASZo5kUQAjLT.jpg",
            "genre_ids": [
                35
            ],
            "id": 63809,
            "name": "Camera Café",
            "origin_country": [
                "IT"
            ],
            "original_language": "it",
            "original_name": "Camera Café",
            "overview": "",
            "popularity": 33.793,
            "poster_path": "/gnRp736aSqXHhxOXCbLGB30qc8D.jpg",
            "first_air_date": "2003-10-06",
            "vote_average": 5.0,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "/iQFyfYCZh0Y2E3nAOIHF0ZackS9.jpg",
            "genre_ids": [
                16,
                10765,
                10759,
                35
            ],
            "id": 62327,
            "name": "Blood Blockade Battlefront",
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "血界戦線",
            "overview": "One day, New York City as we know it vanished overnight into a mysterious fog. Now known as Hellsalem's Lot, it has become a place where another world beyond imagining is connected to our reality. The balance within this new world is protected by a secret society known as Libra. Leo, a journalist and photographer who arrives in the city, is unexpectedly recruited to join their ranks.",
            "popularity": 23.708,
            "poster_path": "/1IKNrWEqu2cpOmSpwHqaCbnbIzE.jpg",
            "first_air_date": "2015-04-05",
            "vote_average": 6.915,
            "vote_count": 53
        },
        {
            "adult": false,
            "backdrop_path": "/sSckSjkJaj6tWE4VU633XJgjbKU.jpg",
            "genre_ids": [
                18,
                80,
                9648,
                10765
            ],
            "id": 60726,
            "name": "Forever",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Forever",
            "overview": "Doctor Henry Morgan, New York City’s star medical examiner, has a secret. He doesn't just study the dead to solve criminal cases, he does it to solve the mystery that has eluded him for 200 years—the answer to his own inexplicable immortality. This long life has given Henry remarkable observation skills which impresses his new partner, Detective Jo Martinez. Each week, a new case and their budding friendship will reveal layers of Henry’s long and colorful past. Only his best friend and confidant, Abe knows Henry’s secret.",
            "popularity": 25.939,
            "poster_path": "/4OnnU4j2tQEOnsPnRZswW91v9vr.jpg",
            "first_air_date": "2014-09-22",
            "vote_average": 7.595,
            "vote_count": 341
        },
        {
            "adult": false,
            "backdrop_path": "/kDUCF6thgPwPwOzpVHldp0ULdjj.jpg",
            "genre_ids": [
                18,
                9648,
                35
            ],
            "id": 1395,
            "name": "Gossip Girl",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Gossip Girl",
            "overview": "An exclusive group of privileged teens from a posh prep school on Manhattan's Upper East Side whose lives revolve around the blog of the all-knowing albeit ultra-secretive Gossip Girl.",
            "popularity": 114.857,
            "poster_path": "/mRvSUuU1VQQkZZ578jKJpcUCuL8.jpg",
            "first_air_date": "2007-09-19",
            "vote_average": 8.407,
            "vote_count": 1417
        },
        {
            "adult": false,
            "backdrop_path": "/lyTCCuymqg8egIaQXZAY5vE4MB0.jpg",
            "genre_ids": [
                35
            ],
            "id": 1400,
            "name": "Seinfeld",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Seinfeld",
            "overview": "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
            "popularity": 82.643,
            "poster_path": "/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
            "first_air_date": "1989-07-05",
            "vote_average": 8.31,
            "vote_count": 1144
        },
        {
            "adult": false,
            "backdrop_path": "/7sJrNKwzyJWnFPFpDL9wnZ859LZ.jpg",
            "genre_ids": [
                18,
                9648,
                80
            ],
            "id": 1415,
            "name": "Elementary",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Elementary",
            "overview": "A modern-day drama about a crime-solving duo that cracks the NYPD's most impossible cases. Following his fall from grace in London and a stint in rehab, eccentric Sherlock escapes to Manhattan where his wealthy father forces him to live with his worst nightmare - a sober companion, Dr. Watson.",
            "popularity": 114.375,
            "poster_path": "/q9dObe29W4bDpgzUfOOH3ZnzDbR.jpg",
            "first_air_date": "2012-09-27",
            "vote_average": 7.466,
            "vote_count": 1158
        },
        {
            "adult": false,
            "backdrop_path": "/7RySzFeK3LPVMXcPtqfZnl6u4p1.jpg",
            "genre_ids": [
                35
            ],
            "id": 1418,
            "name": "The Big Bang Theory",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Big Bang Theory",
            "overview": "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
            "popularity": 204.627,
            "poster_path": "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
            "first_air_date": "2007-09-24",
            "vote_average": 7.733,
            "vote_count": 7561
        },
        {
            "adult": false,
            "backdrop_path": "/zOnLMRD3PIhwO5KZmWMVEnLokMo.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 1419,
            "name": "Castle",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Castle",
            "overview": "After a serial killer imitates the plots of his novels, successful mystery novelist Richard \"Rick\" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.",
            "popularity": 172.724,
            "poster_path": "/diXBeMzvfJb2iJg3G0kCUaMCzEc.jpg",
            "first_air_date": "2009-03-09",
            "vote_average": 7.97,
            "vote_count": 1164
        },
        {
            "adult": false,
            "backdrop_path": "/j9GtqBORQs2SpOXQqHdKm2gEmJO.jpg",
            "genre_ids": [
                35
            ],
            "id": 1420,
            "name": "New Girl",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "New Girl",
            "overview": "Jessica Day is an offbeat and adorable girl in her late 20s who, after a bad breakup, moves in with three single guys. Goofy, positive, vulnerable and honest to a fault, Jess has faith in people, even when she shouldn't. Although she's dorky and awkward, she's comfortable in her own skin. More prone to friendships with women, she's not used to hanging with the boys—especially at home.",
            "popularity": 74.343,
            "poster_path": "/8oCqMlKKomCArVtyOjRzMN6g40Z.jpg",
            "first_air_date": "2011-09-20",
            "vote_average": 7.195,
            "vote_count": 800
        },
        {
            "adult": false,
            "backdrop_path": "/4bzhxi3NRJwA3RYr3Rcb1rzF4rm.jpg",
            "genre_ids": [
                35
            ],
            "id": 1421,
            "name": "Modern Family",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Modern Family",
            "overview": "The Pritchett-Dunphy-Tucker clan is a wonderfully large and blended family. They give us an honest and often hilarious look into the sometimes warm, sometimes twisted, embrace of the modern family.",
            "popularity": 120.008,
            "poster_path": "/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg",
            "first_air_date": "2009-09-23",
            "vote_average": 7.626,
            "vote_count": 1479
        },
        {
            "adult": false,
            "backdrop_path": "/o3PXFKvlHf4fTlyNVWwJPtmYhOb.jpg",
            "genre_ids": [
                35
            ],
            "id": 1422,
            "name": "The Middle",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Middle",
            "overview": "The daily mishaps of a married woman and her semi-dysfunctional family and their attempts to survive life in general in the city of Orson, Indiana.",
            "popularity": 63.013,
            "poster_path": "/kVUgf65a9yFHGW8M2Wf3iUPLUAs.jpg",
            "first_air_date": "2009-09-30",
            "vote_average": 7.509,
            "vote_count": 426
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 1439,
            "name": "Here's Lucy",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Here's Lucy",
            "overview": "Here's Lucy is Lucille Ball's third network television sitcom. It ran on CBS from 1968 to 1974.",
            "popularity": 14.68,
            "poster_path": "/bv5p2CZnVg3A2YaC4O2AcBcYBd8.jpg",
            "first_air_date": "1968-09-23",
            "vote_average": 7.5,
            "vote_count": 14
        },
        {
            "adult": false,
            "backdrop_path": "/nRYLuTHNt7FZUopF6Dwh9k3jSc0.jpg",
            "genre_ids": [
                35
            ],
            "id": 1466,
            "name": "Joey",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Joey",
            "overview": "The charming and still-single Joey, who has struck out on his own and moved to Hollywood, hoping to truly make it as an actor. After reuniting with his hot high-strung hooker sister Gina, Joey moves in with Michael, his 20-year-old genius nephew, who unbelievably is literally a rocket scientist. However, what Joey lacks in book smarts he makes up for with people smarts – making him the best new friend his nephew could ask for.",
            "popularity": 31.683,
            "poster_path": "/blRfxDT7M4anCPXsC0aEeFfyvSs.jpg",
            "first_air_date": "2004-09-09",
            "vote_average": 6.448,
            "vote_count": 193
        }
    ],
    "total_pages": 500,
    "total_results": 10000
  }
  ```

- Get Movie Cast

  ```
  https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
  ```

  Response

  ```
  {
    "id": 500,
    "cast": [
        {
            "adult": false,
            "gender": 2,
            "id": 1037,
            "known_for_department": "Acting",
            "name": "Harvey Keitel",
            "original_name": "Harvey Keitel",
            "popularity": 9.997,
            "profile_path": "/nmhafZ605lZjs1CLcr9nSletOSd.jpg",
            "cast_id": 20,
            "character": "Mr. White / Larry Dimmick",
            "credit_id": "52fe424ac3a36847f8012d01",
            "order": 0
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3129,
            "known_for_department": "Acting",
            "name": "Tim Roth",
            "original_name": "Tim Roth",
            "popularity": 9.028,
            "profile_path": "/qSizF2i9gz6c6DbAC5RoIq8sVqX.jpg",
            "cast_id": 4,
            "character": "Mr. Orange / Freddy Newandyke",
            "credit_id": "52fe424ac3a36847f8012cbd",
            "order": 1
        },
        {
            "adult": false,
            "gender": 2,
            "id": 147,
            "known_for_department": "Acting",
            "name": "Michael Madsen",
            "original_name": "Michael Madsen",
            "popularity": 6.469,
            "profile_path": "/69cqjkTNKI1muAfnvorfmWNVgIe.jpg",
            "cast_id": 5,
            "character": "Mr. Blonde / Vic Vega",
            "credit_id": "52fe424ac3a36847f8012cc1",
            "order": 2
        },
        {
            "adult": false,
            "gender": 2,
            "id": 2969,
            "known_for_department": "Acting",
            "name": "Chris Penn",
            "original_name": "Chris Penn",
            "popularity": 4.718,
            "profile_path": "/oglIon8B0nRvroShuMChPe5Vfwk.jpg",
            "cast_id": 6,
            "character": "\"Nice Guy\" Eddie Cabot",
            "credit_id": "52fe424ac3a36847f8012cc5",
            "order": 3
        },
        {
            "adult": false,
            "gender": 2,
            "id": 884,
            "known_for_department": "Acting",
            "name": "Steve Buscemi",
            "original_name": "Steve Buscemi",
            "popularity": 8.484,
            "profile_path": "/lQKdHMxfYcCBOvwRKBAxPZVNtkg.jpg",
            "cast_id": 7,
            "character": "Mr. Pink",
            "credit_id": "52fe424ac3a36847f8012cc9",
            "order": 4
        },
        {
            "adult": false,
            "gender": 2,
            "id": 6937,
            "known_for_department": "Acting",
            "name": "Lawrence Tierney",
            "original_name": "Lawrence Tierney",
            "popularity": 2.295,
            "profile_path": "/veRzbAKX8vSoPiL7v7eMcAvRprK.jpg",
            "cast_id": 8,
            "character": "Joe Cabot",
            "credit_id": "52fe424ac3a36847f8012ccd",
            "order": 5
        },
        {
            "adult": false,
            "gender": 2,
            "id": 6938,
            "known_for_department": "Acting",
            "name": "Randy Brooks",
            "original_name": "Randy Brooks",
            "popularity": 6.261,
            "profile_path": "/mSZl3TZZcrkfAlZT8IDX7iHF5EC.jpg",
            "cast_id": 9,
            "character": "Detective Holdaway",
            "credit_id": "52fe424ac3a36847f8012cd1",
            "order": 6
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3206,
            "known_for_department": "Acting",
            "name": "Kirk Baltz",
            "original_name": "Kirk Baltz",
            "popularity": 2.629,
            "profile_path": "/8PkKnqLOjfWm33GFk2Azt7MvY2Q.jpg",
            "cast_id": 22,
            "character": "Officer Marvin Nash",
            "credit_id": "52fe424ac3a36847f8012d05",
            "order": 7
        },
        {
            "adult": false,
            "gender": 2,
            "id": 6939,
            "known_for_department": "Acting",
            "name": "Edward Bunker",
            "original_name": "Edward Bunker",
            "popularity": 2.887,
            "profile_path": "/or5afkJZ6wVCL9XWOxs7tjft2El.jpg",
            "cast_id": 11,
            "character": "Mr. Blue",
            "credit_id": "52fe424ac3a36847f8012cd5",
            "order": 8
        },
        {
            "adult": false,
            "gender": 2,
            "id": 138,
            "known_for_department": "Directing",
            "name": "Quentin Tarantino",
            "original_name": "Quentin Tarantino",
            "popularity": 19.476,
            "profile_path": "/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
            "cast_id": 12,
            "character": "Mr. Brown",
            "credit_id": "52fe424ac3a36847f8012cd9",
            "order": 9
        },
        {
            "adult": false,
            "gender": 0,
            "id": 46346,
            "known_for_department": "Acting",
            "name": "Rich Turner",
            "original_name": "Rich Turner",
            "popularity": 0.6,
            "profile_path": null,
            "cast_id": 34,
            "character": "Sheriff #1",
            "credit_id": "52fe424ac3a36847f8012d49",
            "order": 10
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1067187,
            "known_for_department": "Acting",
            "name": "David Steen",
            "original_name": "David Steen",
            "popularity": 0.65,
            "profile_path": "/frsLHFlVY6UVwh0ux4vrqHixO5C.jpg",
            "cast_id": 35,
            "character": "Sheriff #2",
            "credit_id": "52fe424ac3a36847f8012d4d",
            "order": 11
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1287673,
            "known_for_department": "Acting",
            "name": "Tony Cosmo",
            "original_name": "Tony Cosmo",
            "popularity": 0.6,
            "profile_path": null,
            "cast_id": 36,
            "character": "Sheriff #3",
            "credit_id": "52fe424ac3a36847f8012d51",
            "order": 12
        },
        {
            "adult": false,
            "gender": 0,
            "id": 65908,
            "known_for_department": "Acting",
            "name": "Stevo Polyi",
            "original_name": "Stevo Polyi",
            "popularity": 0.694,
            "profile_path": null,
            "cast_id": 37,
            "character": "Sheriff #4",
            "credit_id": "52fe424ac3a36847f8012d55",
            "order": 13
        },
        {
            "adult": false,
            "gender": 0,
            "id": 271738,
            "known_for_department": "Acting",
            "name": "Michael Sottile",
            "original_name": "Michael Sottile",
            "popularity": 2.023,
            "profile_path": "/tOuwYfJyfJq8e3lZEpKtOi5afU0.jpg",
            "cast_id": 92,
            "character": "Teddy",
            "credit_id": "5adc1db10e0a26144501882f",
            "order": 14
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1173999,
            "known_for_department": "Acting",
            "name": "Robert Ruth",
            "original_name": "Robert Ruth",
            "popularity": 0.6,
            "profile_path": "/7evl0ZWubDDaIHnRA546Aj8WGvG.jpg",
            "cast_id": 93,
            "character": "Shot Cop",
            "credit_id": "5adc1dc19251410ac50187bd",
            "order": 15
        },
        {
            "adult": false,
            "gender": 2,
            "id": 2545,
            "known_for_department": "Production",
            "name": "Lawrence Bender",
            "original_name": "Lawrence Bender",
            "popularity": 1.96,
            "profile_path": "/mZRwkIvUj8USnS7Jfwd6VdHkY2x.jpg",
            "cast_id": 94,
            "character": "Young Cop",
            "credit_id": "5adc1dd3c3a36862c0018eb8",
            "order": 16
        },
        {
            "adult": false,
            "gender": 1,
            "id": 65907,
            "known_for_department": "Acting",
            "name": "Linda Kaye",
            "original_name": "Linda Kaye",
            "popularity": 0.6,
            "profile_path": "/ftcHVQAFvaZPpAwZFI1uMmXUrlL.jpg",
            "cast_id": 87,
            "character": "Shocked Woman",
            "credit_id": "5aa3d2fe0e0a26074b00c2c5",
            "order": 17
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878558,
            "known_for_department": "Crew",
            "name": "Suzanne Celeste",
            "original_name": "Suzanne Celeste",
            "popularity": 0.917,
            "profile_path": null,
            "cast_id": 95,
            "character": "Shot Woman",
            "credit_id": "5adc1e0d9251410acb017fee",
            "order": 18
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3214,
            "known_for_department": "Acting",
            "name": "Steven Wright",
            "original_name": "Steven Wright",
            "popularity": 1.567,
            "profile_path": "/9Q9buDjfm6uq0VE86MZ01o96lyG.jpg",
            "cast_id": 33,
            "character": "K-Billy DJ (voice)",
            "credit_id": "52fe424ac3a36847f8012d45",
            "order": 19
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1772250,
            "known_for_department": "Acting",
            "name": "Laurie Lathem",
            "original_name": "Laurie Lathem",
            "popularity": 0.6,
            "profile_path": "/jhywKJVgAzirohPvyarkgX9JrMV.jpg",
            "cast_id": 96,
            "character": "Background Radio Play (voice)",
            "credit_id": "5adc1e520e0a2614420189b5",
            "order": 20
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2027645,
            "known_for_department": "Acting",
            "name": "Maria Strova",
            "original_name": "Maria Strova",
            "popularity": 1.943,
            "profile_path": "/bmhTdiFb974a9s9gU5Pk4t0ZYVl.jpg",
            "cast_id": 97,
            "character": "Background Radio Play (voice)",
            "credit_id": "5adc1e709251410acb01804c",
            "order": 21
        },
        {
            "adult": false,
            "gender": 2,
            "id": 58552,
            "known_for_department": "Directing",
            "name": "Burr Steers",
            "original_name": "Burr Steers",
            "popularity": 0.6,
            "profile_path": "/k9rAVWornL0SUIykpjd3K3IfSll.jpg",
            "cast_id": 98,
            "character": "Background Radio Play (voice)",
            "credit_id": "5adc1e840e0a261442018a07",
            "order": 22
        },
        {
            "adult": false,
            "gender": 2,
            "id": 65903,
            "known_for_department": "Writing",
            "name": "Craig Hamann",
            "original_name": "Craig Hamann",
            "popularity": 0.6,
            "profile_path": "/7WSKIislGgMQFuRnEI59VgjAro3.jpg",
            "cast_id": 99,
            "character": "Background Radio Play (voice)",
            "credit_id": "5adc1e9cc3a36862ca01a727",
            "order": 23
        },
        {
            "adult": false,
            "gender": 0,
            "id": 65911,
            "known_for_department": "Acting",
            "name": "Rowland Wafford",
            "original_name": "Rowland Wafford",
            "popularity": 0.6,
            "profile_path": null,
            "cast_id": 100,
            "character": "Diner Patron (uncredited)",
            "credit_id": "5adc1f93c3a36803fa018379",
            "order": 24
        }
    ],
    "crew": [
        {
            "adult": false,
            "gender": 2,
            "id": 138,
            "known_for_department": "Directing",
            "name": "Quentin Tarantino",
            "original_name": "Quentin Tarantino",
            "popularity": 19.476,
            "profile_path": "/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
            "credit_id": "5e840d0dcb6db50013a6b3b6",
            "department": "Directing",
            "job": "Director"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 138,
            "known_for_department": "Directing",
            "name": "Quentin Tarantino",
            "original_name": "Quentin Tarantino",
            "popularity": 19.476,
            "profile_path": "/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
            "credit_id": "52fe424ac3a36847f8012d0b",
            "department": "Writing",
            "job": "Writer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 2545,
            "known_for_department": "Production",
            "name": "Lawrence Bender",
            "original_name": "Lawrence Bender",
            "popularity": 1.96,
            "profile_path": "/mZRwkIvUj8USnS7Jfwd6VdHkY2x.jpg",
            "credit_id": "52fe424ac3a36847f8012cdf",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 37334,
            "known_for_department": "Production",
            "name": "Paul Hellerman",
            "original_name": "Paul Hellerman",
            "popularity": 0.735,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d2f",
            "department": "Production",
            "job": "Production Manager"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 156,
            "known_for_department": "Editing",
            "name": "Sally Menke",
            "original_name": "Sally Menke",
            "popularity": 1.626,
            "profile_path": "/ggD5FOF6kgCz2X9NQESmxJwCCWc.jpg",
            "credit_id": "52fe424ac3a36847f8012ceb",
            "department": "Editing",
            "job": "Editor"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1037,
            "known_for_department": "Acting",
            "name": "Harvey Keitel",
            "original_name": "Harvey Keitel",
            "popularity": 9.997,
            "profile_path": "/nmhafZ605lZjs1CLcr9nSletOSd.jpg",
            "credit_id": "557df738c3a36821ab000546",
            "department": "Production",
            "job": "Co-Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1777,
            "known_for_department": "Production",
            "name": "Ross Katz",
            "original_name": "Ross Katz",
            "popularity": 0.6,
            "profile_path": "/1JAPs21rMe9O6ggAoUjAMQjbNeK.jpg",
            "credit_id": "59a48ac7925141396f0041b2",
            "department": "Camera",
            "job": "Grip"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 5779,
            "known_for_department": "Art",
            "name": "David Wasco",
            "original_name": "David Wasco",
            "popularity": 1.094,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012cf7",
            "department": "Art",
            "job": "Production Design"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 8297,
            "known_for_department": "Writing",
            "name": "Roger Avary",
            "original_name": "Roger Avary",
            "popularity": 2.647,
            "profile_path": null,
            "credit_id": "5aa3d2cf0e0a26075700c68b",
            "department": "Writing",
            "job": "Writer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 8297,
            "known_for_department": "Writing",
            "name": "Roger Avary",
            "original_name": "Roger Avary",
            "popularity": 2.647,
            "profile_path": null,
            "credit_id": "59a48dc892514139b400465b",
            "department": "Crew",
            "job": "Creator"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 5507,
            "known_for_department": "Production",
            "name": "Ronnie Yeskel",
            "original_name": "Ronnie Yeskel",
            "popularity": 0.652,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012cf1",
            "department": "Production",
            "job": "Casting"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3115,
            "known_for_department": "Camera",
            "name": "Andrzej Sekula",
            "original_name": "Andrzej Sekula",
            "popularity": 1.614,
            "profile_path": "/8vPRxAkQC1j22qvadt0H8ZByqBb.jpg",
            "credit_id": "52fe424ac3a36847f8012ce5",
            "department": "Camera",
            "job": "Director of Photography"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 6940,
            "known_for_department": "Sound",
            "name": "Karyn Rachtman",
            "original_name": "Karyn Rachtman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5636061a925141284c01a4db",
            "department": "Sound",
            "job": "Music Supervisor"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 11801,
            "known_for_department": "Art",
            "name": "Sandy Reynolds-Wasco",
            "original_name": "Sandy Reynolds-Wasco",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d23",
            "department": "Art",
            "job": "Set Decoration"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 11802,
            "known_for_department": "Costume & Make-Up",
            "name": "Betsy Heimann",
            "original_name": "Betsy Heimann",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d29",
            "department": "Costume & Make-Up",
            "job": "Costume Design"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 12525,
            "known_for_department": "Production",
            "name": "Debra Grieco",
            "original_name": "Debra Grieco",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08d25c3a36873448389c4",
            "department": "Production",
            "job": "Assistant Accountant"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 12997,
            "known_for_department": "Production",
            "name": "Richard N. Gladstein",
            "original_name": "Richard N. Gladstein",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d11",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 16177,
            "known_for_department": "Sound",
            "name": "Ron Bartlett",
            "original_name": "Ron Bartlett",
            "popularity": 2.246,
            "profile_path": "/AmFG81joHLkvnh4Io20TdCCBk8P.jpg",
            "credit_id": "5aa3d356925141279300b31a",
            "department": "Sound",
            "job": "Sound Re-Recording Mixer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 20921,
            "known_for_department": "Directing",
            "name": "Monte Hellman",
            "original_name": "Monte Hellman",
            "popularity": 1.106,
            "profile_path": "/2EIGgmdiPMJf64qvM24Vuj0aBGs.jpg",
            "credit_id": "52fe424ac3a36847f8012d17",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 22054,
            "known_for_department": "Crew",
            "name": "Ken Lesco",
            "original_name": "Ken Lesco",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c1b925141396f0042eb",
            "department": "Crew",
            "job": "Stunt Coordinator"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 46589,
            "known_for_department": "Costume & Make-Up",
            "name": "Mary Claire Hannan",
            "original_name": "Mary Claire Hannan",
            "popularity": 1.4,
            "profile_path": "/po5EDrudtAYk9azlv8Zkku7R3wU.jpg",
            "credit_id": "59a48afa925141398b0045a8",
            "department": "Costume & Make-Up",
            "job": "Costume Supervisor"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 58809,
            "known_for_department": "Directing",
            "name": "Martin Kitrosser",
            "original_name": "Martin Kitrosser",
            "popularity": 1.09,
            "profile_path": null,
            "credit_id": "59a48c8ac3a3680b04004988",
            "department": "Directing",
            "job": "Script Supervisor"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 66137,
            "known_for_department": "Production",
            "name": "Ronna B. Wallace",
            "original_name": "Ronna B. Wallace",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d1d",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 74989,
            "known_for_department": "Camera",
            "name": "Mark Emery Moore",
            "original_name": "Mark Emery Moore",
            "popularity": 0.828,
            "profile_path": null,
            "credit_id": "59a48ae09251413955004273",
            "department": "Camera",
            "job": "Steadicam Operator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 143893,
            "known_for_department": "Costume & Make-Up",
            "name": "Michelle Bühler",
            "original_name": "Michelle Bühler",
            "popularity": 0.84,
            "profile_path": null,
            "credit_id": "59a48b289251413950004538",
            "department": "Costume & Make-Up",
            "job": "Makeup Artist"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 148455,
            "known_for_department": "Writing",
            "name": "Ziad Doueiri",
            "original_name": "Ziad Doueiri",
            "popularity": 0.613,
            "profile_path": null,
            "credit_id": "59a48aa292514139b4004362",
            "department": "Camera",
            "job": "First Assistant Camera"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 554887,
            "known_for_department": "Sound",
            "name": "Stephen Hunter Flick",
            "original_name": "Stephen Hunter Flick",
            "popularity": 2.009,
            "profile_path": null,
            "credit_id": "59a48da9925141398b004847",
            "department": "Sound",
            "job": "Supervising Sound Editor"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1280074,
            "known_for_department": "Editing",
            "name": "Kelley Dixon",
            "original_name": "Kelley Dixon",
            "popularity": 0.6,
            "profile_path": "/gPlAQoRbQZp4ZYAY4GsBPpznolt.jpg",
            "credit_id": "59a48cabc3a3680ab50040f6",
            "department": "Editing",
            "job": "First Assistant Editor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1287670,
            "known_for_department": "Crew",
            "name": "Stephen DeLollis",
            "original_name": "Stephen DeLollis",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d35",
            "department": "Crew",
            "job": "Special Effects"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1287671,
            "known_for_department": "Crew",
            "name": "Rick Yale",
            "original_name": "Rick Yale",
            "popularity": 0.6,
            "profile_path": "/ueu5fp4IZdqYMiwkSt8OcPeJ0Yw.jpg",
            "credit_id": "52fe424ac3a36847f8012d3b",
            "department": "Crew",
            "job": "Special Effects"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1287672,
            "known_for_department": "Crew",
            "name": "Larry Fioritto",
            "original_name": "Larry Fioritto",
            "popularity": 0.828,
            "profile_path": null,
            "credit_id": "52fe424ac3a36847f8012d41",
            "department": "Crew",
            "job": "Special Effects Coordinator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1395361,
            "known_for_department": "Sound",
            "name": "Steve F.B. Smith",
            "original_name": "Steve F.B. Smith",
            "popularity": 0.677,
            "profile_path": null,
            "credit_id": "59a48de1c3a3680ad5004069",
            "department": "Sound",
            "job": "Dolby Consultant"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1397865,
            "known_for_department": "Production",
            "name": "Peggy Kennedy",
            "original_name": "Peggy Kennedy",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48ceb925141399800467f",
            "department": "Production",
            "job": "Casting Associate"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1399640,
            "known_for_department": "Crew",
            "name": "James Lowder",
            "original_name": "James Lowder",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c50c3a3680aec004943",
            "department": "Crew",
            "job": "Transportation Coordinator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1403434,
            "known_for_department": "Art",
            "name": "Brett C. Smith",
            "original_name": "Brett C. Smith",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48a5dc3a3680aec004779",
            "department": "Art",
            "job": "Leadman"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1404717,
            "known_for_department": "Sound",
            "name": "Curt Schulkey",
            "original_name": "Curt Schulkey",
            "popularity": 0.84,
            "profile_path": null,
            "credit_id": "59a48d83c3a3680a5b003eb7",
            "department": "Sound",
            "job": "Sound Editor"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1407812,
            "known_for_department": "Sound",
            "name": "Geoffrey G. Rubay",
            "original_name": "Geoffrey G. Rubay",
            "popularity": 0.84,
            "profile_path": null,
            "credit_id": "5aa3d379925141278400aea0",
            "department": "Sound",
            "job": "Supervising Sound Editor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1409269,
            "known_for_department": "Art",
            "name": "Jonathan Bobbitt",
            "original_name": "Jonathan Bobbitt",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08c919251412c0e06b543",
            "department": "Art",
            "job": "Swing"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1410102,
            "known_for_department": "Art",
            "name": "Jonathan R. Hodges",
            "original_name": "Jonathan R. Hodges",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48bc09251413998004553",
            "department": "Art",
            "job": "Property Master"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1423863,
            "known_for_department": "Sound",
            "name": "David E. Stone",
            "original_name": "David E. Stone",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5aa3d3a50e0a26075d00c6a0",
            "department": "Sound",
            "job": "Sound Editor"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1456721,
            "known_for_department": "Crew",
            "name": "Marian Green",
            "original_name": "Marian Green",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c2ec3a3680ac7004850",
            "department": "Crew",
            "job": "Stunts"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1515865,
            "known_for_department": "Production",
            "name": "Jamie Beardsley",
            "original_name": "Jamie Beardsley",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c76c3a3680ab50040b0",
            "department": "Directing",
            "job": "First Assistant Director"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1546084,
            "known_for_department": "Crew",
            "name": "Jeannie H. Kelly",
            "original_name": "Jeannie H. Kelly",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48b52c3a3680b1200475b",
            "department": "Crew",
            "job": "Craft Service"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1547239,
            "known_for_department": "Costume & Make-Up",
            "name": "Jacqueline Aronson",
            "original_name": "Jacqueline Aronson",
            "popularity": 0.98,
            "profile_path": null,
            "credit_id": "59a48b3d925141398b0045e1",
            "department": "Costume & Make-Up",
            "job": "Set Costumer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1548677,
            "known_for_department": "Crew",
            "name": "Bruce Comtois",
            "original_name": "Bruce Comtois",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48be7c3a3680ac7004814",
            "department": "Crew",
            "job": "Security"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1549654,
            "known_for_department": "Sound",
            "name": "Jennifer Pyken",
            "original_name": "Jennifer Pyken",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48baec3a3680b120047a8",
            "department": "Crew",
            "job": "Post Production Assistant"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1564584,
            "known_for_department": "Sound",
            "name": "Charles Ewing Smith",
            "original_name": "Charles Ewing Smith",
            "popularity": 1.094,
            "profile_path": null,
            "credit_id": "5aa3d397c3a3687c0c00bc32",
            "department": "Sound",
            "job": "Sound Editor"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1764075,
            "known_for_department": "Sound",
            "name": "Ken Segal",
            "original_name": "Ken Segal",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48d7192514139a7004892",
            "department": "Sound",
            "job": "Production Sound Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1802719,
            "known_for_department": "Sound",
            "name": "Mary Louise Rodgers",
            "original_name": "Mary Louise Rodgers",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08cacc3a3687348837630",
            "department": "Sound",
            "job": "Foley Artist"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1804961,
            "known_for_department": "Production",
            "name": "Kelly Kiernan",
            "original_name": "Kelly Kiernan",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08c76925141557804785f",
            "department": "Directing",
            "job": "Second Assistant Director"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1857117,
            "known_for_department": "Production",
            "name": "Enid L. Kantor",
            "original_name": "Enid L. Kantor",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48d12c3a3680b04004a30",
            "department": "Production",
            "job": "Production Coordinator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878553,
            "known_for_department": "Art",
            "name": "Marino Pascal",
            "original_name": "Marino Pascal",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48a7092514139a7004587",
            "department": "Art",
            "job": "Location Scout"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878555,
            "known_for_department": "Camera",
            "name": "Ric Urbauer",
            "original_name": "Ric Urbauer",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48ab7c3a3680a5b003c49",
            "department": "Camera",
            "job": "Key Grip"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878556,
            "known_for_department": "Costume & Make-Up",
            "name": "Iain Jones",
            "original_name": "Iain Jones",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48b109251413998004488",
            "department": "Costume & Make-Up",
            "job": "Hair Designer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878557,
            "known_for_department": "Costume & Make-Up",
            "name": "Rachel Tanner",
            "original_name": "Rachel Tanner",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48b1c92514139a7004629",
            "department": "Costume & Make-Up",
            "job": "Hairstylist"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878558,
            "known_for_department": "Crew",
            "name": "Suzanne Celeste",
            "original_name": "Suzanne Celeste",
            "popularity": 0.917,
            "profile_path": null,
            "credit_id": "59a48b63925141398b004605",
            "department": "Crew",
            "job": "Dialect Coach"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878559,
            "known_for_department": "Crew",
            "name": "David Coffee",
            "original_name": "David Coffee",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48b73c3a3680a5b003ce5",
            "department": "Crew",
            "job": "Driver"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878560,
            "known_for_department": "Crew",
            "name": "Wayne Alexander",
            "original_name": "Wayne Alexander",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48b9dc3a3680b12004798",
            "department": "Crew",
            "job": "Legal Services"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878562,
            "known_for_department": "Crew",
            "name": "Warren Betts",
            "original_name": "Warren Betts",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48bd692514139a70046d9",
            "department": "Crew",
            "job": "Public Relations"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878563,
            "known_for_department": "Crew",
            "name": "Melanie Molyneux",
            "original_name": "Melanie Molyneux",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48bfa92514139b40044b7",
            "department": "Crew",
            "job": "Set Medic"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878564,
            "known_for_department": "Crew",
            "name": "Ben C. Giller",
            "original_name": "Ben C. Giller",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c4492514139980045d5",
            "department": "Crew",
            "job": "Transportation Captain"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878565,
            "known_for_department": "Crew",
            "name": "Marina Bailey",
            "original_name": "Marina Bailey",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c62c3a3680a5b003da5",
            "department": "Crew",
            "job": "Unit Publicist"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878566,
            "known_for_department": "Editing",
            "name": "Chuck Winston",
            "original_name": "Chuck Winston",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48c9bc3a3680ad5003f5d",
            "department": "Editing",
            "job": "Color Timer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878567,
            "known_for_department": "Lighting",
            "name": "Jay Dahlquist",
            "original_name": "Jay Dahlquist",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48cc6c3a3680b120048ab",
            "department": "Lighting",
            "job": "Best Boy Electric"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878568,
            "known_for_department": "Lighting",
            "name": "Joey D. Brown",
            "original_name": "Joey D. Brown",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48cd1c3a3680ac70048e2",
            "department": "Lighting",
            "job": "Electrician"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878569,
            "known_for_department": "Lighting",
            "name": "Greg R. McCullough",
            "original_name": "Greg R. McCullough",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48cddc3a3680b120048cc",
            "department": "Lighting",
            "job": "Gaffer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878570,
            "known_for_department": "Production",
            "name": "Billy A. Fox",
            "original_name": "Billy A. Fox",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48cf79251413949004656",
            "department": "Production",
            "job": "Location Manager"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878571,
            "known_for_department": "Production",
            "name": "R. Blaine Currier",
            "original_name": "R. Blaine Currier",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48d05925141398b00478f",
            "department": "Production",
            "job": "Production Accountant"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878572,
            "known_for_department": "Sound",
            "name": "Dwayne S. Henkel",
            "original_name": "Dwayne S. Henkel",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48d37925141396f0043f4",
            "department": "Sound",
            "job": "Boom Operator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878573,
            "known_for_department": "Sound",
            "name": "John Hulsman",
            "original_name": "John Hulsman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48d4392514139b40045e5",
            "department": "Sound",
            "job": "Assistant Sound Editor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878574,
            "known_for_department": "Sound",
            "name": "Cecilia Perna",
            "original_name": "Cecilia Perna",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08cbd0e0a265986fa873b",
            "department": "Sound",
            "job": "Foley Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1878575,
            "known_for_department": "Crew",
            "name": "John Lieberman",
            "original_name": "John Lieberman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "59a48df9c3a3680aec004b12",
            "department": "Crew",
            "job": "Thanks"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2113078,
            "known_for_department": "Camera",
            "name": "Dink Adams",
            "original_name": "Dink Adams",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08ccd9251412c0e06b5c1",
            "department": "Camera",
            "job": "Best Boy Grip"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278035,
            "known_for_department": "Directing",
            "name": "Andy Spilkoman",
            "original_name": "Andy Spilkoman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08c87c3a368735b837031",
            "department": "Directing",
            "job": "Second Second Assistant Director"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278036,
            "known_for_department": "Sound",
            "name": "Nancy Lynn Hurlbut",
            "original_name": "Nancy Lynn Hurlbut",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08ca29251416318048305",
            "department": "Sound",
            "job": "Assistant Music Supervisor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278037,
            "known_for_department": "Camera",
            "name": "Dennis K. Wilson",
            "original_name": "Dennis K. Wilson",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08cd7c3a3687359836161",
            "department": "Camera",
            "job": "Dolly Grip"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278038,
            "known_for_department": "Camera",
            "name": "Randall Guth",
            "original_name": "Randall Guth",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08ce79251416318048351",
            "department": "Camera",
            "job": "Second Assistant Camera"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278039,
            "known_for_department": "Editing",
            "name": "Mark Lass",
            "original_name": "Mark Lass",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08cf3c3a368734a83763c",
            "department": "Editing",
            "job": "Negative Cutter"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278040,
            "known_for_department": "Production",
            "name": "Judith E. Goldman",
            "original_name": "Judith E. Goldman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08d00c3a368734e83aa01",
            "department": "Production",
            "job": "Assistant Location Manager"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 2278041,
            "known_for_department": "Production",
            "name": "Mary Santiago",
            "original_name": "Mary Santiago",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08d82c3a3687355835763",
            "department": "Production",
            "job": "Extras Casting"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278042,
            "known_for_department": "Crew",
            "name": "Robert John Speer",
            "original_name": "Robert John Speer",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08d8c0e0a265989fa8cd9",
            "department": "Crew",
            "job": "Generator Operator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278043,
            "known_for_department": "Crew",
            "name": "Pat Domenico",
            "original_name": "Pat Domenico",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08d990e0a265980fab1a4",
            "department": "Crew",
            "job": "Key Special Effects"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2278044,
            "known_for_department": "Production",
            "name": "Wendy Baker",
            "original_name": "Wendy Baker",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "5ca08da49251411a2506e3a2",
            "department": "Production",
            "job": "Production Assistant"
        }
    ]
  }
  ```

- Get TV show Cast

  ```
  https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
  ```

  Response

  ```
  {
    "cast": [
        {
            "adult": false,
            "gender": 2,
            "id": 781,
            "known_for_department": "Acting",
            "name": "Paul Reiser",
            "original_name": "Paul Reiser",
            "popularity": 1.533,
            "profile_path": "/v3e5TClep4ugMdU4qSRiKbvLr3B.jpg",
            "character": "Paul Buchman",
            "credit_id": "52537c0a19c2957940194d51",
            "order": 0
        },
        {
            "adult": false,
            "gender": 1,
            "id": 9994,
            "known_for_department": "Acting",
            "name": "Helen Hunt",
            "original_name": "Helen Hunt",
            "popularity": 13.988,
            "profile_path": "/5yCEIDARfBc2HVCMlrQhgmQCSXN.jpg",
            "character": "Jamie Buchman",
            "credit_id": "52537c0a19c2957940194ca3",
            "order": 1
        },
        {
            "adult": false,
            "gender": 1,
            "id": 15044,
            "known_for_department": "Acting",
            "name": "Leila Kenzle",
            "original_name": "Leila Kenzle",
            "popularity": 1.708,
            "profile_path": null,
            "character": "Fran Devanow",
            "credit_id": "52537c0a19c2957940194d8b",
            "order": 2
        },
        {
            "adult": false,
            "gender": 2,
            "id": 59872,
            "known_for_department": "Acting",
            "name": "John Pankow",
            "original_name": "John Pankow",
            "popularity": 3.34,
            "profile_path": "/cb4udknKU3v3nH0ej2NUzRJljXa.jpg",
            "character": "Ira Buchman",
            "credit_id": "52537c0a19c2957940194d17",
            "order": 4
        }
    ],
    "crew": [
        {
            "adult": false,
            "gender": 1,
            "id": 9994,
            "known_for_department": "Acting",
            "name": "Helen Hunt",
            "original_name": "Helen Hunt",
            "popularity": 13.988,
            "profile_path": "/5yCEIDARfBc2HVCMlrQhgmQCSXN.jpg",
            "credit_id": "52537c0a19c2957940194e29",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 781,
            "known_for_department": "Acting",
            "name": "Paul Reiser",
            "original_name": "Paul Reiser",
            "popularity": 1.533,
            "profile_path": "/v3e5TClep4ugMdU4qSRiKbvLr3B.jpg",
            "credit_id": "52537c0d19c2957940194f93",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 82937,
            "known_for_department": "Writing",
            "name": "Victor Levin",
            "original_name": "Victor Levin",
            "popularity": 1.264,
            "profile_path": "/hHWe8ZOyB0gQpJIw92Hk7jtMQbW.jpg",
            "credit_id": "52537c1019c29579401950bd",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1213745,
            "known_for_department": "Writing",
            "name": "Jeffrey Lane",
            "original_name": "Jeffrey Lane",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1319c29579401951ad",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 6767,
            "known_for_department": "Directing",
            "name": "Larry Charles",
            "original_name": "Larry Charles",
            "popularity": 0.84,
            "profile_path": "/rt48JIfeIJPNNZftESWnMEuzAXN.jpg",
            "credit_id": "52537c0d19c2957940194f57",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1212750,
            "known_for_department": "Writing",
            "name": "Danny Jacobson",
            "original_name": "Danny Jacobson",
            "popularity": 1.4,
            "profile_path": "/7fW5gwzbH0iJpnhHAF8EE4YwAmr.jpg",
            "credit_id": "52537c0d19c2957940194f1b",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217293,
            "known_for_department": "Production",
            "name": "Bill Grundfest",
            "original_name": "Bill Grundfest",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c0f19c295794019500b",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217300,
            "known_for_department": "Production",
            "name": "Liz Coe",
            "original_name": "Liz Coe",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1619c295794019529d",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1217291,
            "known_for_department": "Writing",
            "name": "Maria Semple",
            "original_name": "Maria Semple",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c0d19c2957940194edf",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1217292,
            "known_for_department": "Writing",
            "name": "Stephen Engel",
            "original_name": "Stephen Engel",
            "popularity": 1.094,
            "profile_path": null,
            "credit_id": "52537c0e19c2957940194fcf",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1217285,
            "known_for_department": "Writing",
            "name": "Brenda Hampton",
            "original_name": "Brenda Hampton",
            "popularity": 0.692,
            "profile_path": null,
            "credit_id": "52537c0f19c2957940195045",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1217297,
            "known_for_department": "Production",
            "name": "Eileen Conn",
            "original_name": "Eileen Conn",
            "popularity": 0.98,
            "profile_path": null,
            "credit_id": "52537c1319c2957940195171",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217301,
            "known_for_department": "Acting",
            "name": "Steve Paymer",
            "original_name": "Steve Paymer",
            "popularity": 0.996,
            "profile_path": null,
            "credit_id": "52537c1719c295794019534d",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1217295,
            "known_for_department": "Production",
            "name": "Marjorie Weitzman",
            "original_name": "Marjorie Weitzman",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1119c29579401950f9",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217290,
            "known_for_department": "Production",
            "name": "Craig Knizek",
            "original_name": "Craig Knizek",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c0b19c2957940194e65",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1213124,
            "known_for_department": "Writing",
            "name": "Richard Day",
            "original_name": "Richard Day",
            "popularity": 0.603,
            "profile_path": null,
            "credit_id": "52537c1319c29579401951e7",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1214409,
            "known_for_department": "Writing",
            "name": "Jenji Kohan",
            "original_name": "Jenji Kohan",
            "popularity": 2.051,
            "profile_path": "/f3ypLKqGYrbJbh9b0mdIqyGeOqx.jpg",
            "credit_id": "52537c0c19c2957940194ea1",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1213740,
            "known_for_department": "Writing",
            "name": "Jeffrey Klarik",
            "original_name": "Jeffrey Klarik",
            "popularity": 1.399,
            "profile_path": null,
            "credit_id": "52537c1619c2957940195311",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217298,
            "known_for_department": "Production",
            "name": "Mary Connelly",
            "original_name": "Mary Connelly",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1419c2957940195223",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217294,
            "known_for_department": "Directing",
            "name": "Robert Heath",
            "original_name": "Robert Heath",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1019c2957940195081",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1217296,
            "known_for_department": "Writing",
            "name": "Andy Gordon",
            "original_name": "Andy Gordon",
            "popularity": 0.652,
            "profile_path": null,
            "credit_id": "52537c1219c2957940195135",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1217299,
            "known_for_department": "Production",
            "name": "Bruce Chevillat",
            "original_name": "Bruce Chevillat",
            "popularity": 0.6,
            "profile_path": null,
            "credit_id": "52537c1519c2957940195261",
            "department": "Production",
            "job": "Producer"
        }
    ],
    "id": 500
  }
  ```

- Get detailed info about individual cast member
  ```
  https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
  ```
  Response
  ```
  {
    "adult": false,
    "also_known_as": [
        "Leaf Phoenix",
        "Joaquin Rafael Bottom",
        "華堅·馮力士",
        "Хоакин Феникс",
        "วาคีน ฟินิกซ์",
        "خواكين فينيكس",
        "호아킨 피닉스",
        "ホアキン・フェニックス",
        "Хоакін Фенікс",
        "Χοακίν Φίνιξ",
        "杰昆·菲尼克斯",
        "Joaquin Rafael Phoenix ",
        "חואקין פיניקס"
    ],
    "biography": "Joaquin Rafael Phoenix (born October 28, 1974) is an American actor and producer. He has received numerous awards and nominations, including an Academy Award, a Grammy Award, and two Golden Globe Awards.\n\nAs a child, Phoenix started acting in television with his brother River and sister Summer. His first major film role was in SpaceCamp (1986). During this period, he was credited as Leaf Phoenix, a name he gave himself. He later went back to his original name and received positive reviews for his supporting work in the comedy-drama film To Die For (1995) and the period film Quills (2000). He received wider attention for his portrayal of Commodus in the historical drama film Gladiator (2000), for which he was nominated for the Academy Award for Best Supporting Actor. He subsequently earned Best Actor nominations for portraying musician Johnny Cash in Walk the Line (2005), an alcoholic war veteran in The Master (2012), and the title character in Joker (2019), winning for the latter. His other films include the horror films Signs (2002) and The Village (2004), the historical drama Hotel Rwanda (2004), the romantic drama Her (2013), the crime satire Inherent Vice (2014), and the psychological thriller You Were Never Really Here (2017), winning the Cannes Film Festival Award for Best Actor for the latter.\n\nPhoenix has also ventured into directing music videos, as well as producing films and television shows. For recording the soundtrack to Walk the Line, he won the Grammy Award for Best Compilation Soundtrack for Visual Media. He is a social activist and has lent his support to several charities and humanitarian organizations. He is on the board of directors for The Lunchbox Fund, a non-profit organization which provides daily meals to school students in the South African town of Soweto. He is also known for his animal rights advocacy; he has been a vegan since the age of three and often campaigns with PETA and In Defense of Animals. For his lifelong dedication to animal rights, he was named PETA's Person of the Year in 2019.\n\nDescription above from the Wikipedia article Joaquin Phoenix, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    "birthday": "1974-10-28",
    "deathday": null,
    "gender": 2,
    "homepage": null,
    "id": 73421,
    "imdb_id": "nm0001618",
    "known_for_department": "Acting",
    "name": "Joaquin Phoenix",
    "place_of_birth": "San Juan, Puerto Rico",
    "popularity": 7.099,
    "profile_path": "/nXMzvVF6xR3OXOedozfOcoA20xh.jpg"
  }
  ```
- Get individual cast member credits

  ```
  https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
  ```

  Response

  ```
  {
    "cast": [
        {
            "original_language": "en",
            "original_title": "Walk the Line",
            "poster_path": "/zMkD6FVikyPNnigoupO7vD5ti9p.jpg",
            "video": false,
            "vote_average": 7.5,
            "overview": "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis and Carl Perkins.",
            "release_date": "2005-09-13",
            "vote_count": 2105,
            "id": 69,
            "adult": false,
            "backdrop_path": "/Amk5blHZnUwzK2Z4iXKJU5EAgYq.jpg",
            "title": "Walk the Line",
            "genre_ids": [
                18,
                10402,
                10749
            ],
            "popularity": 12.694,
            "character": "Johnny Cash",
            "credit_id": "52fe4213c3a36847f8001f43",
            "order": 0,
            "media_type": "movie"
        },
        {
            "overview": "A New York nightclub manager tries to save his brother and father from Russian mafia hitmen.",
            "release_date": "2007-10-09",
            "id": 2001,
            "adult": false,
            "backdrop_path": "/rbhVwKpL3vdZ3e4fufq3MfKujwb.jpg",
            "genre_ids": [
                18,
                80,
                53
            ],
            "original_language": "en",
            "original_title": "We Own the Night",
            "poster_path": "/4WZa4ktiaAIEZPcyb4vnmOSYLjm.jpg",
            "vote_count": 965,
            "title": "We Own the Night",
            "vote_average": 6.7,
            "video": false,
            "popularity": 10.054,
            "character": "Bobby Green",
            "credit_id": "52fe432ac3a36847f803f6f7",
            "order": 0,
            "media_type": "movie"
        },
        {
            "title": "Two Lovers",
            "original_language": "en",
            "original_title": "Two Lovers",
            "poster_path": "/skwYEUcxhUub9QCSwPDMvBySphS.jpg",
            "video": false,
            "id": 10362,
            "overview": "A depressed man moves back in with his parents following a recent heartbreak and finds himself with two women.",
            "release_date": "2008-11-19",
            "vote_count": 597,
            "adult": false,
            "backdrop_path": "/zJmSB5hc8nODfENl7IAZMDHgwSH.jpg",
            "vote_average": 6.8,
            "genre_ids": [
                18,
                10749
            ],
            "popularity": 7.664,
            "character": "Leonard",
            "credit_id": "52fe43609251416c7500e005",
            "order": 0,
            "media_type": "movie"
        },
        {
            "overview": "Under the watchful eye of his mentor, Captain Mike Kennedy, probationary firefighter Jack Morrison matures into a seasoned veteran at a Baltimore fire station. However, Jack has reached a crossroads  as the sacrifices he's made have put him in harm's way innumerable times and significantly impacted his relationship with his wife and kids.",
            "release_date": "2004-10-01",
            "adult": false,
            "backdrop_path": "/xieC3W15ai5RfajdeTkBt6JblIl.jpg",
            "vote_count": 568,
            "genre_ids": [
                18,
                28,
                53
            ],
            "vote_average": 6.4,
            "original_language": "en",
            "original_title": "Ladder 49",
            "poster_path": "/aJWQNUUHVcI7kvlVdUzPS9J8XHt.jpg",
            "id": 11128,
            "video": false,
            "title": "Ladder 49",
            "popularity": 16.929,
            "character": "Jack Morrison",
            "credit_id": "52fe43fe9251416c7502556d",
            "order": 0,
            "media_type": "movie"
        },
        {
            "id": 30238,
            "video": false,
            "vote_count": 231,
            "vote_average": 8.1,
            "title": "Earthlings",
            "release_date": "2005-09-24",
            "original_language": "en",
            "original_title": "Earthlings",
            "genre_ids": [
                99
            ],
            "backdrop_path": "/nEo7B55t79RhcbOjLo6Zcbig4Ku.jpg",
            "adult": false,
            "overview": "Using hidden cameras and never-before-seen footage, Earthlings chronicles the day-to-day practices of the largest industries in the world, all of which rely entirely on animals for profit.",
            "poster_path": "/fcRUYYyDWLJPlX7D6RPtQwdU7G2.jpg",
            "popularity": 7.395,
            "character": "Himself",
            "credit_id": "52fe44079251416c910027b7",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/4h24iK9gizpa3RoaLPBaciVrF19.jpg",
            "genre_ids": [
                18,
                80,
                53
            ],
            "vote_count": 259,
            "original_language": "en",
            "original_title": "Reservation Road",
            "poster_path": "/pZaYofgshgEkeW4Huo3o6tEX89C.jpg",
            "title": "Reservation Road",
            "video": false,
            "vote_average": 6.6,
            "id": 8954,
            "overview": "Two fathers' lives intersect when one of them is involved in a terrible and sudden hit-and-run car accident that leaves the other's son dead. In response, the two men react in unexpected ways as a reckoning looms in the near future.",
            "release_date": "2007-09-13",
            "popularity": 8.032,
            "character": "Ethan Learner",
            "credit_id": "52fe44cbc3a36847f80aa46f",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/h02PKNxjnklbZhK8sqhNvO2Yg3q.jpg",
            "genre_ids": [
                18,
                35,
                10752,
                80,
                53
            ],
            "original_language": "en",
            "original_title": "Buffalo Soldiers",
            "poster_path": "/qNl4T8xxC0xDeX8JFJVCBzH4Kg8.jpg",
            "title": "Buffalo Soldiers",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 206,
            "overview": "A criminal subculture operates among U.S. soldiers stationed in West Germany just before the fall of the Berlin wall.",
            "release_date": "2002-10-31",
            "id": 9104,
            "popularity": 8.383,
            "character": "Ray Elwood",
            "credit_id": "52fe44dcc3a36847f80ae68b",
            "order": 0,
            "media_type": "movie"
        },
        {
            "id": 26618,
            "adult": false,
            "backdrop_path": "/brB272BzxcuTG5NdTRcjNEqAb3A.jpg",
            "genre_ids": [
                80,
                35
            ],
            "original_language": "en",
            "original_title": "Clay Pigeons",
            "poster_path": "/A6ebyxABDaLvOBaS6Q6MWCdOsY5.jpg",
            "vote_count": 87,
            "video": false,
            "vote_average": 6.2,
            "title": "Clay Pigeons",
            "overview": "Clay is a young man in a small town who witnesses his friend, Earl kill himself because of the ongoing affair that Clay was having with the man's wife, Amanda. Feeling guilty, Clay now resists the widow when she presses him to continue with their sexual affairs. Clay inadvertently befriends a serial killer named Lester Long, who murders the widow in an attempt to \"help\" his \"fishing buddy.\"",
            "release_date": "1998-09-25",
            "popularity": 8.033,
            "character": "Clay Bidwell",
            "credit_id": "52fe450fc3a368484e0460af",
            "order": 0,
            "media_type": "movie"
        },
        {
            "video": false,
            "vote_average": 6.4,
            "overview": "In the 1950s, brothers Jacey and Doug Holt, who come from the poorer side of their sleepy Midwestern town, vie for the affections of the wealthy, lovely Abbott sisters. Lady-killer Jacey alternates between Eleanor and Alice, wanting simply to break the hearts of rich young women. But sensitive Doug has a real romance with Pamela, which Jacey and the Abbott patriarch, Lloyd, both frown upon.",
            "release_date": "1997-04-04",
            "title": "Inventing the Abbotts",
            "adult": false,
            "backdrop_path": "/AjADvvk4yTwb8rEJX1BR8m9owFR.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "vote_count": 149,
            "original_language": "en",
            "original_title": "Inventing the Abbotts",
            "poster_path": "/ysfD96fF56BEzpktyDWChC8Epgs.jpg",
            "id": 12723,
            "popularity": 9.521,
            "character": "Doug Holt",
            "credit_id": "52fe451b9251416c7504bfa5",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/1sQmaInvljaOmM72d1INctTry3S.jpg",
            "genre_ids": [
                18,
                10749,
                878,
                53
            ],
            "id": 12777,
            "original_language": "en",
            "original_title": "It's All About Love",
            "overview": "The story of two lovers and their attempts to save their relationship in a near-future world on the brink of cosmic collapse. John, and world-famous ice skating star, Elena, are about to sign divorce papers when they realise that, in spite of everything happening around them, their love is worth fighting for. It's All About Love is a fresh take on modern love and future life as two lovers struggle in a conspiracy of epic proportions.",
            "poster_path": "/3XivsYM9XJJvHtMS0x1hE2KpKw1.jpg",
            "release_date": "2003-01-10",
            "title": "It's All About Love",
            "video": false,
            "vote_average": 5.6,
            "vote_count": 78,
            "popularity": 7.62,
            "character": "John",
            "credit_id": "52fe45219251416c7504cbd9",
            "order": 0,
            "media_type": "movie"
        },
        {
            "id": 443009,
            "adult": false,
            "backdrop_path": "/aZYjP0cS1zsDHgyvDo6ymxF5JEY.jpg",
            "genre_ids": [
                35,
                18
            ],
            "vote_count": 479,
            "original_language": "en",
            "original_title": "Don't Worry, He Won't Get Far on Foot",
            "poster_path": "/rKsiN37qMt8jad5GikZzSeevyI9.jpg",
            "title": "Don't Worry, He Won't Get Far on Foot",
            "video": false,
            "vote_average": 6.7,
            "release_date": "2018-04-04",
            "overview": "On the rocky path to sobriety after a life-changing accident, John Callahan discovers the healing power of art, willing his injured hands into drawing hilarious, often controversial cartoons, which bring him a new lease on life.",
            "popularity": 11.236,
            "character": "John Callahan",
            "credit_id": "58ac5109c3a36849f6011e90",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/vsYDM57zpTB0oixMPL7DWCsihGp.jpg",
            "genre_ids": [
                18,
                10751
            ],
            "id": 27738,
            "original_language": "en",
            "original_title": "Russkies",
            "overview": "A group of American boys discovers a Russian sailor washed up on the coast of Florida and decide to befriend him, assuming that he is friendly and will bring them no danger and thus go against the ideas of their parents, as well as the government.",
            "poster_path": "/A7utYbyrvaKKIbGTH3tsPeSZA20.jpg",
            "release_date": "1987-11-06",
            "title": "Russkies",
            "video": false,
            "vote_average": 5.5,
            "vote_count": 19,
            "popularity": 2.623,
            "character": "Danny",
            "credit_id": "52fe4563c3a368484e057833",
            "order": 0,
            "media_type": "movie"
        },
        {
            "overview": "I'm Still Here is a portrayal of a tumultuous year in the life of actor Joaquin Phoenix. With remarkable access, the film follows the Oscar-nominee as he announces his retirement from a successful film career in the fall of 2008 and sets off to reinvent himself as a hip-hop musician. The film is a portrait of an artist at a crossroads and explores notions of courage and creative reinvention, as well as the ramifications of a life spent in the public eye.",
            "release_date": "2010-09-10",
            "adult": false,
            "backdrop_path": "/yZq3kFveiDtfJpwQTgZwXBxs4aE.jpg",
            "genre_ids": [
                10402,
                35,
                18
            ],
            "vote_count": 275,
            "original_language": "en",
            "original_title": "I'm Still Here",
            "poster_path": "/qJsvyPrmZro8pA7v9ozpuoNmsTQ.jpg",
            "id": 43939,
            "video": false,
            "vote_average": 6.1,
            "title": "I'm Still Here",
            "popularity": 7.56,
            "character": "Joaquin Phoenix",
            "credit_id": "52fe466cc3a36847f80fe417",
            "order": 0,
            "media_type": "movie"
        },
        {
            "release_date": "2012-09-07",
            "adult": false,
            "backdrop_path": "/q8BrpqSdH6csD4oNHbuCl0vplC1.jpg",
            "genre_ids": [
                18
            ],
            "vote_count": 2175,
            "original_language": "en",
            "original_title": "The Master",
            "poster_path": "/rUSjbyvYWN9H4az8xt0tDtU7I6v.jpg",
            "video": false,
            "id": 68722,
            "vote_average": 7.2,
            "title": "The Master",
            "overview": "Freddie, a volatile, heavy-drinking veteran who suffers from post-traumatic stress disorder, finds some semblance of a family when he stumbles onto the ship of Lancaster Dodd, the charismatic leader of a new \"religion\" he forms after World War II.",
            "popularity": 14.516,
            "character": "Freddie Quell",
            "credit_id": "52fe47a0c3a368484e0d16ad",
            "order": 0,
            "media_type": "movie"
        },
        {
            "video": false,
            "vote_average": 7.9,
            "overview": "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user's every needs. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
            "release_date": "2013-12-18",
            "vote_count": 11266,
            "adult": false,
            "backdrop_path": "/nG5zmbVeYlcDhckrPAe06fArywn.jpg",
            "id": 152601,
            "genre_ids": [
                10749,
                878,
                18
            ],
            "title": "Her",
            "original_language": "en",
            "original_title": "Her",
            "poster_path": "/yk4J4aewWYNiBhD49WD7UaBBn37.jpg",
            "popularity": 35.614,
            "character": "Theodore Twombly",
            "credit_id": "52fe4b259251416c910d1639",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/4n7CAVy98YADmnTzcva1YZbk8gE.jpg",
            "genre_ids": [
                18,
                10752
            ],
            "id": 219611,
            "original_language": "en",
            "original_title": "Back Beyond",
            "overview": "A short film consisting of deleted scenes from Paul Thomas Anderson's \"The Master\".",
            "poster_path": "/zsDqxbjEbDDl3owwbcHtPINwyGz.jpg",
            "release_date": "2013-02-26",
            "title": "Back Beyond",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 13,
            "popularity": 1.64,
            "character": "Freddie Quell",
            "credit_id": "52fe4e6ac3a368484e21f6e1",
            "order": 0,
            "media_type": "movie"
        },
        {
            "overview": "On a small town college campus, a philosophy professor in existential crisis gives his life new purpose when he enters into a relationship with his student.",
            "release_date": "2015-07-17",
            "adult": false,
            "backdrop_path": "/igTAlETp0TI24SbZdQxt8EM1bcA.jpg",
            "id": 282984,
            "genre_ids": [
                18,
                35,
                80
            ],
            "original_language": "en",
            "original_title": "Irrational Man",
            "poster_path": "/ipAqhEWRzEuD6aXlAWIvEEF1KUe.jpg",
            "vote_count": 1970,
            "video": false,
            "vote_average": 6.5,
            "title": "Irrational Man",
            "popularity": 10.616,
            "character": "Abe",
            "credit_id": "53ccb976c3a36877610023cc",
            "order": 0,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/gdB7NhS3x5dj91w69mYZtz0ysdN.jpg",
            "genre_ids": [
                35,
                10749,
                80,
                18,
                9648
            ],
            "original_language": "en",
            "original_title": "Inherent Vice",
            "poster_path": "/1lCpYaSkXKcPhAuoFHbFdc13cH.jpg",
            "id": 171274,
            "vote_average": 6.6,
            "vote_count": 1936,
            "overview": "In Los Angeles at the turn of the 1970s, drug-fueled detective Larry \"Doc\" Sportello investigates the disappearance of an ex-girlfriend.",
            "release_date": "2014-12-12",
            "video": false,
            "title": "Inherent Vice",
            "adult": false,
            "popularity": 18.447,
            "character": "Larry \"Doc\" Sportello",
            "credit_id": "52fe4d07c3a36847f824ad45",
            "order": 0,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/5kjNfOfiGr5D8OpwNPqvTPQ7pEQ.jpg",
            "genre_ids": [
                53,
                18
            ],
            "id": 398181,
            "original_language": "en",
            "original_title": "You Were Never Really Here",
            "overview": "A traumatised veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, his nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.",
            "poster_path": "/ktPbjD6nYg5NxmeTt72Iqaw5GD0.jpg",
            "release_date": "2017-11-08",
            "title": "You Were Never Really Here",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 2038,
            "popularity": 19.224,
            "character": "Joe",
            "credit_id": "573d72849251414b7f000494",
            "order": 0,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                12,
                16,
                10751
            ],
            "original_language": "en",
            "original_title": "Brother Bear",
            "poster_path": "/9VvLgj28J5m04y5gO0mt5np4yF8.jpg",
            "video": false,
            "title": "Brother Bear",
            "id": 10009,
            "overview": "When an impulsive boy named Kenai is magically transformed into a bear, he must literally walk in another's footsteps until he learns some valuable life lessons. His courageous and often zany journey introduces him to a forest full of wildlife, including the lovable bear cub Koda, hilarious moose Rutt and Tuke, woolly mammoths and rambunctious rams.",
            "release_date": "2003-10-23",
            "vote_count": 4210,
            "vote_average": 7.2,
            "adult": false,
            "backdrop_path": "/nMKfeFtE9bML6yjdcymrt5vtaNz.jpg",
            "popularity": 79.03,
            "character": "Kenai (voice)",
            "credit_id": "575f3031c3a3687d2e0003d1",
            "order": 0,
            "media_type": "movie"
        },
        {
            "video": false,
            "title": "Joker",
            "id": 475557,
            "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            "release_date": "2019-10-02",
            "adult": false,
            "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            "vote_count": 18407,
            "genre_ids": [
                80,
                53,
                18
            ],
            "vote_average": 8.2,
            "original_language": "en",
            "original_title": "Joker",
            "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            "popularity": 325.073,
            "character": "Arthur Fleck / Joker",
            "credit_id": "5e8593bd98f1f10014aacb71",
            "order": 0,
            "media_type": "movie"
        },
        {
            "id": 798286,
            "genre_ids": [
                35,
                18,
                27
            ],
            "original_language": "en",
            "original_title": "Disappointment Blvd.",
            "poster_path": "/ridePEJgorUZdfHiN4r4Y7RlhZE.jpg",
            "video": false,
            "vote_average": 0.0,
            "overview": "An intimate, decades-spanning portrait of one of the most successful entrepreneurs of all time.",
            "release_date": "",
            "vote_count": 0,
            "title": "Disappointment Blvd.",
            "adult": false,
            "backdrop_path": null,
            "popularity": 0.649,
            "character": "",
            "credit_id": "602eb618d55c3d00401f7d59",
            "order": 0,
            "media_type": "movie"
        },
        {
            "original_title": "Gladiator",
            "poster_path": "/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
            "video": false,
            "vote_average": 8.2,
            "overview": "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
            "id": 98,
            "vote_count": 13980,
            "adult": false,
            "backdrop_path": "/swpjSgGmBCx6QgfO4rgv5vBzqHL.jpg",
            "title": "Gladiator",
            "genre_ids": [
                28,
                18,
                12
            ],
            "release_date": "2000-05-01",
            "original_language": "en",
            "popularity": 42.64,
            "character": "Commodus",
            "credit_id": "52fe4217c3a36847f8003439",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/aMiI1j9L8V1EBL0CNZaekQC9AW3.jpg",
            "genre_ids": [
                18,
                53,
                878,
                9648
            ],
            "id": 2675,
            "original_language": "en",
            "original_title": "Signs",
            "overview": "A family living on a farm finds mysterious crop circles in their fields which suggests something more frightening to come.",
            "poster_path": "/hyZkNEbNgnciUVTyu4NZTjlCh4L.jpg",
            "release_date": "2002-08-02",
            "title": "Signs",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 4171,
            "popularity": 26.218,
            "character": "Merrill Hess",
            "credit_id": "52fe4364c3a36847f805103f",
            "order": 1,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/kvx7bCHYcQT8JXmldT89EYMw7W9.jpg",
            "genre_ids": [
                18,
                9648,
                53
            ],
            "original_language": "en",
            "original_title": "The Village",
            "poster_path": "/v7UvYtKfIVaHLaHwVgfalyrK7Ho.jpg",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 3051,
            "overview": "When a willful young man tries to venture beyond his sequestered Pennsylvania hamlet, his actions set off a chain of chilling incidents that will alter the community forever.",
            "release_date": "2004-07-30",
            "title": "The Village",
            "id": 6947,
            "adult": false,
            "popularity": 24.18,
            "character": "Lucius Hunt",
            "credit_id": "52fe4469c3a36847f8094825",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/eEP8pyCmldfbnml0SFMvPK7kE4x.jpg",
            "genre_ids": [
                53,
                80,
                9648
            ],
            "id": 8224,
            "original_language": "en",
            "original_title": "8MM",
            "overview": "A small, seemingly innocuous plastic reel of film leads surveillance specialist Tom Welles down an increasingly dark and frightening path. With the help of the streetwise Max, he relentlessly follows a bizarre trail of evidence to determine the fate of a complete stranger. As his work turns into obsession, he drifts farther and farther away from his wife, family and simple life as a small-town PI.",
            "poster_path": "/iNdCT4b8LnWYFueRH0RO5o6f6pk.jpg",
            "release_date": "1999-02-26",
            "title": "8MM",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 1366,
            "popularity": 13.068,
            "character": "Max California",
            "credit_id": "52fe4498c3a36847f809f199",
            "order": 1,
            "media_type": "movie"
        },
        {
            "release_date": "2000-10-20",
            "adult": false,
            "backdrop_path": "/a2oVxZfn0vq5IEE9FpMFE2JpHMD.jpg",
            "id": 19457,
            "genre_ids": [
                80,
                18
            ],
            "original_language": "en",
            "original_title": "The Yards",
            "poster_path": "/AtwXtU8CDWvVADgOwRkOSRZFPWI.jpg",
            "vote_count": 291,
            "video": false,
            "vote_average": 6.2,
            "title": "The Yards",
            "overview": "In the rail yards of Queens, contractors repair and rebuild the city's subway cars. These contracts are lucrative, so graft and corruption are rife. When Leo Handler gets out of prison, he finds his aunt married to Frank Olchin, one of the big contractors; he's battling with a minority-owned firm for contracts.",
            "popularity": 8.528,
            "character": "Willie Gutierrez",
            "credit_id": "52fe47d89251416c750a76dd",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/pdhtDrOBY64EY3rlcyMUEso51Gh.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 152599,
            "original_language": "en",
            "original_title": "The Immigrant",
            "overview": "1921 New York. An immigrant woman is tricked into a life of burlesque and vaudeville until a dazzling magician tries to save her and reunite her with her sister who is being held in the confines of Ellis Island.",
            "poster_path": "/eQdJwd1NKQNarPsgjPpv1va5XhM.jpg",
            "release_date": "2013-07-03",
            "title": "The Immigrant",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 634,
            "popularity": 9.723,
            "character": "Bruno Weiss",
            "credit_id": "52fe4b259251416c910d15d5",
            "order": 1,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/hvdRLJSKy2a3Ulzrl1Wlnqq2pKZ.jpg",
            "genre_ids": [
                18,
                36
            ],
            "original_language": "en",
            "original_title": "Mary Magdalene",
            "poster_path": "/7IBGsaUXMol2K8I1BTBgxEBuS6y.jpg",
            "video": false,
            "title": "Mary Magdalene",
            "vote_count": 403,
            "overview": "In the first century, free-spirited Mary Magdalene flees the marriage her family has arranged for her, finding refuge and a sense of purpose in a radical new movement led by the charismatic, rabble-rousing preacher named Jesus.",
            "release_date": "2018-03-15",
            "vote_average": 6.3,
            "id": 407439,
            "adult": false,
            "popularity": 37.702,
            "character": "Jesus",
            "credit_id": "5790c16ec3a3685b2600a803",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/iGAQZPnHLeXTaxZdKVUjLegWDom.jpg",
            "genre_ids": [
                37,
                18,
                12
            ],
            "id": 440161,
            "original_language": "en",
            "original_title": "The Sisters Brothers",
            "overview": "Oregon, 1851. Hermann Kermit Warm, a chemist and aspiring gold prospector, keeps a profitable secret that the Commodore wants to know, so he sends the Sisters brothers, two notorious assassins, to capture him on his way to California.",
            "poster_path": "/wTgomqYRTXT3BXQScnIo8uHDyWC.jpg",
            "release_date": "2018-09-19",
            "title": "The Sisters Brothers",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 1449,
            "popularity": 11.786,
            "character": "Charlie Sisters",
            "credit_id": "58995cf192514113c1000282",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10770
            ],
            "id": 506186,
            "original_language": "en",
            "original_title": "Secret Witness",
            "overview": "Fun turns serious for two kids  when an innocent  spying game forces them to do some real detective work.",
            "poster_path": "/1aq9DJlF8u8sm0fKsdWcLbFYVkC.jpg",
            "release_date": "1988-09-08",
            "title": "Secret Witness",
            "video": false,
            "vote_average": 6.0,
            "vote_count": 1,
            "popularity": 0.672,
            "character": "Drew Blackburn",
            "credit_id": "5a8ab16a0e0a26535a074d6e",
            "order": 1,
            "media_type": "movie"
        },
        {
            "video": false,
            "vote_average": 0.0,
            "overview": "A documentary filmmaker whose latest project involves gifted children bonds with his smart-yet-sensitive nephew, whose father struggles with bipolar disorder and is in the grips of a manic episode.",
            "adult": false,
            "backdrop_path": null,
            "vote_count": 0,
            "genre_ids": [
                18
            ],
            "title": "C'mon C'mon",
            "original_language": "en",
            "original_title": "C'mon C'mon",
            "poster_path": "/gNwK1rmyYNjS97tMrwzgz9YRDvj.jpg",
            "id": 632617,
            "popularity": 3.355,
            "character": "Johnny",
            "credit_id": "5d842ad36cf3d5023c25d8bc",
            "order": 1,
            "media_type": "movie"
        },
        {
            "id": 753342,
            "video": false,
            "vote_count": 0,
            "vote_average": 0.0,
            "title": "Kitbag",
            "release_date": "",
            "original_language": "en",
            "original_title": "Kitbag",
            "genre_ids": [
                18,
                36
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "An original and personal look at Napoleon’s origins and his swift, ruthless climb to emperor, viewed through the prism of his addictive and often volatile relationship with his wife and one true love, Josephine.",
            "poster_path": null,
            "popularity": 1.736,
            "character": "Napoleon Bonaparte",
            "credit_id": "5f8734f6d4b9d9003726f177",
            "order": 1,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18,
                27,
                53
            ],
            "id": 842861,
            "original_language": "en",
            "original_title": "Polaris",
            "overview": "An original environmental horror period piece with elements of ancient horror.",
            "poster_path": "/j3pnArskMXbL4Xzp239TMO2p7kL.jpg",
            "release_date": "",
            "title": "Polaris",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0,
            "popularity": 1.09,
            "character": "",
            "credit_id": "60cea228a199a6005846f85d",
            "order": 1,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                35,
                18
            ],
            "original_language": "ru",
            "original_title": "Joker 5 to one",
            "poster_path": "/pJNh3TJRGLkOEpG8n1kKnYNumlI.jpg",
            "title": "Joker 5 to one",
            "video": false,
            "vote_average": 0.0,
            "overview": "",
            "release_date": "",
            "vote_count": 0,
            "id": 858442,
            "adult": false,
            "backdrop_path": null,
            "popularity": 1.4,
            "character": "Joker",
            "credit_id": "610cbfbfdcf87500303dc886",
            "order": 1,
            "media_type": "movie"
        },
        {
            "video": false,
            "vote_average": 6.6,
            "overview": "Suzanne Stone wants to be a world-famous news anchor and she is willing to do anything to get what she wants. What she lacks in intelligence, she makes up for in cold determination and diabolical wiles. As she pursues her goal with relentless focus, she is forced to destroy anything and anyone that may stand in her way, regardless of the ultimate cost or means necessary.",
            "release_date": "1995-09-22",
            "adult": false,
            "backdrop_path": "/hkQonhCuDyjRmhFsFrCK0XnW7kk.jpg",
            "vote_count": 540,
            "genre_ids": [
                18,
                35,
                80
            ],
            "id": 577,
            "original_language": "en",
            "original_title": "To Die For",
            "poster_path": "/c3ZBLDzc3OvZoUResg2UN79gnYa.jpg",
            "title": "To Die For",
            "popularity": 7.865,
            "character": "Jimmy Emmett",
            "credit_id": "52fe4255c3a36847f8015f61",
            "order": 2,
            "media_type": "movie"
        },
        {
            "original_language": "en",
            "original_title": "Return to Paradise",
            "id": 10278,
            "video": false,
            "vote_average": 6.5,
            "overview": "Lewis, Sheriff and Tony are three friends vacationing in Malaysia. Sheriff and Tony eventually leave to pursue careers in New York, but Lewis stays behind to work with orangutans. Two years later, Sheriff and Tony learn that, because of their past actions, Lewis has been arrested for drug possession. With Lewis facing a death sentence, the friends are left with a difficult decision: return to Malaysia and split Lewis' sentence, or let him die.",
            "release_date": "1998-08-10",
            "vote_count": 163,
            "adult": false,
            "backdrop_path": "/qUo8BIJVABw036Kh0CK1rTVujGh.jpg",
            "title": "Return to Paradise",
            "genre_ids": [
                18,
                53,
                10749
            ],
            "poster_path": "/pyG7kAIF7KLddn7G1jOXOgvM2rG.jpg",
            "popularity": 5.594,
            "character": "Lewis McBride",
            "credit_id": "52fe43519251416c7500bd43",
            "order": 2,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/o4p4joAAFETuUFCHJe2XYJcnCdi.jpg",
            "genre_ids": [
                18
            ],
            "id": 10876,
            "original_language": "en",
            "original_title": "Quills",
            "overview": "A nobleman with a literary flair, the Marquis de Sade lives in a madhouse where a beautiful laundry maid smuggles his erotic stories to a printer, defying orders from the asylum's resident priest. The titillating passages whip all of France into a sexual frenzy, until a fiercely conservative doctor tries to put an end to the fun.",
            "poster_path": "/aR0sUb5zOh7VgQ2fUn5Aeqv7VQE.jpg",
            "release_date": "2000-11-22",
            "title": "Quills",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 451,
            "popularity": 11.591,
            "character": "Abbe du Coulmier",
            "credit_id": "52fe43c89251416c7501df5d",
            "order": 2,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                99
            ],
            "original_language": "en",
            "original_title": "Strength and Honor: Creating the World of 'Gladiator'",
            "poster_path": "/7THMYluC3H8s3uX9EGsXKRbt8Q9.jpg",
            "video": false,
            "vote_average": 7.0,
            "vote_count": 13,
            "overview": "An in-depth look at the entire making of Ridley Scott's Gladiator.",
            "id": 183396,
            "title": "Strength and Honor: Creating the World of 'Gladiator'",
            "release_date": "2005-06-07",
            "adult": false,
            "backdrop_path": null,
            "popularity": 2.997,
            "character": "Self",
            "credit_id": "52fe4ca09251416c751205b9",
            "order": 2,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 463149,
            "original_language": "en",
            "original_title": "The Untitled Rick Howard Project",
            "overview": "The making of Spike Jonze's 'Her'.",
            "poster_path": "/7pnRcfeNRQ5hpjoYRdAdJNQ1TEv.jpg",
            "release_date": "2014-05-13",
            "title": "The Untitled Rick Howard Project",
            "video": false,
            "vote_average": 10.0,
            "vote_count": 1,
            "popularity": 0.88,
            "character": "",
            "credit_id": "5ab3b315c3a3686163009a05",
            "order": 2,
            "media_type": "movie"
        },
        {
            "title": "Dominion",
            "original_language": "en",
            "original_title": "Dominion",
            "poster_path": "/sipSZ6Gcuz6O7gzQbLdskpwjh7V.jpg",
            "video": false,
            "overview": "Exposing the dark underbelly of modern animal agriculture through drones, hidden & handheld cameras, the feature-length film explores the morality and validity of our dominion over the animal kingdom.",
            "release_date": "2018-03-29",
            "vote_average": 9.2,
            "vote_count": 35,
            "adult": false,
            "id": 472796,
            "backdrop_path": "/7XAFHLjVY4rHQci2F9YM3MN8zrN.jpg",
            "genre_ids": [
                99
            ],
            "popularity": 3.833,
            "character": "Narrator (voice)",
            "credit_id": "5ac224399251416018059fdf",
            "order": 2,
            "media_type": "movie"
        },
        {
            "id": 546866,
            "video": false,
            "vote_count": 1,
            "vote_average": 10.0,
            "title": "Lou",
            "release_date": "2018-09-08",
            "original_language": "en",
            "original_title": "Lou",
            "genre_ids": [
                18
            ],
            "backdrop_path": "/oVlPsSJGWnUO8tZuNctjp55J6id.jpg",
            "adult": false,
            "overview": "Lou, a teenage tomboy in a small Californian town, idolizes her single father. When he has a date over one night and she is cast out of the house, Lou wanders to the outer reaches of town and into a new era of teenage identity.",
            "poster_path": "/xyECaFUhLXEUJygQgH5aX8tihgd.jpg",
            "popularity": 0.6,
            "character": "Karl",
            "credit_id": "5b9151fd92514121f5000001",
            "order": 2,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                53
            ],
            "original_language": "en",
            "original_title": "U Turn",
            "poster_path": "/lffvjJU8j7RLfz1SJVMfrn2wH6i.jpg",
            "video": false,
            "vote_average": 6.6,
            "overview": "When Bobby's car breaks down in the desert while on the run from some of the bookies who have already taken two of his fingers, he becomes trapped in the nearby small town where the people are stranger than anyone he's encountered. After becoming involved with a young married woman, her husband hires Bobby to kill her. Later, she hires Bobby to kill the husband.",
            "release_date": "1997-10-03",
            "vote_count": 487,
            "id": 10155,
            "adult": false,
            "backdrop_path": "/pHE7QBIm7LqDeMiNC3BWdfPJxwr.jpg",
            "title": "U Turn",
            "popularity": 9.829,
            "character": "Toby N. Tucker",
            "credit_id": "52fe43379251416c75007e17",
            "order": 3,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 421614,
            "original_language": "en",
            "original_title": "Backwards: The Riddle of Dyslexia",
            "overview": "13-year-old boy has problems reading, which his teachers attribute to laziness. It is later discovered that he has Dyslexia.",
            "poster_path": "/8UwGL7aJ9Bb1dyd06DOMrTMQYpv.jpg",
            "release_date": "1984-03-07",
            "title": "Backwards: The Riddle of Dyslexia",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 1,
            "popularity": 0.706,
            "character": "Robby Ellsworth",
            "credit_id": "580407729251411b7d00512b",
            "order": 3,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/sdWSu8uZUoYTS6IEWmt9QCAA0qz.jpg",
            "genre_ids": [
                99
            ],
            "id": 682753,
            "original_language": "en",
            "original_title": "My Darling Vivian",
            "overview": "The story of Vivian Liberto, Johnny Cash's first wife and the mother of his four daughters. Includes never-before-seen footage and photographs of Johnny Cash and Rosanne Cash, as well as footage featuring Reese Witherspoon, Joaquin Phoenix, Tim Robbins, Whoopi Goldberg, John C. Reilly and many more.",
            "poster_path": "/2SwO6CFL67JaeoVYkJwo5zWKlPZ.jpg",
            "release_date": "2020-04-27",
            "title": "My Darling Vivian",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 3,
            "popularity": 2.227,
            "character": "Self (archive footage)",
            "credit_id": "5ea7ba7e426ae8001f48964a",
            "order": 3,
            "media_type": "movie"
        },
        {
            "original_title": "SpaceCamp",
            "poster_path": "/oOPJ5leOsDKaGCD7DonN4szMZAU.jpg",
            "video": false,
            "id": 13766,
            "overview": "Andie Bergstrom, an astronaut eagerly awaiting her first trip to space, runs a summer camp for teenagers with her NASA-employed husband, Zach. One night during an engine test, Andie and four teenage campers are accidentally shot into space. Together, the group -- which includes Kathryn, a pilot-in-training, and Tish, a ditz with a perfect memory -- must work together to operate the spacecraft and return home.",
            "release_date": "1986-06-06",
            "title": "SpaceCamp",
            "adult": false,
            "backdrop_path": "/cX6eYmP3juvsf3TA4hMN7ZNdHvu.jpg",
            "vote_count": 133,
            "genre_ids": [
                10751,
                12,
                878
            ],
            "vote_average": 5.9,
            "original_language": "en",
            "popularity": 7.312,
            "character": "Max",
            "credit_id": "5fa1e3e1cb6db50037307dd6",
            "order": 3,
            "media_type": "movie"
        },
        {
            "original_language": "en",
            "original_title": "Hotel Rwanda",
            "poster_path": "/p3pHw85UMZPegfMZBA6dZ06yarm.jpg",
            "video": false,
            "vote_average": 7.7,
            "overview": "Inspired by true events, this film takes place in Rwanda in the 1990s when more than a million Tutsis were killed in a genocide that went mostly unnoticed by the rest of the world. Hotel owner Paul Rusesabagina houses over a thousand refuges in his hotel in attempt to save their lives.",
            "release_date": "2004-03-04",
            "vote_count": 2106,
            "id": 205,
            "backdrop_path": "/iR056j8L1kU2ls65YTmmlMtcUbS.jpg",
            "adult": false,
            "genre_ids": [
                18,
                36,
                10752
            ],
            "title": "Hotel Rwanda",
            "popularity": 24.685,
            "character": "Jack Daglish",
            "credit_id": "52fe4226c3a36847f8007f13",
            "order": 4,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "original_language": "en",
            "original_title": "Paths of Discovery: The Making of Brother Bear",
            "poster_path": "/tauJBUw2tCaDsqxB8fRiwBDqijd.jpg",
            "vote_count": 0,
            "video": true,
            "id": 575505,
            "vote_average": 0.0,
            "overview": "A behind the scenes look at the making of the Disney animated feature 'Brother Bear.'",
            "release_date": "2004-03-30",
            "title": "Paths of Discovery: The Making of Brother Bear",
            "popularity": 0.6,
            "character": "Himself",
            "credit_id": "5c3e9d529251416e06ae9ef4",
            "order": 4,
            "media_type": "movie"
        },
        {
            "id": 68996,
            "video": true,
            "vote_count": 21,
            "vote_average": 4.8,
            "title": "Ultimate Fights from the Movies",
            "release_date": "2002-04-16",
            "original_language": "en",
            "original_title": "Ultimate Fights from the Movies",
            "genre_ids": [
                28,
                99
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "In their second film compilation following their 'Boogeymen:The Killer Compilation' series, FlixMix takes you into the history of action movies from Hollywood to Hong Kong cinema that spans a 20-year period. This one features action scenes from 16 action-packed movies featuring action gurus, Jet Li, Michelle Yeoh, Chow Yun-Fat, Jackie Chan, Jean-Claude Van Damme and many more.",
            "poster_path": "/zMGmnxe7Lap6Ek1ZxIzdAdbuJeJ.jpg",
            "popularity": 5.483,
            "character": "Commodus (Gladiator) (archive footage)",
            "credit_id": "52fe47b4c3a368484e0d5203",
            "order": 5,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                99
            ],
            "original_language": "en",
            "original_title": "Captivated: The Trials of Pamela Smart",
            "poster_path": "/qMnJYok56Vz9NeiUV9pcvogTmkz.jpg",
            "video": false,
            "vote_average": 6.5,
            "id": 250650,
            "overview": "In an extraordinary and tragic American story, a small town murder becomes one of the highest profile cases of all time. From its historic role as the first televised trial to the many books and movies made about it, the film looks at the media’s enduring impact on the case.",
            "release_date": "2014-01-17",
            "vote_count": 21,
            "adult": false,
            "backdrop_path": "/p4GPRqLpwbwwX3EsiEPQNV4DCV6.jpg",
            "title": "Captivated: The Trials of Pamela Smart",
            "popularity": 2.906,
            "character": "Jimmy Emmett (archive footage)",
            "credit_id": "56bddd63c3a36817ef003697",
            "order": 7,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 671892,
            "original_language": "en",
            "original_title": "Guardians of Life",
            "overview": "This environmental short subject was made in collaboration of the protest group, Extinction Rebellion.",
            "poster_path": "/AjvpOoEoqqs0rcfxxWTnrdfQImG.jpg",
            "release_date": "2020-02-06",
            "title": "Guardians of Life",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 2,
            "popularity": 3.316,
            "character": "",
            "credit_id": "5e42bc3541465c0014cf7e28",
            "order": 7,
            "media_type": "movie"
        },
        {
            "original_title": "Parenthood",
            "poster_path": "/e51tNNQBJpJi9xkyuj0QFhyBcz7.jpg",
            "video": false,
            "vote_average": 6.7,
            "id": 1552,
            "vote_count": 436,
            "title": "Parenthood",
            "adult": false,
            "backdrop_path": "/3vcWS6OLqGMUBcoyvb8pFks0lzS.jpg",
            "overview": "The story of the Buckman family and friends, attempting to bring up their children. They suffer/enjoy all the events that occur: estranged relatives, the 'black sheep' of the family, the eccentrics, the skeletons in the closet, and the rebellious teenagers.",
            "genre_ids": [
                35,
                18,
                10751
            ],
            "release_date": "1989-07-31",
            "original_language": "en",
            "popularity": 8.418,
            "character": "Garry Buckman-Lampkin",
            "credit_id": "52fe42fdc3a36847f8032005",
            "order": 10,
            "media_type": "movie"
        },
        {
            "id": 692304,
            "video": false,
            "vote_count": 1,
            "vote_average": 6.0,
            "title": "Gladiator Games: The Roman Bloodsport",
            "release_date": "2000-11-21",
            "original_language": "en",
            "original_title": "Gladiator Games: The Roman Bloodsport",
            "genre_ids": [
                28,
                12,
                99,
                18
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "A look at the making of the Gladiator (2000) and the historical aspects presented within the film. Interviews with cast, crew and historical professors tell us a little bit more about certain locations and characters than what was in the movie.",
            "poster_path": "/aktsN3uWtArW4rtcMRtukwlLfn7.jpg",
            "popularity": 1.4,
            "character": "Self",
            "credit_id": "5e92a54fca4f6772c37ee5fb",
            "order": 11,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                53
            ],
            "id": 48582,
            "original_language": "en",
            "original_title": "Making 'Signs'",
            "overview": "Nearly every possible aspect of fimmaking used to produce the motion picture Signs (2002) is closely examined here. This serves as a good companion to the film, normally where a commentary track would. Though it does feature a portion of promotional value, it is still very informative and interesting to watch director M. Night Shyamalan at work.",
            "poster_path": null,
            "release_date": "2003-01-07",
            "title": "Making 'Signs'",
            "video": false,
            "vote_average": 6.0,
            "vote_count": 1,
            "popularity": 0.967,
            "character": "Himself / Merrill Hess",
            "credit_id": "5e7832ff2f3b17001452dc65",
            "order": 12,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                18,
                27
            ],
            "id": 685661,
            "original_language": "en",
            "original_title": "Deconstructing 'The Village'",
            "overview": "In this making-of documentary, we see movie snippets, shots from the set, and interviews. We get notes from the crew and cast. We learn about the movie's genesis and development, the choice of time period and setting, finding a location and creating the sets, the flick's visual design and cinematography, working with the actors and bonding on the set, the costumes, problems with the weather, shooting in the woods, casting, the actors' \"boot camp\", editing and storyboards, audio design, the score, and the movie's creatures.",
            "poster_path": "/64ugUp4uc6WPSPp3TiS5XwWAA7O.jpg",
            "release_date": "2005-01-11",
            "title": "Deconstructing 'The Village'",
            "video": false,
            "vote_average": 6.0,
            "vote_count": 1,
            "popularity": 0.675,
            "character": "Himself",
            "credit_id": "5e782e25c8a2d40017218b17",
            "order": 13,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 770213,
            "original_language": "en",
            "original_title": "Paths of Discover: The Making of Brother Bear",
            "overview": "Featurette on the making of Disney's Brother Bear",
            "poster_path": null,
            "release_date": "",
            "title": "Paths of Discover: The Making of Brother Bear",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0,
            "popularity": 1.4,
            "character": "Self",
            "credit_id": "5fc4b4cf4d6791003edab9e4",
            "order": 13,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/212dUHxXRdjylPqx3a3xIGtzjl9.jpg",
            "genre_ids": [
                99
            ],
            "id": 734586,
            "original_language": "en",
            "original_title": "Joker: Put on a Happy Face",
            "overview": "Featuring interviews with filmmakers and industry legends, discover the origins and evolution of The Joker, and learn why The Clown Prince of Crime is universally hailed as the greatest comic-book supervillain of all time.",
            "poster_path": "/am5Sst8LFmU0bhPrzU3km4RRy3J.jpg",
            "release_date": "2020-08-18",
            "title": "Joker: Put on a Happy Face",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 21,
            "popularity": 10.593,
            "character": "Self",
            "credit_id": "5ff66cd43344c60040e4f45a",
            "order": 32,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/pSCWUEDAbImkSxjQjWMOKvhPDN4.jpg",
            "genre_ids": [
                99
            ],
            "id": 345323,
            "original_language": "en",
            "original_title": "Unity",
            "overview": "Despite the advent of science, literature, technology, philosophy, religion, and so on -- none of these has assuaged humankind from killing one another, the animals, and nature. UNITY is a film about why we can't seem to get along, even after thousands and thousands of years.",
            "poster_path": "/pXskMoxwrtGdPXqB9AJgWzjWaIR.jpg",
            "release_date": "2015-08-12",
            "title": "Unity",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 17,
            "popularity": 6.03,
            "character": "Himself - Narrator (voice)",
            "credit_id": "55a3c6fdc3a3681ce700577d",
            "order": 45,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/uOPVhgfljgOM1SNz7eXuPHti9oK.jpg",
            "first_air_date": "1988-09-05",
            "genre_ids": [
                10767
            ],
            "id": 1900,
            "name": "LIVE with Kelly and Ryan",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "LIVE with Kelly and Ryan",
            "overview": "A morning talk show with A-list celebrity guests, top-notch performances and one-of-a-kind segments that are unrivaled on daytime television, plus spontaneous, hilarious and unpredictable talk.",
            "poster_path": "/hBkyypWN3EcOzkozatiCm5VeaG.jpg",
            "vote_average": 5.4,
            "vote_count": 13,
            "popularity": 64.619,
            "character": "",
            "credit_id": "52571a9719c29571140cd098",
            "episode_count": 3,
            "media_type": "tv"
        },
        {
            "backdrop_path": "/q9unI9oHyLUNK97RQPYAGjFs4Xu.jpg",
            "first_air_date": "1993-09-13",
            "genre_ids": [
                35,
                10767
            ],
            "id": 4573,
            "name": "Late Night with Conan O'Brien",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Late Night with Conan O'Brien",
            "overview": "Late Night with Conan O'Brien is an American late-night talk show hosted by Conan O'Brien that aired 2,725 episodes on NBC between 1993 and 2009. The show featured varied comedic material, celebrity interviews, and musical and comedy performances. Late Night aired weeknights at 12:37 am Eastern/11:37 pm Central and 12:37 am Mountain in the United States. From 1993 until 2000, Andy Richter served as O'Brien's sidekick; following his departure, O'Brien was the show's sole featured performer. The show's house musical act was The Max Weinberg 7, led by E Street Band drummer Max Weinberg.\n\nThe second incarnation of NBC's Late Night franchise, O'Brien's debuted in 1993 after David Letterman, who hosted the first incarnation of Late Night, moved to CBS to host Late Show opposite The Tonight Show. In 2004, as part of a deal to secure a new contract, NBC announced that O'Brien would leave Late Night in 2009 to succeed Jay Leno as the host of The Tonight Show. Jimmy Fallon began hosting his version of Late Night on March 2, 2009.",
            "poster_path": "/gJZ1rhLLFpatuAeylJoUI82DKC7.jpg",
            "vote_average": 7.3,
            "vote_count": 88,
            "popularity": 37.031,
            "character": "Self",
            "credit_id": "5257710d760ee36aaa48dd41",
            "episode_count": 4,
            "media_type": "tv"
        },
        {
            "poster_path": "/tPy5fmJZ2AHJKJLq8uabIxhbYWn.jpg",
            "overview": "Hollywood stuntman Colt Seavers picks up some extra pocket money by using his rough-and-tumble skills to track and capture bail jumpers.",
            "vote_count": 70,
            "original_name": "The Fall Guy",
            "name": "The Fall Guy",
            "backdrop_path": "/yJScSlMYqMniAD0ADHY8B1vE5ZQ.jpg",
            "first_air_date": "1981-11-04",
            "genre_ids": [
                10759
            ],
            "vote_average": 7.8,
            "origin_country": [
                "US"
            ],
            "id": 5031,
            "original_language": "en",
            "popularity": 16.419,
            "character": "Boy",
            "credit_id": "52577d3919c29531db22d061",
            "episode_count": 0,
            "media_type": "tv"
        },
        {
            "overview": "An annual American awards ceremony honoring cinematic achievements in the film industry. The various category winners are awarded a copy of a statuette, officially the Academy Award of Merit, that is better known by its nickname Oscar.",
            "id": 27023,
            "backdrop_path": "/2C30ZKyYyj0AKxFuBC9atFPN0XL.jpg",
            "vote_count": 42,
            "genre_ids": [],
            "first_air_date": "1953-03-18",
            "original_language": "en",
            "original_name": "The Oscars",
            "name": "The Oscars",
            "poster_path": "/wF43fJ8D85i79ZrLZsnUZ2JurbP.jpg",
            "origin_country": [
                "US"
            ],
            "vote_average": 7.0,
            "popularity": 8.945,
            "character": "Self",
            "credit_id": "52588379760ee34661416886",
            "episode_count": 3,
            "media_type": "tv"
        },
        {
            "backdrop_path": null,
            "first_air_date": "1986-03-25",
            "genre_ids": [
                18,
                10751,
                10762
            ],
            "id": 27940,
            "name": "Morningstar/Eveningstar",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Morningstar/Eveningstar",
            "overview": "",
            "poster_path": null,
            "vote_average": 6.0,
            "vote_count": 1,
            "popularity": 1.49,
            "character": "Doug Roberts",
            "credit_id": "52588921760ee346614b8130",
            "episode_count": 5,
            "media_type": "tv"
        },
        {
            "genre_ids": [
                10763,
                10767
            ],
            "original_language": "en",
            "poster_path": "/xlWdasY9oYg3OO5VTNqlPFftgya.jpg",
            "vote_average": 5.6,
            "original_name": "Today",
            "origin_country": [
                "US"
            ],
            "vote_count": 14,
            "overview": "Today is a daily American morning television show that airs on NBC. The program debuted on January 14, 1952. It was the first of its genre on American television and in the world, and is the fifth-longest running American television series. Originally a two-hour program on weekdays, it expanded to Sundays in 1987 and Saturdays in 1992. The weekday broadcast expanded to three hours in 2000, and to four hours in 2007.\n\nToday's dominance was virtually unchallenged by the other networks until the late 1980s, when it was overtaken by ABC's Good Morning America. Today retook the Nielsen ratings lead the week of December 11, 1995, and held onto that position for 852 consecutive weeks until the week of April 9, 2012, when it was beaten by Good Morning America yet again. In 2002, Today was ranked #17 on TV Guide's 50 Greatest Television  Shows of All Time.",
            "id": 1709,
            "backdrop_path": null,
            "first_air_date": "1952-01-14",
            "name": "Today",
            "popularity": 7.879,
            "character": "",
            "credit_id": "525713c7760ee3776a111e9b",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "original_name": "The Tonight Show with Jay Leno",
            "id": 2518,
            "name": "The Tonight Show with Jay Leno",
            "vote_count": 55,
            "vote_average": 5.4,
            "first_air_date": "1992-05-25",
            "poster_path": "/irA6aNsYCpN7Uo4EDQo8Fu6uzh7.jpg",
            "genre_ids": [
                35,
                10767
            ],
            "original_language": "en",
            "backdrop_path": "/lN81B3YJ0cwnII3UJaHoIHwNN4J.jpg",
            "overview": "The Tonight Show with Jay Leno is an American late-night talk show hosted by Jay Leno that initially aired from May 25, 1992 to May 29, 2009, and resumed production on March 1, 2010. The fourth incarnation of the Tonight Show franchise made its debut on May 25, 1992, three days following Johnny Carson's retirement as host of the program. The program originates from NBC Studios in Burbank, California, and is broadcast Monday through Friday at 11:35 PM in the Eastern and Pacific time zones. Unlike Carson or his predecessor Jack Paar, Leno only once utilized a guest host, preferring to host the series by himself.\n\nOn April 26, 1999, the show began broadcasting in 1080i HDTV, becoming the first American nightly talk show to be shot in high definition. The show is shot in 16:9 aspect ratio.\n\nThe series, which followed the same basic format as that of his predecessors, ran until May 29, 2009, after which Leno was succeeded by Conan O'Brien. NBC signed Leno to a new deal for a nightly talk show in the 10:00 pm ET timeslot. The primetime series, titled The Jay Leno Show, debuted on September 14, 2009, following a similar format to the Leno incarnation of Tonight.",
            "origin_country": [
                "US"
            ],
            "popularity": 23.377,
            "character": "",
            "credit_id": "52573bc8760ee36aaa020825",
            "episode_count": 3,
            "media_type": "tv"
        },
        {
            "overview": "The New Alfred Hitchcock Presents is an American anthology series that aired on NBC from 1985 to 1986, and on the USA Network from 1987 to 1989. The series is an updated re-imagining of the classic 1955 series Alfred Hitchcock Presents.",
            "first_air_date": "1985-09-29",
            "backdrop_path": "/uAtWEiCggePvhiRIzNn9pPH3488.jpg",
            "genre_ids": [
                18,
                9648
            ],
            "vote_count": 29,
            "original_language": "en",
            "original_name": "The New Alfred Hitchcock Presents",
            "origin_country": [
                "US"
            ],
            "id": 2751,
            "name": "The New Alfred Hitchcock Presents",
            "vote_average": 7.4,
            "poster_path": "/mCJgmCdMZRArcP3pOg6cZ6OpxpV.jpg",
            "popularity": 31.575,
            "character": "",
            "credit_id": "5257441619c29531db075b61",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "backdrop_path": "/hIohdpfS7kAscZ9KkuFn9O7G1T9.jpg",
            "first_air_date": "1981-01-15",
            "genre_ids": [
                18
            ],
            "id": 3828,
            "name": "Hill Street Blues",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Hill Street Blues",
            "overview": "A realistic glimpse into the daily lives of the officers and detectives at an urban police station.",
            "poster_path": "/elvCmYxmwVzv2va3rLKponOJOfm.jpg",
            "vote_average": 7.7,
            "vote_count": 60,
            "popularity": 31.982,
            "character": "",
            "credit_id": "52575788760ee36aaa25460c",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "original_name": "Seven Brides for Seven Brothers",
            "id": 14741,
            "name": "Seven Brides for Seven Brothers",
            "vote_count": 1,
            "vote_average": 7.0,
            "first_air_date": "1982-09-19",
            "poster_path": null,
            "genre_ids": [
                18
            ],
            "original_language": "en",
            "backdrop_path": null,
            "overview": "Seven Brides for Seven Brothers is an American musical television series loosely based on the film, which ran on CBS from September 19, 1982 to March 23, 1983.",
            "origin_country": [
                "US"
            ],
            "popularity": 5.638,
            "character": "Travis",
            "credit_id": "525834f3760ee36aaa92852a",
            "episode_count": 22,
            "media_type": "tv"
        },
        {
            "original_name": "Good Day Live",
            "id": 22073,
            "name": "Good Day Live",
            "vote_count": 2,
            "vote_average": 1.0,
            "first_air_date": "2001-09-17",
            "poster_path": null,
            "genre_ids": [
                10763
            ],
            "original_language": "en",
            "backdrop_path": null,
            "overview": "Good Day Live was a nationwide talk show seen weekdays on FOX affiliates throughout the US.  Each FOX owned and operated station airs a separate Good Day program as part of its newscast. Some FOX stations air up to five hours on weekday mornings, up to three on weekend mornings, (and almost 50% of the programming on these stations contains a locally produced newscast of local news, traffic, national news, weather, sports, business, and public affairs.)",
            "origin_country": [
                "US"
            ],
            "popularity": 92.573,
            "character": "",
            "credit_id": "52586d4f760ee346611dd633",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "backdrop_path": null,
            "first_air_date": "1984-11-08",
            "genre_ids": [
                35
            ],
            "original_language": "en",
            "poster_path": null,
            "id": 4759,
            "original_name": "The New Leave It to Beaver",
            "origin_country": [
                "US"
            ],
            "vote_count": 2,
            "overview": "The New Leave It to Beaver is an American sitcom sequel to the 1950s and '60s series, Leave It to Beaver. The New Leave It to Beaver began with the 1983 CBS TV movie Still the Beaver, and was picked up in 1984 as a Disney Channel series with the same name; however, it only lasted one season. It was then picked up by TBS in 1986 and renamed The New Leave It to Beaver. The series, also syndicated in the late 1980s, lasted until June 1989.\n\nIt is one of the rare examples of a television series revival sequel that revolves around the characters from the original series. Other examples of this would be The New WKRP in Cincinnati, The Brady Brides, What's Happening Now!! and the 2012 version of Dallas. The New Leave It to Beaver is the second longest running of any series revival in television history.",
            "vote_average": 3.0,
            "name": "The New Leave It to Beaver",
            "popularity": 15.786,
            "character": "Kyle Cleaver",
            "credit_id": "5b676fa3925141216803c53d",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "overview": "An unassuming mystery writer turned sleuth uses her professional insight to help solve real-life homicide cases.",
            "first_air_date": "1984-09-30",
            "name": "Murder, She Wrote",
            "backdrop_path": "/5M8bF0BwBk6RtJVrvpS9zj2bcxM.jpg",
            "genre_ids": [
                9648,
                80,
                18
            ],
            "original_name": "Murder, She Wrote",
            "origin_country": [
                "US"
            ],
            "poster_path": "/4w055rgxde068Y1o6YouxE0ROct.jpg",
            "vote_count": 202,
            "original_language": "en",
            "vote_average": 7.6,
            "id": 484,
            "popularity": 33.129,
            "character": "Billy Donovan",
            "credit_id": "5fa4ef848c7b0f003f763e63",
            "episode_count": 1,
            "media_type": "tv"
        },
        {
            "poster_path": "/bpfKrFG9N97gIfnBK4gtAC2yop7.jpg",
            "first_air_date": "1968-09-24",
            "vote_average": 7.3,
            "original_name": "60 Minutes",
            "origin_country": [
                "US"
            ],
            "id": 651,
            "name": "60 Minutes",
            "backdrop_path": "/bgo1ixOB2U6hxl8Og2TZritWKaD.jpg",
            "vote_count": 38,
            "genre_ids": [
                10763
            ],
            "overview": "America's popular television News magazine in which an ever changing team of CBS News correspondents contribute segments ranging from hard news coverage to politics to lifestyle and pop culture.",
            "original_language": "en",
            "popularity": 90.248,
            "character": "Self",
            "credit_id": "6054df831d820f55fec0efb7",
            "episode_count": 1,
            "media_type": "tv"
        }
    ],
    "crew": [
        {
            "overview": "I'm Still Here is a portrayal of a tumultuous year in the life of actor Joaquin Phoenix. With remarkable access, the film follows the Oscar-nominee as he announces his retirement from a successful film career in the fall of 2008 and sets off to reinvent himself as a hip-hop musician. The film is a portrait of an artist at a crossroads and explores notions of courage and creative reinvention, as well as the ramifications of a life spent in the public eye.",
            "release_date": "2010-09-10",
            "adult": false,
            "backdrop_path": "/yZq3kFveiDtfJpwQTgZwXBxs4aE.jpg",
            "genre_ids": [
                10402,
                35,
                18
            ],
            "vote_count": 275,
            "original_language": "en",
            "original_title": "I'm Still Here",
            "poster_path": "/qJsvyPrmZro8pA7v9ozpuoNmsTQ.jpg",
            "id": 43939,
            "video": false,
            "vote_average": 6.1,
            "title": "I'm Still Here",
            "popularity": 7.56,
            "credit_id": "52fe466cc3a36847f80fe423",
            "department": "Production",
            "job": "Producer",
            "media_type": "movie"
        },
        {
            "overview": "A New York nightclub manager tries to save his brother and father from Russian mafia hitmen.",
            "release_date": "2007-10-09",
            "id": 2001,
            "adult": false,
            "backdrop_path": "/rbhVwKpL3vdZ3e4fufq3MfKujwb.jpg",
            "genre_ids": [
                18,
                80,
                53
            ],
            "original_language": "en",
            "original_title": "We Own the Night",
            "poster_path": "/4WZa4ktiaAIEZPcyb4vnmOSYLjm.jpg",
            "vote_count": 965,
            "title": "We Own the Night",
            "vote_average": 6.7,
            "video": false,
            "popularity": 10.054,
            "credit_id": "58d281fac3a36838f101cc2b",
            "department": "Production",
            "job": "Producer",
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 457112,
            "original_language": "en",
            "original_title": "Across My Land",
            "overview": "Father and son 'minutemen' patrol the American/Mexican border near their home in Nogales, Arizona.",
            "poster_path": "/lSlhuFTdk34hLHTuGzXwUEcdduo.jpg",
            "release_date": "2017-05-27",
            "title": "Across My Land",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0,
            "popularity": 0.6,
            "credit_id": "59148a6ec3a36842c100f01e",
            "department": "Production",
            "job": "Executive Producer",
            "media_type": "movie"
        },
        {
            "original_title": "What the Health",
            "poster_path": "/sz9cPeSmiGLA1EDUPszlrWfSrId.jpg",
            "video": false,
            "vote_average": 7.0,
            "overview": "Filmmaker Kip Andersen uncovers the secret to preventing and even reversing chronic diseases, and he investigates why the nation's leading health organizations doesn't want people to know about it.",
            "release_date": "2017-03-16",
            "id": 415086,
            "adult": false,
            "backdrop_path": "/cknjcnAD4xFxktXlkG1nzSLJzAn.jpg",
            "vote_count": 272,
            "genre_ids": [
                99
            ],
            "title": "What the Health",
            "original_language": "en",
            "popularity": 9.888,
            "credit_id": "5b0d9a6d9251417bd200c417",
            "department": "Production",
            "job": "Executive Producer",
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 677166,
            "original_language": "en",
            "original_title": "I Am Dying",
            "overview": "This documentary follows 32-year-old Renee Heidtman during the last months of her life capturing intimate moments through photos, camera work and Heidtman’s personal video diary of her experience that she started when she was diagnosed with terminal cancer.",
            "poster_path": null,
            "release_date": "2015-06-13",
            "title": "I Am Dying",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0,
            "popularity": 0.633,
            "credit_id": "5e55a10bf48b34001775cee0",
            "department": "Production",
            "job": "Executive Producer",
            "media_type": "movie"
        },
        {
            "vote_average": 7.5,
            "overview": "Experiential cinema in its purest form, GUNDA chronicles the unfiltered lives of a mother pig, a flock of chickens, and a herd of cows with masterful intimacy. Using stark, transcendent black and white cinematography and the farm's ambient soundtrack, Master director Victor Kossakowsky invites the audience to slow down and experience life as his subjects do, taking in their world with a magical patience and an other worldly perspective. GUNDA asks us to meditate on the mystery of animal consciousness, and reckon with the role humanity plays in it. Executive produced by Joaquin Phoenix.",
            "release_date": "2021-04-15",
            "adult": false,
            "backdrop_path": "/5iqk9TjyF71PdmVoJLCvUIP2if9.jpg",
            "vote_count": 9,
            "genre_ids": [
                99
            ],
            "video": false,
            "original_language": "en",
            "original_title": "Gunda",
            "poster_path": "/nrL3HexAKJwIesYs2XJLi7tcgtT.jpg",
            "id": 664601,
            "title": "Gunda",
            "popularity": 14.082,
            "credit_id": "5e5ab3ef357c00001327609c",
            "department": "Production",
            "job": "Executive Producer",
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 728932,
            "original_language": "en",
            "original_title": "The End of Medicine",
            "overview": "A documentary on zoonotic diseases, which threaten the health and lives of the entire human population.",
            "poster_path": null,
            "release_date": "",
            "title": "The End of Medicine",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0,
            "popularity": 0.6,
            "credit_id": "5f232c422c6b7b00367b4941",
            "department": "Production",
            "job": "Executive Producer",
            "media_type": "movie"
        },
        {
            "overview": "I'm Still Here is a portrayal of a tumultuous year in the life of actor Joaquin Phoenix. With remarkable access, the film follows the Oscar-nominee as he announces his retirement from a successful film career in the fall of 2008 and sets off to reinvent himself as a hip-hop musician. The film is a portrait of an artist at a crossroads and explores notions of courage and creative reinvention, as well as the ramifications of a life spent in the public eye.",
            "release_date": "2010-09-10",
            "adult": false,
            "backdrop_path": "/yZq3kFveiDtfJpwQTgZwXBxs4aE.jpg",
            "genre_ids": [
                10402,
                35,
                18
            ],
            "vote_count": 275,
            "original_language": "en",
            "original_title": "I'm Still Here",
            "poster_path": "/qJsvyPrmZro8pA7v9ozpuoNmsTQ.jpg",
            "id": 43939,
            "video": false,
            "vote_average": 6.1,
            "title": "I'm Still Here",
            "popularity": 7.56,
            "credit_id": "52fe466cc3a36847f80fe42f",
            "department": "Writing",
            "job": "Writer",
            "media_type": "movie"
        },
        {
            "original_name": "4Real",
            "id": 5923,
            "name": "4Real",
            "vote_count": 0,
            "vote_average": 0.0,
            "first_air_date": "",
            "poster_path": null,
            "genre_ids": [
                99
            ],
            "original_language": "en",
            "backdrop_path": null,
            "overview": "4REAL is a series of half-hour episodes hosted by sol Guy as he travels to remote locations with celebrity guests to connect with young leaders who, under extreme circumstances, are affecting real change on some of the most pressing issues of our time.\n\nCelebrity guests for Season One are Cameron Diaz, Mos Def, Joaquin Phoenix, Eva Mendes, Casey Affleck, K'naan, M.I.A. and Flea. The shows take you on unique adventures with these celebrities, but ultimately it's the young leaders who emerge as the stars. 4REAL inspires viewers with stories of their courage, creativity and dedication to tackling issues such as poverty, environment, health, children's and indigenous rights, drugs and violence in their communities and beyond.\n\n4REAL is airing globally on National Geographic Channels International in 166 countries and 35 languages, as well as on MTV in Canada.\n\n4REAL is produced by Vancouver-based Direct Current Media.\n\nThe series also air on The CW on fall 2008 as part of the Media Rights Capital Sunday block. It was removed from the schedule after the block's cancellation.",
            "origin_country": [
                "US"
            ],
            "popularity": 1.4,
            "credit_id": "525783c9760ee36aaa6139d7",
            "department": "Production",
            "episode_count": 8,
            "job": "Producer",
            "media_type": "tv"
        }
    ],
    "id": 73421
  }
  ```

- Get trending items

  ```
  https://api.themoviedb.org/3/trending/${media_type}/${time}?api_key=${process.env.REACT_APP_TMDB_KEY}
  ```

  Response

  ```
  {
    "page": 1,
    "results": [
        {
            "overview": "A devastated husband vows to bring justice to the people responsible for his wife's death while protecting the only family he has left, his daughter.",
            "release_date": "2021-08-18",
            "adult": false,
            "backdrop_path": "/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg",
            "vote_count": 74,
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 619297,
            "original_language": "en",
            "original_title": "Sweet Girl",
            "poster_path": "/aw58HDsDmj3jQr7KfZvWBPQJGHw.jpg",
            "title": "Sweet Girl",
            "video": false,
            "vote_average": 6.7,
            "popularity": 151.11,
            "media_type": "movie"
        },
        {
            "overview": "Nicolas Bannister, a rugged and solitary veteran living in a near-future Miami flooded by rising seas, is an expert in a dangerous occupation: he offers clients the chance to relive any memory they desire. His life changes when he meets a mysterious young woman named Mae. What begins as a simple matter of lost and found becomes a passionate love affair. But when a different client's memories implicate Mae in a series of violent crimes, Bannister must delve through the dark world of the past to uncover the truth about the woman he fell for.",
            "release_date": "2021-08-19",
            "adult": false,
            "backdrop_path": "/8yhWlFcJ8zCqjfCvLy3lWFuawR1.jpg",
            "vote_count": 122,
            "genre_ids": [
                878,
                9648,
                10749
            ],
            "id": 579047,
            "original_language": "en",
            "original_title": "Reminiscence",
            "poster_path": "/17siH6wJRQ2jZiqz9BWUhy1UtZ.jpg",
            "title": "Reminiscence",
            "video": false,
            "vote_average": 7.9,
            "popularity": 352.698,
            "media_type": "movie"
        },
        {
            "original_title": "Snake Eyes: G.I. Joe Origins",
            "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
            "video": false,
            "vote_average": 7.1,
            "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
            "release_date": "2021-07-22",
            "id": 568620,
            "adult": false,
            "backdrop_path": "/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg",
            "vote_count": 236,
            "genre_ids": [
                28,
                12
            ],
            "title": "Snake Eyes: G.I. Joe Origins",
            "original_language": "en",
            "popularity": 673.969,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/eP07auW0baxhbflms6obNfRB0NG.jpg",
            "genre_ids": [
                12,
                18,
                14
            ],
            "original_language": "en",
            "original_title": "The Green Knight",
            "poster_path": "/if4hw3Ou5Sav9Em7WWHj66mnywp.jpg",
            "video": false,
            "title": "The Green Knight",
            "vote_count": 108,
            "overview": "An epic fantasy adventure based on the timeless Arthurian legend, The Green Knight tells the story of Sir Gawain, King Arthur's reckless and headstrong nephew, who embarks on a daring quest to confront the eponymous Green Knight, a gigantic emerald-skinned stranger and tester of men.",
            "release_date": "2021-07-29",
            "vote_average": 7.4,
            "id": 559907,
            "adult": false,
            "popularity": 154.438,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/eD7kDBVpMY8Hmcusr9z8JCj5Lu2.jpg",
            "genre_ids": [
                18,
                80,
                53,
                12
            ],
            "id": 616651,
            "original_language": "en",
            "original_title": "Stillwater",
            "poster_path": "/q1GYKuektEgZ62JotEFaruo5GVY.jpg",
            "vote_count": 44,
            "video": false,
            "title": "Stillwater",
            "vote_average": 6.7,
            "overview": "Bill Baker, an American oil-rig roughneck from Oklahoma, travels to Marseille to visit his estranged daughter, Allison, who is in prison for a murder she claims she did not commit. Confronted with language barriers, cultural differences, and a complicated legal system, Bill builds a new life for himself in France as he makes it his personal mission to exonerate his daughter.",
            "release_date": "2021-07-29",
            "popularity": 94.766,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/swcF9sPlruc6s4gAHuWfbYicbqG.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                35
            ],
            "id": 675445,
            "original_language": "en",
            "original_title": "PAW Patrol: The Movie",
            "poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
            "vote_count": 20,
            "video": false,
            "title": "PAW Patrol: The Movie",
            "vote_average": 8.1,
            "overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
            "release_date": "2021-08-09",
            "popularity": 969.763,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "original_language": "en",
            "original_title": "The Suicide Squad",
            "poster_path": "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 2629,
            "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
            "id": 436969,
            "title": "The Suicide Squad",
            "release_date": "2021-07-28",
            "adult": false,
            "popularity": 5658.642,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "vote_count": 2939,
            "original_language": "en",
            "original_title": "F9",
            "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            "title": "F9",
            "video": false,
            "vote_average": 7.6,
            "id": 385128,
            "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            "release_date": "2021-05-19",
            "popularity": 2070.086,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/Aa8cizZ4ZW5AwsFwuqXHz3rNZo8.jpg",
            "genre_ids": [
                18,
                10749,
                10402
            ],
            "id": 424277,
            "original_language": "en",
            "original_title": "Annette",
            "overview": "The story of Henry, a stand-up comedian with a fierce sense of humour and Ann, a singer of international renown. In the spotlight, they are the perfect couple, healthy, happy, and glamourous. The birth of their first child, Annette, a mysterious girl with an exceptional destiny, will change their lives.",
            "poster_path": "/4FTnypxpGltJdIARrfFsP31pGTp.jpg",
            "release_date": "2021-07-06",
            "title": "Annette",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 133,
            "popularity": 45.125,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/fBNTDtIyt9HOYhUXuEEyB8Hqmjz.jpg",
            "title": "The Loud House Movie",
            "genre_ids": [
                10751,
                16,
                35,
                10770,
                10402
            ],
            "original_language": "en",
            "original_title": "The Loud House Movie",
            "poster_path": "/mab5wPeGVjbMyYMzyzfdKKnG9cl.jpg",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 5,
            "overview": "The Loud family travel to Scotland and discover they are descendants of Scottish royalty, moving into their giant ancestral castle.",
            "release_date": "2021-08-20",
            "id": 410113,
            "popularity": 154.727,
            "media_type": "movie"
        },
        {
            "backdrop_path": "/zb85NiC3cjrH8HR1E2tB5gU5nxk.jpg",
            "title": "The Girl Who Got Away",
            "genre_ids": [
                27,
                53
            ],
            "original_language": "en",
            "original_title": "The Girl Who Got Away",
            "poster_path": "/yuS2OY6RnvS6G3sFPFPB2OSy2EE.jpg",
            "video": false,
            "vote_average": 6.8,
            "overview": "Massena, New York, 1998. A decade of terror comes to a close with the capture of Elizabeth Caulfield, a woman who kidnapped five young girls and pretended they were her own. Only one girl, Christina Bowden, managed to get away with her life, the other four found buried behind Caulfield's decrepit home... 20 years later, Caulfield has escaped from prison and launches a deadly pursuit to finish what she began. Christina's seemingly perfect life comes crashing down around her as the secrets of her past come back to haunt her.",
            "release_date": "2021-08-20",
            "vote_count": 5,
            "id": 855228,
            "adult": false,
            "popularity": 53.974,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/5DShfVkYH2Wwh352NKOIvqoo5X2.jpg",
            "genre_ids": [
                878,
                18,
                53
            ],
            "original_language": "en",
            "original_title": "Risen",
            "poster_path": "/kMlg2IMXkut5DJYpRqc3ZkgM9IW.jpg",
            "vote_count": 11,
            "video": false,
            "vote_average": 5.4,
            "title": "Risen",
            "overview": "Disaster unfolds when a meteor strikes a small town, turning the environment uninhabitable and killing everything in the surrounding area. Exobiologist Lauren Stone is called to find answers to the unearthly event. As she begins to uncover the truth, imminent danger awakens and it becomes a race against time to save mankind.",
            "release_date": "2021-08-20",
            "id": 850099,
            "popularity": 66.919,
            "media_type": "movie"
        },
        {
            "genre_ids": [
                35,
                28,
                12,
                878
            ],
            "original_language": "en",
            "original_title": "Free Guy",
            "poster_path": "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
            "title": "Free Guy",
            "video": false,
            "vote_average": 7.9,
            "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            "release_date": "2021-08-11",
            "id": 550988,
            "adult": false,
            "backdrop_path": "/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg",
            "vote_count": 255,
            "popularity": 2794.463,
            "media_type": "movie"
        },
        {
            "overview": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
            "release_date": "2021-07-28",
            "adult": false,
            "backdrop_path": "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
            "genre_ids": [
                12,
                14,
                35,
                28
            ],
            "vote_count": 1909,
            "original_language": "en",
            "original_title": "Jungle Cruise",
            "poster_path": "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
            "title": "Jungle Cruise",
            "video": false,
            "vote_average": 7.9,
            "id": 451048,
            "popularity": 5156.953,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
            "genre_ids": [
                28,
                12,
                53,
                878
            ],
            "id": 497698,
            "original_language": "en",
            "original_title": "Black Widow",
            "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
            "vote_count": 4352,
            "video": false,
            "title": "Black Widow",
            "vote_average": 7.8,
            "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
            "release_date": "2021-07-07",
            "popularity": 2237.635,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg",
            "genre_ids": [
                12,
                53,
                18,
                28
            ],
            "original_language": "en",
            "original_title": "Beckett",
            "poster_path": "/fBJducGBcmrcIOQdhm4BUBNDiMu.jpg",
            "video": false,
            "title": "Beckett",
            "vote_count": 154,
            "overview": "Whilst vacationing in Greece, Beckett, becomes the target of a manhunt after a devastating car accident forces him to run for his life across the country to clear his name but tensions escalate as the authorities close in and political unrest mounts which makes Beckett fall even deeper into a dangerous web of conspiracy.",
            "release_date": "2021-08-04",
            "vote_average": 6.2,
            "id": 597433,
            "popularity": 366.422,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/tFBVXnqmsmoSFR3rbltTfdGIMgV.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 774021,
            "original_language": "en",
            "original_title": "Demonic",
            "overview": "A young woman unleashes terrifying demons when supernatural forces at the root of a decades-old rift between mother and daughter are ruthlessly revealed.",
            "poster_path": "/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg",
            "release_date": "2021-07-29",
            "title": "Demonic",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 7,
            "popularity": 32.995,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
            "genre_ids": [
                35,
                80
            ],
            "original_language": "en",
            "original_title": "Cruella",
            "poster_path": "/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
            "video": false,
            "title": "Cruella",
            "vote_count": 4828,
            "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
            "release_date": "2021-05-26",
            "vote_average": 8.4,
            "id": 337404,
            "popularity": 1098.963,
            "media_type": "movie"
        },
        {
            "overview": "As a CODA (Child of Deaf Adults), Ruby is the only hearing person in her deaf family. When the family's fishing business is threatened, Ruby finds herself torn between pursuing her love of music and her fear of abandoning her parents.",
            "release_date": "2021-07-30",
            "adult": false,
            "backdrop_path": "/4Tz8V8aRim8cFgKEWprSUjBy8tY.jpg",
            "genre_ids": [
                18,
                10402,
                10749
            ],
            "vote_count": 75,
            "original_language": "en",
            "original_title": "CODA",
            "poster_path": "/BzVjmm8l23rPsijLiNLUzuQtyd.jpg",
            "title": "CODA",
            "video": false,
            "vote_average": 8.6,
            "id": 776503,
            "popularity": 704.551,
            "media_type": "movie"
        },
        {
            "adult": false,
            "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
            "genre_ids": [
                16,
                35,
                10751,
                878
            ],
            "original_language": "en",
            "original_title": "Space Jam: A New Legacy",
            "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
            "id": 379686,
            "video": false,
            "title": "Space Jam: A New Legacy",
            "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
            "release_date": "2021-07-08",
            "vote_count": 1835,
            "vote_average": 7.5,
            "popularity": 2273.57,
            "media_type": "movie"
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
  }
  ```

- Get upcoming movies

  ```
  https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
  ```

  Response

  ```
  {
    "dates": {
        "maximum": "2021-09-12",
        "minimum": "2021-08-28"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg",
            "genre_ids": [
                35,
                28,
                12,
                878
            ],
            "id": 550988,
            "original_language": "en",
            "original_title": "Free Guy",
            "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            "popularity": 2794.463,
            "poster_path": "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
            "release_date": "2021-08-11",
            "title": "Free Guy",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 255
        },
        {
            "adult": false,
            "backdrop_path": "/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg",
            "genre_ids": [
                878,
                28,
                53
            ],
            "id": 581726,
            "original_language": "en",
            "original_title": "Infinite",
            "overview": "Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.",
            "popularity": 2157.837,
            "poster_path": "/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
            "release_date": "2021-06-10",
            "title": "Infinite",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 768
        },
        {
            "adult": false,
            "backdrop_path": "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
            "genre_ids": [
                16,
                35,
                12,
                10751
            ],
            "id": 459151,
            "original_language": "en",
            "original_title": "The Boss Baby: Family Business",
            "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
            "popularity": 1755.445,
            "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
            "release_date": "2021-07-01",
            "title": "The Boss Baby: Family Business",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 1211
        },
        {
            "adult": false,
            "backdrop_path": "/hB8ypGAAq1YiyyTdCSQeFoXHPXW.jpg",
            "genre_ids": [
                53,
                27
            ],
            "id": 482373,
            "original_language": "en",
            "original_title": "Don't Breathe 2",
            "overview": "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
            "popularity": 1313.001,
            "poster_path": "/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg",
            "release_date": "2021-08-12",
            "title": "Don't Breathe 2",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 45
        },
        {
            "adult": false,
            "backdrop_path": "/9DZlZvgh9dIGcri79hv3KtHiq5K.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 637649,
            "original_language": "en",
            "original_title": "Wrath of Man",
            "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
            "popularity": 1021.406,
            "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
            "release_date": "2021-04-22",
            "title": "Wrath of Man",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 1932
        },
        {
            "adult": false,
            "backdrop_path": "/swcF9sPlruc6s4gAHuWfbYicbqG.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                35
            ],
            "id": 675445,
            "original_language": "en",
            "original_title": "PAW Patrol: The Movie",
            "overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
            "popularity": 969.763,
            "poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
            "release_date": "2021-08-09",
            "title": "PAW Patrol: The Movie",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 20
        },
        {
            "adult": false,
            "backdrop_path": "/4Tz8V8aRim8cFgKEWprSUjBy8tY.jpg",
            "genre_ids": [
                18,
                10402,
                10749
            ],
            "id": 776503,
            "original_language": "en",
            "original_title": "CODA",
            "overview": "As a CODA (Child of Deaf Adults), Ruby is the only hearing person in her deaf family. When the family's fishing business is threatened, Ruby finds herself torn between pursuing her love of music and her fear of abandoning her parents.",
            "popularity": 704.551,
            "poster_path": "/BzVjmm8l23rPsijLiNLUzuQtyd.jpg",
            "release_date": "2021-07-30",
            "title": "CODA",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 75
        },
        {
            "adult": false,
            "backdrop_path": "/2nU5H8XIgtMkJrxsryP6nJuAHQ.jpg",
            "genre_ids": [
                16,
                18,
                12,
                10751
            ],
            "id": 805051,
            "original_language": "en",
            "original_title": "Smelliville",
            "overview": "The Oggly family arrive at the municipal rubbish dump of Smelliville and must look for a new home, but they never feel really welcome anywhere. They stink and are for most humans just a tad too oggly. When Firebottom, the family dragon, crash-lands on the run-down rubbish tip of the small town of Smelliville, the Ogglies at once feel at home. And it's here they want to stay.",
            "popularity": 559.353,
            "poster_path": "/qrSP7VCB17yv2ad9Ld17c07SQJk.jpg",
            "release_date": "2021-01-01",
            "title": "The Ogglies: Welcome to Smelliville",
            "video": false,
            "vote_average": 2,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/g15PR8eQV9DehSWlagvdnJZqoRq.jpg",
            "genre_ids": [
                27,
                53,
                9648
            ],
            "id": 602734,
            "original_language": "en",
            "original_title": "Spiral: From the Book of Saw",
            "overview": "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.",
            "popularity": 319.428,
            "poster_path": "/lcyKve7nXRFgRyms9M1bndNkKOx.jpg",
            "release_date": "2021-05-12",
            "title": "Spiral: From the Book of Saw",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 718
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10749,
                18
            ],
            "id": 744275,
            "original_language": "en",
            "original_title": "After We Fell",
            "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
            "popularity": 244.605,
            "poster_path": "/oOZITZodAja6optBgLh8ZZrgzbb.jpg",
            "release_date": "2021-09-01",
            "title": "After We Fell",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/c4lQ9UYLeanBAmoJDcv5MMDioNG.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 566525,
            "original_language": "en",
            "original_title": "Shang-Chi and the Legend of the Ten Rings",
            "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            "popularity": 225.602,
            "poster_path": "/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg",
            "release_date": "2021-09-01",
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 537915,
            "original_language": "en",
            "original_title": "After",
            "overview": "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
            "popularity": 160.911,
            "poster_path": "/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
            "release_date": "2019-04-11",
            "title": "After",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 6447
        },
        {
            "adult": false,
            "backdrop_path": "/eP07auW0baxhbflms6obNfRB0NG.jpg",
            "genre_ids": [
                12,
                18,
                14
            ],
            "id": 559907,
            "original_language": "en",
            "original_title": "The Green Knight",
            "overview": "An epic fantasy adventure based on the timeless Arthurian legend, The Green Knight tells the story of Sir Gawain, King Arthur's reckless and headstrong nephew, who embarks on a daring quest to confront the eponymous Green Knight, a gigantic emerald-skinned stranger and tester of men.",
            "popularity": 154.438,
            "poster_path": "/if4hw3Ou5Sav9Em7WWHj66mnywp.jpg",
            "release_date": "2021-07-29",
            "title": "The Green Knight",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 108
        },
        {
            "adult": false,
            "backdrop_path": "/judXeFCXqOluMkGmnV9IG4t1SwI.jpg",
            "genre_ids": [
                99
            ],
            "id": 776552,
            "original_language": "en",
            "original_title": "Misha and the Wolves",
            "overview": "A woman’s Holocaust memoir takes the world by storm, but a fallout with her publisher-turned-detective reveals her story as an audacious deception created to hide a darker truth.",
            "popularity": 140.743,
            "poster_path": "/1wjefBDTCMnrij8fB472op30CjO.jpg",
            "release_date": "2021-09-03",
            "title": "Misha and the Wolves",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/eD7kDBVpMY8Hmcusr9z8JCj5Lu2.jpg",
            "genre_ids": [
                18,
                80,
                53,
                12
            ],
            "id": 616651,
            "original_language": "en",
            "original_title": "Stillwater",
            "overview": "Bill Baker, an American oil-rig roughneck from Oklahoma, travels to Marseille to visit his estranged daughter, Allison, who is in prison for a murder she claims she did not commit. Confronted with language barriers, cultural differences, and a complicated legal system, Bill builds a new life for himself in France as he makes it his personal mission to exonerate his daughter.",
            "popularity": 94.766,
            "poster_path": "/q1GYKuektEgZ62JotEFaruo5GVY.jpg",
            "release_date": "2021-07-29",
            "title": "Stillwater",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 44
        },
        {
            "adult": false,
            "backdrop_path": "/uEJuqp08dH6IQwZJGASlPZOXqKu.jpg",
            "genre_ids": [
                18,
                10402,
                10749
            ],
            "id": 467909,
            "original_language": "en",
            "original_title": "In the Heights",
            "overview": "The story of Usnavi, a bodega owner who has mixed feelings about closing his store and retiring to the Dominican Republic or staying in Washington Heights.",
            "popularity": 74.466,
            "poster_path": "/RO4KoJyoQMQzh9z76d4v4FJMmJ.jpg",
            "release_date": "2021-06-10",
            "title": "In the Heights",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 283
        },
        {
            "adult": false,
            "backdrop_path": "/vooRKLGVvFRFmx9swcMh26uYZSf.jpg",
            "genre_ids": [
                16,
                10749,
                35,
                18,
                14
            ],
            "id": 530079,
            "original_language": "ja",
            "original_title": "きみと、波にのれたら",
            "overview": "Hinako is a surf-loving college student who has just moved to a small seaside town. When a sudden fire breaks out at her apartment building, she is rescued by Minato, a handsome firefighter, and the two soon fall in love. Just as they become inseparable, Minato loses his life in an accident at sea. Hinako is so distraught that she can no longer even look at the ocean, but one day she sings a song that reminds her of their time together, and Minato appears in the water. From then on, she can summon him in any watery surface as soon as she sings their song, but can the two really remain together forever? And what is the real reason for Minato’s sudden reappearance?",
            "popularity": 73.214,
            "poster_path": "/byoY2stdullEcVjlaWs1ENXyrDm.jpg",
            "release_date": "2019-06-21",
            "title": "Ride Your Wave",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 133
        },
        {
            "adult": false,
            "backdrop_path": "/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg",
            "genre_ids": [
                53,
                18,
                36
            ],
            "id": 522241,
            "original_language": "en",
            "original_title": "The Courier",
            "overview": "Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.",
            "popularity": 56.977,
            "poster_path": "/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg",
            "release_date": "2021-03-18",
            "title": "The Courier",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 287
        },
        {
            "adult": false,
            "backdrop_path": "/AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
            "genre_ids": [
                14,
                12,
                18
            ],
            "id": 413518,
            "original_language": "it",
            "original_title": "Pinocchio",
            "overview": "In this live-action adaptation of the beloved fairytale, old woodcarver Geppetto fashions a wooden puppet, Pinocchio, who magically comes to life. Pinocchio longs for adventure and is easily led astray, encountering magical beasts, fantastical spectacles, while making friends and foes along his journey. However, his dream is to become a real boy, which can only come true if he finally changes his ways.",
            "popularity": 53.042,
            "poster_path": "/lzqJcPaZA9G8C6eS4Hch475Ng3A.jpg",
            "release_date": "2019-12-19",
            "title": "Pinocchio",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 1115
        },
        {
            "adult": false,
            "backdrop_path": "/hugKriLPeBm3lErSCQiFOgQzpkC.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 574060,
            "original_language": "en",
            "original_title": "Gunpowder Milkshake",
            "overview": "In her turbulent life as a professional assassin, Scarlet was cruelly forced to abandon her daughter Sam and go on the run. Years later, despite the estrangement, Sam has also grown up into a cold blooded hitwoman. After a high-stake mission spins out of control, putting an innocent 8-year-old girl in the middle of the gang war she has unleashed, Sam has no choice but to go rogue. This ultimately leads her back to her mother and her former hitwomen sidekicks, who all join forces in an avenging war against those who took everything from them.",
            "popularity": 47.329,
            "poster_path": "/5AaKulwpUtkscAokKWtLenGTfVS.jpg",
            "release_date": "2021-07-15",
            "title": "Gunpowder Milkshake",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 237
        }
    ],
    "total_pages": 15,
    "total_results": 282
  }
  ```

- Create request token

  ```
  https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}
  ```

  Response

  ```
  {
    "success": true,
    "expires_at": "2021-08-22 18:20:12 UTC",
    "request_token": "cf5976ab2e70b322a3d4b41c8db66dc8661b81d1"
  }
  ```

- User authenticates

  ```
  https://www.themoviedb.org/authenticate/${sessionId}?redirect_to=http://localhost:3000/success
  ```

  Response

  ```
  {
  "success": true,
  "session_id": "03301bda85cc85e5ba329e29c38ee462a96f4c37"
  }
  ```

- Create guest session

  ```
  https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_TMDB_KEY}
  ```

  Response

  ```
  {
    "success": true,
    "guest_session_id": "fd144d571c40eb77cc727a50159168aa",
    "expires_at": "2021-08-23 17:21:17 UTC"
  }
  ```

- Get user account

  ```
  https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}
  ```

  Response

  ```
  {
    "avatar": {
        "gravatar": {
            "hash": "54c39c249867cd5664f12c21663beeee"
        },
        "tmdb": {
            "avatar_path": null
        }
    },
    "id": 10608204,
    "iso_639_1": "en",
    "iso_3166_1": "IE",
    "name": "John Dennehy",
    "include_adult": false,
    "username": "johndennehy"
  }
  ```

- Mark item as favourite

  ```
  https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}
  ```

  Response

  ```
  {
    "success": true,
    "status_code": 1,
    "status_message": "Success."
  }
  ```

- Get user favourites

  ```
  https://api.themoviedb.org/3/account/${accountId}/favorite/${contentType}?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}
  ```

  Response

  ```
  {
    "page": 1,
    "results": [
        {
            "poster_path": "/hnKAKk7T9MvWaLoOymVNAzaGZf8.jpg",
            "id": 2912,
            "vote_average": 6.9,
            "first_air_date": "1984-09-10",
            "overview": "America's favorite quiz show where contestants are presented with general knowledge clues in the form of answers, and must phrase their responses in question form.",
            "original_name": "Jeopardy!",
            "origin_country": [
                "US"
            ],
            "backdrop_path": "/6qMVdRXjHOXntXTeIrSIIGYwmRG.jpg",
            "vote_count": 73,
            "genre_ids": [],
            "name": "Jeopardy!",
            "original_language": "en",
            "popularity": 13.689
        },
        {
            "genre_ids": [
                18
            ],
            "first_air_date": "2017-09-25",
            "original_language": "en",
            "original_name": "The Good Doctor",
            "origin_country": [
                "US"
            ],
            "vote_average": 8.6,
            "overview": "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",
            "vote_count": 9156,
            "poster_path": "/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
            "name": "The Good Doctor",
            "id": 71712,
            "backdrop_path": "/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg",
            "popularity": 1072.419
        },
        {
            "vote_average": 8.6,
            "first_air_date": "2017-01-26",
            "original_name": "Riverdale",
            "origin_country": [
                "US"
            ],
            "id": 69050,
            "name": "Riverdale",
            "vote_count": 11787,
            "genre_ids": [
                9648,
                18,
                80
            ],
            "backdrop_path": "/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg",
            "original_language": "en",
            "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
            "poster_path": "/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",
            "popularity": 874.757
        },
        {
            "origin_country": [
                "US"
            ],
            "backdrop_path": "/zJZfxi8X3XPHAhxXseRugtnNVtt.jpg",
            "genre_ids": [
                16,
                35,
                10765,
                10759
            ],
            "original_language": "en",
            "name": "Rick and Morty",
            "poster_path": "/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
            "id": 60625,
            "vote_average": 8.8,
            "overview": "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
            "first_air_date": "2013-12-02",
            "vote_count": 5157,
            "original_name": "Rick and Morty",
            "popularity": 935.406
        },
        {
            "original_name": "Loki",
            "backdrop_path": "/f5tjVQtxihaVwXOdpITSPeIqlpX.jpg",
            "genre_ids": [
                18,
                10765
            ],
            "id": 84958,
            "original_language": "en",
            "poster_path": "/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
            "first_air_date": "2021-06-09",
            "vote_count": 7302,
            "vote_average": 8.2,
            "origin_country": [
                "US"
            ],
            "overview": "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
            "name": "Loki",
            "popularity": 1092.788
        }
    ],
    "total_pages": 1,
    "total_results": 5
  }
  ```

- Mark item as must watch

  ```
  https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}
  ```

  Response

  ```
  {
    "success": true,
    "status_code": 1,
    "status_message": "Success."
  }
  ```

- Get must watch items

  ```
  https://api.themoviedb.org/3/account/${accountId}/watchlist/${contentType}?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}
  ```

  Response

  ```
  {
    "page": 1,
    "results": [
        {
            "original_name": "What If...?",
            "backdrop_path": "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "id": 91363,
            "original_language": "en",
            "poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
            "first_air_date": "2021-08-11",
            "vote_count": 737,
            "vote_average": 8.6,
            "origin_country": [
                "US"
            ],
            "overview": "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
            "name": "What If...?",
            "popularity": 2269.951
        }
    ],
    "total_pages": 1,
    "total_results": 1
  }
  ```

- Get reviewed items

  ```
  https://api.themoviedb.org/3/account/${accountId}/rated/${contentType}?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}
  ```

  Response

  ```
  {
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  }
  ```

- Add review

  ```
  https://api.themoviedb.org/3/${mediaType}/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}
  ```

  Response

  ```
  {
    "success": true,
    "status_code": 1,
    "status_message": "Success."
  }
  ```

- Delete review
  ```
  https://api.themoviedb.org/3/${mediaType}/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}
  ```
  Response
  ```
  {
    "success": true,
    "status_code": 13,
    "status_message": "The item/record was deleted successfully."
  }
  ```

## App Design.

### Component catalogue.

Storybook overview

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/Storybook-Overview-1.png)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/Storybook-Overview-2.png)

- Advanced Filter Component (used by the user to complete detailed search of movies / tv shows
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/AdvancedFilter-Story.png)


- Cast Avatar (Displays the cast member image as well as name)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastAvatar-Story.png)

- Cast Biography (Displays the cast member's bio)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastBiography-Story.png)

- Cast Credits (Displays the movies and tv shows that the cast member has starred in)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastCredits-Story.png)

- Cast Info
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastInfo-Story.png)

- Cast Modal (Provides an overview of the individual cast member)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastModal-Story.png)

- Cast Overview (Provides a view of all cast members in a movie / tv show
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastOverview-Story.png)

- Filter Card (Allows user to filter content on the screen)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/FilterCard-Story.png)

- Filter Display Popper (Allows user to see what they have filtered content by)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/FilterDisplayPopper-Story.png)

- Similar Content (Shows movies / tv shows that are similar to the one viewed by the user)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/SimilarContent-Story.png)

- Trending Page Title (Displays the title of the trending page)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/TrendingPageTitle-Story.png)

- Trending Image List (Displays the trending items within the specified timeframe)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/trendingImageList-story.png)

- Trending Input Filter (Allows the user to change the media type and timeframe used for api calls to TMDB)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/trendingInputFilter-Story.png)

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........


![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/HomePage-Display.png)

> Home page of web application. User must either authenticate on TMDB or create a guest session to access app routes.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/3rdPartyAuth-Display.png)

> If user chooses to create an account session on TMDB, they are redirected to authenticate before a session is created.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/ProtectedRoutesMessage-Display.png)

> If a session has not been created , user is not able to access web app routes.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/DiscoverTV-Display.png)

> The Discover page allows users to explore TMDB's catalogue of tv shows and movies.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/TvDetailsPage-Display.png)

> The details page shows detailed information about the selected tv show / movie.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastDetail-Display.png)

> The cast for the chosen movie / tv shows is displayed on the details page.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastModal-Display.png)

> By clicking the + icon next to a cast member, a user can view an overview of the individual cast member.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastDetail-Display.png)

> If the user clicks 'View More', they are redirected to the cast member detailed info page.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/CastDetailCredits-Display.png)

> The user can see all tv shows and movies that the cast member has appeared in during their career.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/AdvancedFilter-Display.png)

> The user can complete an advanced filter of moviles and tv shows.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/AdvancedFilterPage-Display.png)

> Once the user clicks 'Filter', they are redirected to the advanced filter page.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/AdvancedFilterPopper-Display.png)

> The user can view the filter criteria by clicking 'View Filter'.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/EditReview-Display.png)

> The user can add / edit / delete reviews for tv shows and movies (Firebase persistence).

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/Firebase-Display.png) 

> The above screenshot shows the data structure used in the firebase realtime database.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/ReviewedMovies-Display.png) 

> The user can view all reviewed tv shows and movies.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/FavouriteMovies-Display.png) 

> The user can add / delete favourite movies / tv shows.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/MediaTypeFilter-Display.png) 

> An input filter allows the user to switch between movies and tv shows.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/MediaTypeFilter-Display.png) 

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/MediaTypeFilterOptions-Display.png)

> An input filter allows the user to switch between movies and tv shows.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/MustWatchMovies-Display.png) 

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/MustWatchTv-Display.png)

> Likewise, the user can mark / unmark movies and tv shows as must watch items.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/NoContent-Display.png) 

> On filtering, if no search results are obtained the user is informed of this with a snackbar message.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/Pagination-Display.png) 

> Pagination is in place to allow users to explore the full library of movies and tv shows provided by the TMDB API.

![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/TrendingContentPage-Display.png) 
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/TrendingImageList-Display.png)
![](https://github.com/JohnDennehy101/ictskills2-assignment/blob/readme/public/readme/TrendingInputFilter-Duration-Display.png)

> The user can view trending content (movies / tv shows / people) within different timeframes (last 24 hours / last week).









### Routing.

- GET / (public) - Homepage. Displays login screen to user if not logged in. If logged in redirects to /movies
- GET /reviews/:content/form (private) - Displays form for user to enter review on tv show / movie
- GET /movies/upcoming (public) - displays upcoming movies
- GET /tv (public) - displays list of tv shows
- GET /logout (private) - logouts user, ends session
- GET /movie/filter (public) - displays filtered list of movies based on filter criteria entered by user
- GET /tv/filter (public) - displays filtered list of tv shows based on filter criteria entered by user
- GET /movies (public) - displays list of movies
- GET /trending (public) - displays trending items (on first render, movies in last 24 hours are displayed)
- GET /success (public) - user redirected here after successfully authenticating with TMDB
- GET /person/credits/:id (public) - displays full info on an individual cast member
- GET /movies/favorites (private) - displays movies that user has marked as favourite.
- GET /mustwatch (private) - displays tv shows / movies that user has marked as must watch
- GET /content/reviewed (private) - displays tv shows / movies that user has reviewed
- GET /movies/:id (public) - displays the details of an invidivual movie.
- GET /tv/:id (public) - displays the details of an individual TV show.
- GET /reviews/:id (public) - Displays details of a specific review.

## Independent learning (If relevant).

- Pagination (api/tmdb-api.js, util.js, templateContentListPage/index.js) was implemented to allow users to navigate through the full library of content provided by the TMDB API.
- Firebase (firebase.js, reviewForm.js) realtime database used to enable persistence of user reviews.
- 3rd party authentication - Creation of session IDs (api/tmdb-api.js, createSessionPage.js) supported by TMDB (with resulting session ID stored in browser localstorage)
- Query String search (advancedFilterModal, api/tmdb-api.js) implemented for advanced movie/tv filtering
- Modal displays
- Implementation of public and private routes with different views rendered to user depending on authentication type
