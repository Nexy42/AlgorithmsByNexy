//Number finding algorithm in a data

const data = [123, 435, 19323, 12304, 39234, 18123, 23];

const findNumber = function (array, number) {
  //If the searched number does not exist, the output will be null!
  let foundNumber = null;

  if (array.includes(number)) {
    foundNumber = number;
  }
  return foundNumber;
};
//If the number we are looking for is available, the output will be the number we are looking for
console.log(findNumber(data, 19323));
