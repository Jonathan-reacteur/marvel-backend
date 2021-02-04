const express = require("express");
const router = express.Router();
const retrieveAllComics = require("../services/retrieveAllComics");
const retrieveAllComicsWithCharacter = require("../services/retrieveAllComicsWithCharacter");
//

//
// Route de récupération de tous les comics
router.get("/comics/", async (req, res) => {
  const response = await retrieveAllComics(req.query);
  res.json(response.data);
});

//
// Route de récupération de tous les comics selon des critères de recherches
router.get("/comics/searchComicWithCharacterId/", async (req, res) => {
  const response = await retrieveAllComicsWithCharacter(req.query.id);
  res.json(response.data);
});
module.exports = router;
