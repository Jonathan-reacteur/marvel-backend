const buildURL = require("../services/buildURL");
const retrieveFromURL = require("../services/restrieveFromURL");
//
//************************************************************/
//                                                           */
//           RECUPERATION LISTE DES COMICS                   */
//                                                           */
//************************************************************/
//
const retrieveAllComics = (param) => {
  const urlToGetAllComics = buildURL.buildURLGetAllComics(param);
  return retrieveFromURL(urlToGetAllComics);
};
module.exports = retrieveAllComics;
