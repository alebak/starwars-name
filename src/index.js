let uniqueRandomArray = require('unique-random-array');
let starWarsNames = require('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
}

console.log("This a message from develop branch");
console.log("Other message");

console.log("Other message");

console.log("This is the dashboard feature initial message");
console.log("Fix 1 dashboard");

// Pack dashboar feat
console.log("Feat 1 dashboard");
console.log("Feat 2 dashboard");
console.log("Feat 3 dashboard");