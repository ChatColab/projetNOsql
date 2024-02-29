import {mongo} from './db.js'

 const sportArticlesName = [
    'Basketball',
    'Raquette de tennis',
    'Club de golf',
    'Batte de baseball',
    'Chaussures de course',
    'Lunettes de natation',
    'Casque de cyclisme',
    'Bâtons de ski',
    'Snowboard',
    'Crosse de hockey',
    'Gants de boxe',
    'Batte de cricket',
    'Ballon de rugby',
    'Volleyball',
    'Volant de badminton',
    'Raquette de tennis de table',
    'Boule de bowling',
    'Canne à pêche',
    'Harnais descalade',
  ];

function generateSportsArticles() {
  const sportsArticlesName = sportArticlesName[Math.floor(Math.random() * sportArticlesName.length)];
  const SportsArticlesPrice = Math.floor(Math.random() * 451) + 50;
  return { name: sportsArticlesName, price: SportsArticlesPrice };
}

const sportsArticles = Array.from({length: 100}, () => generateSportsArticles())
await mongo.deleteMany({})
await mongo.insertMany(sportsArticles)
