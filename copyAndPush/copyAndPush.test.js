const copyAndPush = require('./copyAndPush');

describe('copyAndPush testing', () => {
  it('returns a new array with the items from original array also with the new item placed on the end', () => {
    const numbers = [1, 2, 3];
    const newItem = 4;

    const newArray = copyAndPush(numbers, newItem);

    expect(newArray).toEqual([1, 2, 3, 4]);
  });

  it('it returns the original array', () => {
    const arr = [1, 2, 3];
    const newValue = 4;

    copyAndPush(arr, newValue);

    expect(arr).toEqual([1, 2, 3]);
  });
});