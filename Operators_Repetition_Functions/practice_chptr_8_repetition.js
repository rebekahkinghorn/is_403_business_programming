//Rebekah Kinghorn
//chapter 8 bus programming
//awesome practice with repetition
//practice_chptr_8_repetition.js


//8.2 while loop practice
//this will continue looping as long as the user inputs Y or y

//QUICK NOTE AFTER READING 8.3 _
//this could be accomplished better by a do/while loop _
//since it started with a condition to make it repeat at least once










let bContinue = true;
while (bContinue == true)
{
    let sAnswer = prompt("Do you want to continue? (Y/N): ")
    if (sAnswer.toUpperCase() == "Y")
    {
        bContinue = true;
    }
    else
    {
        bContinue = false;
    }
}

//practice loop with counter
let sUserResponse = prompt("Enter the number of how many times you want to loop: ");
let iCounter = 1;

while (iCounter <= sUserResponse)
{
    //use BACKTICKS for f strings!
    alert(`this is repetition #${iCounter}`);
    iCounter += 1;
}


//8.3 do/while loop practice
do 
{
    let sFirstName = prompt("Enter your first name: ");
    let sLastName = prompt("Enter your last name: ");
    let bYesNo = confirm("Do you want to add another user? ");
    // console.log(sFirstName);
    // console.log(sLastName);
    // console.log(bYesNo);
    // console.log(typeof(bYesNo));
    // break
}
while (bYesNo == true);

//I made the dumb mistake haha - I put = instead of ==!











//8.4 for loops
//found out you need to put iCounter + 1 or else it counts 0-4, not 1-5
let iNumberReps = prompt("How many reps?? ")
for (var iCount = 0; iCount < iNumberReps; iCount += 1)
{
    alert(`The count is ${iCount + 1}. You're welcome.`)
}

//practice for loop with math random and rounding
var iNumPersons;
var sName;
var iGuess;
var iRndAge;
var iBottom;
var iTop;

iNumPersons = parseInt(prompt("how many do you want to guess? "));

iBottom = parseInt(prompt("lowest age: "));
iTop = parseInt(prompt("highest age: "));

for (iCount = 0; iCount < iNumPersons; iCount += 1)
{
    sName = prompt("enter their name: ");
    //this next line only sets a cap; we also need a minimum
    // iRndAge = Math.floor(Math.random() * iTop + 1);

    //by subtracting iBottom, we are limiting the possible values to a range _
    //then by addding iBottom back, we are bumping that range up the min-max given
    iRndAge = Math.floor(Math.random() * (iTop + 1 - iBottom)) +iBottom;
    iGuess = parseInt(prompt("your guess? "));
    alert(iRndAge)
}


//8.5 Increment and Decrement Operators
//set to 0
myVar = 0
//changes to 1
myVar++;
//logged as 1
console.log(myVar);
//still logged as 1 - the operation to add 1 is executed after it's logged
console.log(myVar++);
//logged as 3 becuase both ++'s were executed before logging it this time
console.log(++myVar)

console.log()


//8.7 Continue
let myAnswer = "yes"
while (myAnswer == "yes")
{
    myAnswer = prompt("do you want to continue? ");
    if (myAnswer == "noodles")
    {
        myAnswer = "yes"
        continue;
    }
}



//8.8 nested loops
//define vars
var sFullName;
var iNumTests;
var iSumTest;
var iCount;
var iTestCount;
var fTestAve;
var iStudentCount;
var sOutput = "";

//set student count to user preference
iStudentCount = parseInt(prompt("How many kiddos? "));

//loop
//start at 0 and increment by 1 as long as we don't exceed number of given students
for (iCount = 0; iCount < iStudentCount; iCount++)
{
    //gather names and how many tests to iterate through
    sFullName = prompt("Their name? ");
    iNumTests = parseInt(prompt("Test #? "));

    iSumTest = 0;

    //loop through each test and get a score
    for (iTestCount = 0; iTestCount < iNumTests; iTestCount++)
    {
        iSumTest = iSumTest + parseInt(prompt("\nEnter test score: " + (iTestCount) + 1));
    }

    //add to overall output
    fTestAve = iSumTest / iNumTests;
    sOutput = sOutput + sFullName + "has average score: " + fTestAve + "\n"
}
//display output
alert(sOutput)