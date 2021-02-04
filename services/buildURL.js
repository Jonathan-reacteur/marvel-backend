require("dotenv").config();
const generateParamListComics = require("../services/generateParamListComics");

const listActionRoute = {
  getAllComics: "comics/",
  getAllComicWithChar: "comics/",
  getAllCharacters: "characters/",
};

//
// EXEMPLE FOURNI PAR LA DOC API
// Ex : https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YOUR_API_KEY
//
const buildURLGetAllComics = (param) => {
  let ULRconstructed = "";

  const parameterString = generateParamListComics(param);
  ULRconstructed =
    process.env.API_URL_MARVEL +
    listActionRoute["getAllComics"] +
    "?apiKey=" +
    process.env.API_KEY_MARVEL +
    parameterString;
  return ULRconstructed;
};
//
// EXEMPLE FOURNI PAR LA DOC API
// Ex : https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=YOUR_API_KEY
//
const buildURLGetAllComicsWithCharacter = (characterId) => {
  let ULRconstructed = "";
  ULRconstructed =
    process.env.API_URL_MARVEL +
    listActionRoute["getAllComicWithChar"] +
    characterId +
    "?apiKey=" +
    process.env.API_KEY_MARVEL;
  return ULRconstructed;
};
//
// EXEMPLE FOURNI PAR LA DOC API
// Ex : https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=YOUR_API_KEY
//
const buildURLGetAllCharacters = (param) => {
  let ULRconstructed = "";
  const parameterString = generateParamListComics(param);
  ULRconstructed =
    process.env.API_URL_MARVEL +
    listActionRoute["getAllCharacters"] +
    "?apiKey=" +
    process.env.API_KEY_MARVEL +
    parameterString;
  return ULRconstructed;
};

module.exports = {
  buildURLGetAllComics,
  buildURLGetAllComicsWithCharacter,
  buildURLGetAllCharacters,
};
