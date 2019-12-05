const { findPasswords } = require("./findPasswords");

const matchedPasswords = findPasswords({
  start: 240298,
  end: 784956
});

console.log(matchedPasswords);
console.log(matchedPasswords.length);
