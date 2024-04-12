//Password generator

//Here is a simple Password generator, which at least contains 8 characters to max 12 characters

const randomPasswordGenerator = function () {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const passwordLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password = password + characters[random];
  }
  return password;
};

console.log(randomPasswordGenerator());
