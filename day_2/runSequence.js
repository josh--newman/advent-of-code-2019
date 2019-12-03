const fs = require("fs");

const runSequence = input => {
  const opCodesArray = input.split(",").map(i => parseInt(i, 10));

  for (let i = 0; i < opCodesArray.length; i += 4) {
    const operator = opCodesArray[i];
    const firstReadPosition = opCodesArray[i + 1];
    const secondReadPosition = opCodesArray[i + 2];
    const writePosition = opCodesArray[i + 3];

    if (operator === 99) {
      break;
    }

    const firstValue = opCodesArray[firstReadPosition];
    const secondValue = opCodesArray[secondReadPosition];
    const writeResult =
      operator === 1
        ? firstValue + secondValue
        : operator === 2
        ? firstValue * secondValue
        : 0;

    opCodesArray[writePosition] = writeResult;
  }

  return opCodesArray.join(",");
};

module.exports = runSequence;
