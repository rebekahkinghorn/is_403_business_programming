//Rebekah Kinghorn
//chapter 6 bus programming
//awesome practice with operators


let var1 = 10;
let var2 = 5;



//6.2 operations

//do operations
let iResultDivision = var1 / var2;
let iResultRemainder1 = var1 % var2;
let iResultRemainder2 = var2 % var1;

//print values
console.log(iResultDivision);
console.log(iResultRemainder1);
console.log(iResultRemainder2);
//that last one is 5 bc 10 goes into 5 0 times, leaving 5 left over




//6.3 Rounding

//if .5 it rounds up
console.log(Math.round(4.5)); //rounds to 5
console.log(Math.round(4.49)); //rounds to 4

//rounds to nearest whole number
let fNumber = 3.4999;
console.log(fNumber.toFixed()); //rounds to 3
console.log(fNumber.toFixed(2)); //rounds with 2 decimals


//6.4 combining symbols
let var10 = 15;
let var11 = 20;
let var12 = 35;

let iAddingOperators = 50;
iAddingOperators += var11; // takes 50 and adds var11:20 to get 70


//6.5 comparison
iCompResult = var10 > var11;
console.log(iCompResult); //prints false

//working with letters
sLetter1 = "A";
sLetter2 = "a";
console.log(sLetter1);
console.log(sLetter2.toUpperCase())


//6.6 Random Numbers
let iRandomNumber = Math.random();
console.log(iRandomNumber);

//Math.floor() to get nice random numbers:
let iRandomNumber2 = Math.floor(Math.random()*10) +1 
//*10 and add 1 to make them whole numbers 1-10

console.log(iRandomNumber2);

//practice with top defined
let iTop = parseInt(prompt("What is the highest number you want?"))
let iRandomNumber3 = Math.floor(Math.random()* (iTop +1));
console.log(`the number you got is: ${iRandomNumber3}`)


//6.7 Practice
// Write a program for a grade calculator using the following grade weights:
// Homework Average = 10%
// Midterm 1 Score = 20%
// Midterm 2 Score =20%
// Final Exam Score = 25%
// Project 1 Score = 5%
// Project 2 Score = 7.5%
// Project 3 Score = 12.5%

let sFirstName = prompt("What's your name? ");
let iHwAverage = parseInt(prompt("Enter hw average: "));
let iMidterm1 = parseInt(prompt("Enter Midterm 1 score: "));
let iMidterm2 = parseInt(prompt("Enter Midterm 2 score: "));
let iFinalExam = parseInt(prompt("Enter Final Exam score: "));
let iProject1 = parseInt(prompt("Enter Project 1 score: "));
let iProject2 = parseInt(prompt("Enter Project 2 score: "));
let iProject3 = parseInt(prompt("Enter Project 3 score: "));

iHwAverage *= .1;
iMidterm1 *= .2;
iMidterm2 *= .2;
iFinalExam *= .25;
iProject1 *= .05;
iProject2 *= .075;
iProject3 *= .125;

iFinalGrade = iHwAverage + iMidterm1 + iMidterm2 + iFinalExam + iProject1 + iProject2 + iProject3;
alert(`${sFirstName.toUpperCase()}, your final scores is: ${iFinalGrade.toFixed(2)}%!`)



console.log()


