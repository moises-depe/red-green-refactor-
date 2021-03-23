const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter testing', () => {
  it('it will take in an array of strings & capitalize the words then filter out any string that starts with f', () => {
    const array = ['horse', 'cow', 'fish', 'doge'];
    const newArray = capitalizeAndFilter(array);

    expect(newArray).toEqual(['HORSE', 'COW', 'DOGE']);
  });
});