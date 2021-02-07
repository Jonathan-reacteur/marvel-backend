const express = require("express");
const router = express.Router();
const retrieveAllCharacters = require("../services/retrieveAllCharacters");
require("dotenv").config();
const retrieveFromURL = "../services/restrieveFromURL";
//
// API_URL_MARVEL
// https://lereacteur-marvel-api.herokuapp.com/
// https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YOUR_API_KEY

const URL = process.env.API_URL_MARVEL;
//
// Route de récupération de tous les personnages
router.get("/Characters/", async (req, res) => {
  const response = await retrieveAllCharacters(req.query);
  res.json(response.data);
});
module.exports = router;
