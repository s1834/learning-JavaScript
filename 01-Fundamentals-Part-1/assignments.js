// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables
/*
let country = "India";
let continent = "Asia";
let population = 1326093247;

console.log(country);
console.log(continent);
console.log(population);


// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland)
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language  = "Hindi";
const country = "India";
const continent = "Asia";
const isIsland = false;
isIsland = true;

// LECTURE: Basic Operators
console.log(population / 2);

population++;
console.log(population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);

// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > averagePopulation){
    console.log(`${country}'s poppulation is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`)
}
*/
/*
// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
*/
/*
// LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1){
    console.log("Only 1 border!");
} else if (numNeighbours > 1){
    console.log("More than 1 border");
} else {
    console.log("No borders");
}
*/
/*
// LECTURE: Logical Operators
if(language === "English" && population < 50000000 && !isIsland){
    console.log(`You should live in ${country} :)`);
} else {
    console.log{`${country} does not meet your criteria :(`}
}*/
/*
// LECTURE: The switch Statement
const language  = "hindi";
switch (language){
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;

    case "english":
        console.log("3rd place");
        break;
    
    case "hindi":
        console.log("Number 4");
        break;
    
    case "arabic":
        console.log("5th most spoken language");
        break;
    
    default:
        console.log("Great language too :D");
}
*/
/*
// LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 3300000 ? 'above' : 'below'} average`);
*/



// JavaScript Fundamentals – Part 2
