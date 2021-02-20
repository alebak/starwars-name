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