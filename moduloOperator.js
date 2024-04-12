//Here I actually put a small if statement to see if a number is flat or not.

const rest = function (number) {
  if (number % 2 === 0) {
    console.log(`When we divide ${number} by 2 the rest is even`);
  } else {
    console.log(`When we divide ${number} by 2 the rest is uneven`);
  }
};

rest(2);
rest(3);
rest(14);
