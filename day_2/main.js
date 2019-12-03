const fs = require("fs");

const runSequence = require("./runSequence");

const fileContents = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const inputArr = fileContents.split(",");

for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j++) {
    const testArray = [...inputArr];
    testArray[1] = i;
    testArray[2] = j;

    const result = runSequence(testArray.join(","));
    if (result.split(",")[0] === "19690720") {
      console.log("Found answer:");
      console.log("noun:", i);
      console.log("verb:", j);
      console.log("Answer:", 100 * parseInt(i, 10) + parseInt(j, 10));
    }
  }
}
