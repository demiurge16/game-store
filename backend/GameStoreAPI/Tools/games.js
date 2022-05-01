/**
 * Use this script to generate sql to populate database with initial data.
 *
 */

let data = {
  "publishers": [
    {
      "id": 1,
      "name": "Bethesda"
    },
    {
      "id": 2,
      "name": "CD Projekt"
    },
    {
      "id": 3,
      "name": "Rockstar Games"
    },
    {
      "id": 4,
      "name": "Ubisoft"
    },
    {
      "id": 5,
      "name": "Nintendo"
    }
  ],
  "developers": [
    {
      "id": 1,
      "name": "Obsidian Entertainment"
    },
    {
      "id": 2,
      "name": "Bethesda Game Studios"
    },
    {
      "id": 3,
      "name": "CD Projekt RED"
    },
    {
      "id": 4,
      "name": "Rockstar Games"
    },
    {
      "id": 5,
      "name": "Ubisoft"
    },
    {
      "id": 6,
      "name": "Arkane Studios"
    },
    {
      "id": 7,
      "name": "id Software"
    },
    {
      "id": 8,
      "name": "Nintendo"
    }
  ],
  "platforms": [
    {
      "id": 1,
      "name": "PC"
    },
    {
      "id": 2,
      "name": "Playsation 3"
    },
    {
      "id": 3,
      "name": "Xbox 360"
    },
    {
      "id": 4,
      "name": "Playstation 4"
    },
    {
      "id": 5,
      "name": "Xbox One"
    },
    {
      "id": 6,
      "name": "Playstation 5"
    },
    {
      "id": 7,
      "name": "Xbox Series"
    },
    {
      "id": 8,
      "name": "Nintendo Switch"
    }
  ],
  "genres": [
    {
      "id": 1,
      "name": "Action"
    },
    {
      "id": 2,
      "name": "Adventure"
    },
    {
      "id": 3,
      "name": "Fighting"
    },
    {
      "id": 4,
      "name": "Platform"
    },
    {
      "id": 5,
      "name": "Puzzle"
    },
    {
      "id": 6,
      "name": "Racing"
    },
    {
      "id": 7,
      "name": "RPG"
    },
    {
      "id": 8,
      "name": "Shooter"
    },
    {
      "id": 9,
      "name": "Simulation"
    },
    {
      "id": 10,
      "name": "Sports"
    },
    {
      "id": 11,
      "name": "Strategy"
    }
  ],
  "games": [
    {
      "id": 1,
      "title": "Fallout: New Vegas",
      "summary": "Fallout: New Vegas is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the first game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on October 21, 2008, and for PlayStation 4 and Xbox One on November 18, 2015.",
      "description": "Fallout: New Vegas is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the first game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on October 21, 2008, and for PlayStation 4 and Xbox One on November 18, 2015.",
      "releaseDate": "2010-10-19",
      "rating": "M",
      "price": 19.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 1,
      "platformIds": [1, 2, 3],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 2,
      "title": "Fallout 4",
      "summary": "Fallout 4 is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2018.",
      "description": "Fallout 4 is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2018.",
      "releaseDate": "2015-11-19",
      "rating": "M",
      "price": 39.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 2,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 3,
      "title": "Fallout 76",
      "summary": "Fallout 76 is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the sixth game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2018, and for PlayStation 4 and Xbox One on November 18, 2019.",
      "description": "Fallout 76 is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the sixth game in the Fallout series and the successor to Fallout 3. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2018, and for PlayStation 4 and Xbox One on November 18, 2019.",
      "releaseDate": "2019-11-19",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 2,
      "platformIds": [1, 4, 5, 6, 7],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 4,
      "title": "The Elder Scrolls IV: Oblivion",
      "summary": "The Elder Scrolls IV: Oblivion is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth game in the Elder Scrolls series and the successor to the Elder Scrolls III: Morrowind. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2011, and for PlayStation 4 and Xbox One on November 18, 2015.",
      "description": "The Elder Scrolls IV: Oblivion is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth game in the Elder Scrolls series and the successor to the Elder Scrolls III: Morrowind. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2011, and for PlayStation 4 and Xbox One on November 18, 2015.",
      "releaseDate": "2011-11-19",
      "rating": "M",
      "price": 19.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 2,
      "platformIds": [1, 2, 3],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 5,
      "title": "The Elder Scrolls V: Skyrim",
      "summary": "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth game in the Elder Scrolls series and the successor to the Elder Scrolls IV: Oblivion. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2017.",
      "description": "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth game in the Elder Scrolls series and the successor to the Elder Scrolls IV: Oblivion. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2017.",
      "releaseDate": "2015-11-19",
      "rating": "M",
      "price": 39.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 2,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 6,
      "title": "The Witcher 3: Wild Hunt",
      "summary": "The Witcher 3: Wild Hunt is an action role-playing video game developed by CD Projekt and published by CD Projekt RED. It is the sequel to The Witcher 2: Assassins of Kings and the third main entry in The Witcher series. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2018.",
      "description": "The Witcher 3: Wild Hunt is an action role-playing video game developed by CD Projekt and published by CD Projekt RED. It is the sequel to The Witcher 2: Assassins of Kings and the third main entry in The Witcher series. The game was released for Microsoft Windows, PlayStation 3, and Xbox 360 on November 18, 2015, and for PlayStation 4 and Xbox One on November 18, 2018.",
      "releaseDate": "2015-05-18",
      "rating": "M",
      "price": 39.99,
      "score": 8.5,
      "publisherId": 2,
      "developerId": 3,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 7,
      "title": "Cyberpunk 2077",
      "summary": "Cyberpunk 2077 is an action role-playing video game developed by CD Projekt and published by CD Projekt RED. It is the sequel to Cyberpunk 2077 and the fourth main entry in the Cyberpunk series. The game was released for Microsoft Windows, PlayStation 4, and Xbox One on November 18, 2018.",
      "description": "Cyberpunk 2077 is an action role-playing video game developed by CD Projekt and published by CD Projekt RED. It is the sequel to Cyberpunk 2077 and the fourth main entry in the Cyberpunk series. The game was released for Microsoft Windows, PlayStation 4, and Xbox One on November 18, 2018.",
      "releaseDate": "2018-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 2,
      "developerId": 3,
      "platformIds": [1, 4, 5, 6, 7],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 8,
      "title": "Red Dead Redemption 2",
      "summary": "Red Dead Redemption 2 is an action role-playing video game developed by Rockstar North and published by Rockstar Games. It is the sequel to Red Dead Redemption and the fifth main entry in the Red Dead series. The game was released for Microsoft Windows, PlayStation 4, and Xbox One on November 18, 2018.",
      "description": "Red Dead Redemption 2 is an action role-playing video game developed by Rockstar North and published by Rockstar Games. It is the sequel to Red Dead Redemption and the fifth main entry in the Red Dead series. The game was released for Microsoft Windows, PlayStation 4, and Xbox One on November 18, 2018.",
      "releaseDate": "2018-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 3,
      "developerId": 4,
      "platformIds": [1, 4, 5, 6, 7],
      "genreIds": [1, 2]
    },
    {
      "id": 9,
      "title": "Grand Theft Auto V",
      "summary": "Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series and the successor to Grand Theft Auto IV. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series and the successor to Grand Theft Auto IV. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2013-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 3,
      "developerId": 4,
      "platformIds": [1, 2, 3, 4, 5, 6, 7],
      "genreIds": [1, 2]
    },
    {
      "id": 10,
      "title": "Assassin''s Creed Origins",
      "summary": "Assassin''s Creed Origins is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the first main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Assassin''s Creed Origins is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the first main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2015-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 4,
      "developerId": 5,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 11,
      "title": "Assassin''s Creed Odyssey",
      "summary": "Assassin''s Creed Odyssey is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the second main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Assassin''s Creed Odyssey is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the second main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2015-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 4,
      "developerId": 5,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 12,
      "title": "Assassin''s Creed Valhalla",
      "summary": "Assassin''s Creed Valhalla is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the third main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Assassin''s Creed Valhalla is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It is the third main entry in the Assassin''s Creed series and the successor to the 2010 game Assassin''s Creed III: Black Flag. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2015-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 4,
      "developerId": 5,
      "platformIds": [1, 4, 5, 6, 7],
      "genreIds": [1, 2, 7]
    },
    {
      "id": 13,
      "title": "Dishonored",
      "summary": "Dishonored is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. It is the first main entry in the Dishonored series and the successor to the 2012 game Dishonored: Deathless. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Dishonored is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. It is the first main entry in the Dishonored series and the successor to the 2012 game Dishonored: Deathless. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2013-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 6,
      "platformIds": [1, 2, 3],
      "genreIds": [1, 2, 5]
    },
    {
      "id": "14",
      "title": "Dishonored 2",
      "summary": "Dishonored 2 is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. It is the second main entry in the Dishonored series and the successor to the 2012 game Dishonored: Deathless. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "Dishonored 2 is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. It is the second main entry in the Dishonored series and the successor to the 2012 game Dishonored: Deathless. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2013-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 6,
      "platformIds": [1, 4, 5],
      "genreIds": [1, 2, 5]
    },
    {
      "id": 15,
      "title": "DOOM",
      "summary": "DOOM is a first-person shooter video game developed by id Software and published by Bethesda Softworks. It is the first main entry in the DOOM series and the successor to the 1993 game DOOM: Hell on Earth. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "DOOM is a first-person shooter video game developed by id Software and published by Bethesda Softworks. It is the first main entry in the DOOM series and the successor to the 1993 game DOOM: Hell on Earth. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2016-11-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 7,
      "platformIds": [1, 4, 5, 8],
      "genreIds": [1, 8]
    },
    {
      "id": 16,
      "title": "DOOM Eternal",
      "summary": "DOOM Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. It is the second main entry in the DOOM series and the successor to the 1993 game DOOM: Hell on Earth. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "description": "DOOM Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. It is the second main entry in the DOOM series and the successor to the 1993 game DOOM: Hell on Earth. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on November 18, 2013, and for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2020-03-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 1,
      "developerId": 7,
      "platformIds": [1, 4, 5, 6, 7],
      "genreIds": [1, 8]
    },
    {
      "id": 17,
      "title": "Super Mario Odyssey",
      "summary": "Super Mario Odyssey is a platform video game developed and published by Nintendo. It is the third main entry in the Super Mario series and the successor to the 2015 game Super Mario Maker. The game was released for Nintendo Switch on November 18, 2019.",
      "description": "Super Mario Odyssey is a platform video game developed and published by Nintendo. It is the third main entry in the Super Mario series and the successor to the 2015 game Super Mario Maker. The game was released for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2018-03-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 5,
      "developerId": 8,
      "platformIds": [8],
      "genreIds": [1, 2, 4]
    },
    {
      "id": 18,
      "title": "The Legend of Zelda: Breath of the Wild",
      "summary": "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo. It is the fourth main entry in the The Legend of Zelda series and the successor to the 2014 game The Legend of Zelda: Ocarina of Time. The game was released for Nintendo Switch on November 18, 2019.",
      "description": "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo. It is the fourth main entry in the The Legend of Zelda series and the successor to the 2014 game The Legend of Zelda: Ocarina of Time. The game was released for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2017-03-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 5,
      "developerId": 8,
      "platformIds": [8],
      "genreIds": [1, 2, 4, 5]
    },
    {
      "id": 19,
      "title": "Animal Crossing: New Horizons",
      "summary": "Animal Crossing: New Horizons is a Nintendo Switch game developed and published by Nintendo. It is the fifth main entry in the Animal Crossing series and the successor to the 2013 game Animal Crossing: New Leaf. The game was released for Nintendo Switch on November 18, 2019.",
      "description": "Animal Crossing: New Horizons is a Nintendo Switch game developed and published by Nintendo. It is the fifth main entry in the Animal Crossing series and the successor to the 2013 game Animal Crossing: New Leaf. The game was released for Nintendo Switch on November 18, 2019.",
      "releaseDate": "2020-03-18",
      "rating": "M",
      "price": 59.99,
      "score": 8.5,
      "publisherId": 5,
      "developerId": 8,
      "platformIds": [8],
      "genreIds": [1, 2, 4, 5]
    }
  ]
}

let insertPublishers = data.publishers.map(publisher => {
  return `INSERT INTO "Publishers"("Id", "Name") OVERRIDING SYSTEM VALUE VALUES (${publisher.id}, '${publisher.name}');`
}).join('\n');

let insertDevelopers = data.developers.map(developer => {
  return `INSERT INTO "Developers"("Id", "Name") OVERRIDING SYSTEM VALUE VALUES (${developer.id}, '${developer.name}');`
}).join('\n');

let insertPlatforms = data.platforms.map(platform => {
  return `INSERT INTO "Platforms"("Id", "Name") OVERRIDING SYSTEM VALUE VALUES (${platform.id}, '${platform.name}');`
}).join('\n');

let insertGenres = data.genres.map(genre => {
  return `INSERT INTO "Genres"("Id", "Name") OVERRIDING SYSTEM VALUE VALUES (${genre.id}, '${genre.name}');`
}).join('\n');

let insertGames = data.games.map(game => {
  let gameInsert = `INSERT INTO "Games"("Id", "Title", "Summary", "Description", "ReleaseDate", "Rating", "Price", "Score", "PublisherId", "DeveloperId") OVERRIDING SYSTEM VALUE VALUES (${game.id}, '${game.title}', '${game.summary}', '${game.description}', '${game.releaseDate}', '${game.rating}', ${game.price}, ${game.score}, ${game.publisherId}, ${game.developerId});\n`;
  let gamePlatforms = game.platformIds.map(platformId => {
    return `INSERT INTO "GamePlatform"("GamesId", "PlatformsId") OVERRIDING SYSTEM VALUE VALUES (${game.id}, ${platformId});`
  });
  let gameGenres = game.genreIds.map(genreId => {
    return `INSERT INTO "GameGenre"("GamesId", "GenresId") OVERRIDING SYSTEM VALUE VALUES (${game.id}, ${genreId});`
  });
  return gameInsert + gamePlatforms.join("\n") + gameGenres.join("\n");
}).join('\n');

let insert = insertPublishers + insertDevelopers + insertPlatforms + insertGenres + insertGames;

console.log(insert);
