const fs = require("fs");
const calculateDistance = require("./calculateDistance");

const inputText = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const [line1, line2] = inputText.split("\n");
const distance = calculateDistance(line1.split(","), line2.split(","));
console.log(distance);
