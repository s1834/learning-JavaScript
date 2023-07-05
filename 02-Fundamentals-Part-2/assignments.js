// JavaScript Fundamentals – Part 2
'use strict';
/*
// LECTURE: Functions
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descPortugal);
*/
/*
// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1 (population){
    return population / 79;
}

const populationPortugal1 = percentageOfWorld1 (10);
const populationChina1 = percentageOfWorld1 (1441);
const populationUSA1 = percentageOfWorld1 (332);

console.log(populationPortugal1, populationChina1, populationUSA1);

const percentageOfWorld2 = function (population){
    return population / 79;
}

const populationPortugal2 = percentageOfWorld2 (10);
const populationChina2 = percentageOfWorld2 (1441);
const populationUSA2 = percentageOfWorld2 (332);

console.log(populationPortugal2, populationChina2, populationUSA2);
*/
/*
// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => population / 79;

const populationPortugal3 = percentageOfWorld3 (10);
const populationChina3 = percentageOfWorld3 (1441);
const populationUSA3 = percentageOfWorld3 (332);

console.log(populationPortugal3, populationChina3, populationUSA3);
*/
/*
// LECTURE: Functions Calling Other Functions
function percentageOfWorld1 (population){
    return population / 79;
}

function describePopulation (country, population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation('Portugal', 10));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));
*/
/*
// LECTURE: Introduction to Arrays
function percentageOfWorld1 (population){
    return population / 79;
}

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/
/*
// LECTURE: Basic Array Operations (Methods)
const neighbours = ['Norway', 'Sweden', 'Russia'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log("Propably not a central European country :D")
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);
*/
/*
// LECTURE: Introduction to Objects
const myCountry = {
    country: 'Finland',
    capital:'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};


// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// LECTURE: Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/
/*
// LECTURE: Iteration: The for Loop
for(let voter = 1; voter <=  50; voter++){
    console.log(`Voter number ${voter} is currently voting`);
}
*/
/*
// LECTURE: Looping Arrays, Breaking and Continuing
function percentageOfWorld1 (population){
    return population / 79;
}

const populations = [10, 1441, 332, 83];
const percentages = [];

for (let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i]);
    percentages.push(perc);
}
console.log(percentages);
*/
/*
// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}
*/
/*
// LECTURE: The while Loop
function percentageOfWorld1 (population){
    return population / 79;
}

const populations = [10, 1441, 332, 83];
const percentages = [];

let i = 0;
while (i < populations.length){
    const perc = percentageOfWorld1(populations[i]);
    percentages.push(perc);
    i++;
}

console.log(percentages);
*/