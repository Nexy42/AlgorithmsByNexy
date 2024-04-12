//I have a small question here, the map was selected because we can put any type to keys and values in maps.

const question = new Map([
  ["question", "What is your age?"],
  [1, 29],
  [2, 33],
  [3, 34],
  ["correct", 3],
  [true, "Dogru Cevap 🍾"],
  [false, "Tekrar deneyin 😒"],
]);

//Here we ask the question from the map
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`${key}: ${value}`);
  }
}

//Here you can change the answer to 1, 2, 3 and run it after changing it. You have to save it before running the code after changing the answer variable!
//You have to outcomment the below 2 statements for seeing results!!

// const answer = 1;
// console.log(question.get(question.get("correct") === answer));
