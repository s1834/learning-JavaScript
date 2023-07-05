// JavaScript Fundamentals – Part 2

'use strict';
/*
// Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);


const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`);
    }
    else {
        console.log("No team wins");
    }
};

checkWinner(scoreDolphins, scoreKoalas);
*/
/*
// Coding Challenge #2
const calcTip = function(billValue) {
    if(billValue >= 50 && billValue <= 300){
        return billValue * 0.15;
    }
    else {
        return billValue * 0.20;
    }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/
/*
// Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) id higher than ${john.fullName}'s (${john.bmi})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) id higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/
/*
// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++){
    const calcTip = function(billValue) {
        if(billValue >= 50 && billValue <= 300){
            return billValue * 0.15;
        }
        else {
            return billValue * 0.20;
        }
    };

    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(totals);

const calcAverage = function (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / totals.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/