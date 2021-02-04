const buildURL = require("../services/buildURL");
describe("buildurlest", () => {
  test("GET ALL COMICS : Si param null doit renvoyer chaine vide", () => {
    //
    // GIVEN
    const param = "getAllComics";
    const expected =
      "https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=G1crYEsAE0pRyiyu";
    //
    // WHEN
    const resultat = buildURL.buildURLGetAllComics(param);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
  test("GET ALL COMICS : devrait renvoyer une URL contenant API et paramètre", () => {
    //
    // GIVEN
    const param = { skip: 5, limit: 14 };
    const expected =
      "https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=G1crYEsAE0pRyiyu&limit=14&skip=5";
    //
    // WHEN
    const resultat = buildURL.buildURLGetAllComics(param);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
  test("GET ALL COMICS WITH CHAR : Devrait renvoyer une chaîne avec l'ID", () => {
    //
    // GIVEN
    const characterId = "5fcf91f4d8a2480017b91453";
    const expected =
      "https://lereacteur-marvel-api.herokuapp.com/comics/5fcf91f4d8a2480017b91453?apiKey=G1crYEsAE0pRyiyu";
    //
    // WHEN
    const resultat = buildURL.buildURLGetAllComicsWithCharacter(characterId);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
  test("GET ALL CHARACTERS : devrait renvoyer une URL contenant API et paramètre", () => {
    //
    // GIVEN
    const param = { skip: 5, limit: 14 };
    const expected =
      "https://lereacteur-marvel-api.herokuapp.com/characters/?apiKey=G1crYEsAE0pRyiyu&limit=14&skip=5";
    //
    // WHEN
    const resultat = buildURL.buildURLGetAllCharacters(param);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
});
