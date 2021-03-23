const fetch = require('node-fetch');

const fetchQuotes = async () => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes');

  const body = await response.json();

  const quote = {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };
  return quote;
};

module.exports = fetchQuotes;