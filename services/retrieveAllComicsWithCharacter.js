const buildURL = require("./buildURL");
const retrieveFromURL = require("./restrieveFromURL");
//
//************************************************************/
//                                                           */
//     RECUPERATION LISTE DES COMICS AYANT ID PERSONNAGE     */
//                                                           */
//************************************************************/
//
const retrieveAllComicsWithCharacter = (param) => {
  const urlToGetAllCharactersWithCharacters = buildURL.buildURLGetAllComicsWithCharacter(
    param
  );
  return retrieveFromURL(urlToGetAllCharactersWithCharacters);
};
module.exports = retrieveAllComicsWithCharacter;
