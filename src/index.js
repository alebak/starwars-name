let uniqueRandomArray = require('unique-random-array');
let starWarsNames = require('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
}

console.log("this is a message from master branch");

console.log("When have I a new release?");

console.log("Ha, ha, ha!!!");

console.log("I need a release!!!");