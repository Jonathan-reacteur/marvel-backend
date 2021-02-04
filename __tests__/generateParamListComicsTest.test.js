const generateParamListComics = require("../services/generateParamListComics");
describe("Fonction de parametrage de l'URL", () => {
  test("Si param null doit renvoyer chaine vide", () => {
    //
    // GIVEN
    const param = {};
    const expected = "";
    //
    // WHEN
    const resultat = generateParamListComics(param);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
  test("Deux paramètres transcrits en URL", () => {
    //
    // GIVEN
    const param = { skip: 5, limit: 14 };
    const expected = "&limit=14&skip=5";
    //
    // WHEN
    const resultat = generateParamListComics(param);
    //
    // THEN
    expect(resultat).toEqual(expected);
  });
});
