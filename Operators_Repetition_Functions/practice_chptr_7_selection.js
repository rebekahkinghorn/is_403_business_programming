//Rebekah Kinghorn
//chapter 7 bus programming
//awesome practice with selection
//practice_chptr_7_selection.js


//7.1 if stmts
let iVar1 = 12;
let iVar2 = 15;

if (iVar1 < iVar2)
{
    console.log("Hi there. It's true. iVar1 IS less than iVar2.")
}



//7.2 else
let iResponse = prompt("Do you like it? Y/N")
if (iResponse.toUpperCase() == "Y")
{
    alert("Let's go!")
}
else 
{
    alert("Lame...")
}



//7.4 shorthand
let sInput = prompt("Do you like my recipes? (Y/N) ");
let sResult = (sInput.toUpperCase() == "Y"  ? "NICE!"  : "SAD.");
alert(sResult);



//7.5 else if
let sColor = prompt("What's your favorite color? ").toLowerCase();

if (sColor == "blue")
{
    alert("GO COUGS!!!");
}
else if (sColor == "orange")
{
    alert("interesting choice...");
}
else if (sColor == "green")
{
    alert("fun");
}
else
{
    alert("strange choice");
}



//7.6 nested if
let sDay = prompt("What day is it? Type full name: ");
let iNumber = parseInt(prompt("Pick a number between 1 and 10: "));

//this first line establishes if they picked monday
if (sDay.toLowerCase() == "monday")
    //this determines if the nubmer was 0-5 or 6-10
    if ((iNumber >= 0) && (iNumber <= 5))
    {
        alert("You chose Monday and a number 0-5!")
    }
    else 
    {
        alert("You chose Monday and a number 6-10")
    }
//this line means they did not pick monday
else
    if ((iNumber >= 0) && (iNumber <= 5))
    {
        alert("You didn't pick Monday, but your number is 0-5.")
    }
    else
    {
        alert("You didn't pick Monday, and your number is 6-10.")
    }



//7.8 logical operators
let sMyFavColor = "blue"
let sMyFavSong = "we close our eyes"
let iMyFavNumber = 12
let iMyNextNumber = 14

//a true AND stmt
if ((sMyFavColor == "blue") && (sMyFavSong == "we close our eyes"))
{
    alert ("You're cool!")
}
else 
{
    alert("Not it.")
}

// a false AND stmt
if ((sMyFavColor == "green") && (sMyFavSong == "we close our eyes"))
{
    alert ("You're cool!")
}
else
{
    alert("Not it. ")
}

//an OR stmt
if ((sMyFavColor == "blue") || (sMyFavSong = "nah"))
{
    alert("Fulfills the OR.")
}
else
{
    alert("doesn't fulfill the OR.")
}

//a NOT stmt
if (sMyFavColor != "green")
{
    alert("not green")
}

//a NOT stmt
if (sMyFavColor != "blue")
{
    alert("is not blue")
}
else
{
    alert("is blue")
}


//7.8 switch stmt
var iNumber2 = parseInt(prompt("what number do you like? (0-10): "))

//practice switch case
switch (iNumber2)
{
    case 0 :
        alert("you picked 0")
        break;
    case 1 :
        alert("you picked 1")
        break;
    case 2 :
    case 3 : 
    case 4 :
        alert("you picked 2-4")
        break;
    //default is basically "else"
    default:
        alert("im tired of typing")
}

//fancy switch case using "true"
let iUserMonth = parseInt(prompt("Enter your birth month"));

switch (true)
{
    case ((iUserMonth >= 3) && (iUserMonth <=5)) :
        alert("spring bday");
        break
    case ((iUserMonth >= 6) && (iUserMonth <=8)) :
        alert("summer bday!");
        break
    case ((iUserMonth >= 9) && (iUserMonth <=11)) :
        alert("fall bday!");
        break
    default :
        alert("winter bday!");
        break
}

//practice conditional switch case



//as a note, all of these loops return the "false" option _
// if you don't put exactly what I'm looking for.
//eg if you put in a random number or letter instead of Y/N/a color, _
//it jumps to the "else" option. no errors though!