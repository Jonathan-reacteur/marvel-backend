const buildURL = require("./buildURL");
const retrieveFromURL = require("./restrieveFromURL");

//************************************************************/
//                                                           */
//           RECUPERATION LISTE DES PERSONNAGES              */
//                                                           */
//************************************************************/

const retrieveAllCharacters = (param) => {
  const urlToGetAllCharacters = buildURL.buildURLGetAllCharacters(param);
  return retrieveFromURL(urlToGetAllCharacters);
};
module.exports = retrieveAllCharacters;
