let uniqueRandomArray = require('unique-random-array');
let starWarsNames = require('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
}

console.log("This a message from develop branch");
console.log("Other message");

console.log("Other message");
console.log("I hope dashboard feat");

console.log("I still waiting for the new feature");