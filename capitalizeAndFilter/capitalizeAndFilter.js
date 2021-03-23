const capitalizeAndFilter = (array) => {
    const newArray = [];
  
    array.forEach((item) => {
      const uppercaseItem = item.toUpperCase();
  
      if (uppercaseItem.charAt(0) !== 'F') {
        newArray.push(uppercaseItem);
      }
    });
  
    return newArray;
  };
  
  module.exports = capitalizeAndFilter;