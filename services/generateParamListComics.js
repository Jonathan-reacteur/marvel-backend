// Cette classe pourrait être factorisé, mais anticipant la possible nécessité de faire des transodformations sur les
// paramètres, je laisse cette partie ainsi.

const generateParamListComics = (param) => {
  if (!param) {
    return "";
  }
  const { skip, limit, title, name } = param;
  let paramURL = "";
  if (limit) {
    paramURL += "&limit=" + limit;
  }
  if (title) {
    paramURL += "&title=" + title;
  }
  if (skip) {
    paramURL += "&skip=" + skip;
  }
  if (name) {
    paramURL += "&name=" + name;
  }
  return paramURL;
};

module.exports = generateParamListComics;
