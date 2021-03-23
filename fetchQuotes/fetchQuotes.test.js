const fetchQuotes = require('./fetchQuotes.js');

describe('fetchQuotes', () => {
  it('returns a single quote, name and image', async () => {
    const expected = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    };
    const newQuote = await fetchQuotes();
    expect(newQuote).toEqual(expected);
  });
});