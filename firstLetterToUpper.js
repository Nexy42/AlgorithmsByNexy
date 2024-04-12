//Function to uppercase or lowercase the first letters of names (can change)

const capitalizeName = function (name) {
  //Here we convert the input to Array
  const names = name.split(" ");
  const namesUpper = [];
  for (const i of names) {
    namesUpper.push(i[0].toUpperCase() + i.slice(1));
  }
  //Here we parse the array as string again
  console.log(namesUpper.join(" "));
};

capitalizeName("adem navruz");
capitalizeName("hüseyin ali");
