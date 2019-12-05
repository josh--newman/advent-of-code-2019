const doesPasswordMeetCriteria = password => {
  // It is a six-digit number.
  // The value is within the range given in your puzzle input.
  // Two adjacent digits are the same (like 22 in 122345).
  // Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

  const digitsArr = password.split("").map(d => parseInt(d, 10));

  let hasSuccessiveDigits = false;
  let hasDecreased = false;

  digitsArr.forEach((digit, i) => {
    if (i === 0) {
      return;
    }
    hasSuccessiveDigits =
      digit === digitsArr[i - 1] ? true : hasSuccessiveDigits;
    hasDecreased = digit < digitsArr[i - 1] ? true : hasDecreased;
  });

  return hasSuccessiveDigits && !hasDecreased;
};

const findPasswords = ({ start, end }) => {
  let matchedPasswords = [];
  for (let i = start; i <= end; i++) {
    const passwordString = String(i);
    if (doesPasswordMeetCriteria(passwordString)) {
      matchedPasswords.push(passwordString);
    }
  }

  return matchedPasswords;
};

module.exports = { doesPasswordMeetCriteria, findPasswords };
