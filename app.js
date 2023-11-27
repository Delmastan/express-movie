const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

const movieById = (req, res) => {
  const found = movies.find((movie) => movie.id === parseInt(req.params.id));

  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).send(` ERROR: Not found `);
  }
};

app.get("/api/movies/:id", movieById);

module.exports = app;
