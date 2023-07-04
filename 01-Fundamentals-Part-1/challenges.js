// JavaScript Fundamentals – Part 1

// Coding Challenge #1
/*
const markMass  = 78;
const markHeight =  1.69;
const johnMass = 92;
const johnHeight = 1.95;
*/
/*
const markMass  = 95;
const markHeight =  1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);
*/

/*
// Coding Challenge #2
const markMass  = 95;
const markHeight =  1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is heigher than John's (${johnBMI})!`)
} else  {
    console.log(`John's BMI (${johnBMI}) is heigher than Mark's (${markBMI})!`)
}
*/
/*
// Coding Challenge #3
const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;

const dolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
const koalas = (koalas1 + koalas2 + koalas3) / 3;
console.log(dolphins, koalas);
if (dolphins > koalas && dolphins >= 100){
    console.log("dolphins");
} else if (koalas > dolphins && koalas >= 100){
    console.log("koalas");
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100){
    console.log("draw");
} else {
    console.log("No one")
}
*/

// Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);