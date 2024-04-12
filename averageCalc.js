//For calculating the average inputData

const numbers = [13, 17, 19, 92, 4023, 4913];

const average = function (number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum / number.length;
};

console.log(average(numbers));
