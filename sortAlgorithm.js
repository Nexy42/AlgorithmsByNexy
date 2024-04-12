//Here we sort the input data from smallest to largest, then if there is a negative number in our array we remove it

const array = [1, 24, 2, -100, 13, -123, 6];

const sortedNumbers = function (arr) {
  const allNumbers = arr.sort((a, b) => a - b);
  const negativeNumbers = [];

  while (arr.length > 0 && arr[0] < 0) {
    negativeNumbers.push(arr.shift());
  }
  console.log("All Numbers", allNumbers);
  console.log("Positive Numbers", arr);
  console.log("Negative Numbers", negativeNumbers);
};

sortedNumbers(array);
