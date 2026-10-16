//notes


//let variables only live in the {}
//notes on incrementing
let iCount = 0;
iCount++;
// alert(iCount);

for (iCount = 0; iCount < 3; iCount++)
{
    console.log("The counter is at " + iCount);
}

//iNum = 10
let iNum = 10
//iNum + 1
iNum++;
//iNum + 1
iNum++;
//iNum + 1 BUT it does it AFTER printing
console.log(iNum++)
// alert(iNum++);


//trying incrementing
//pre-incrementing to get ONLY ODD NUMBERS
for (let iCountNew = 0; ++iCountNew <= 3; iCountNew++)
{
    console.log(iCountNew);
}



//notes on arrays

function main()
{
//create empty array
let aStudents = [];

//prompt for num students
let iNumStudents = parseInt(prompt("How many students are there? "));


//loop through students
for (let iCount = 0; iCount < iNumStudents; iCount++)
{
    //get first and last names
    let sFirst = prompt("Enter f name: ");
    let sLast = prompt("Enter l name: ");

    //add first name
    //each name set is stored as position eg 0,0 and 0,1
    //first name for first student is 0,0
    //last name for first student is 0,1
    aStudents.push([sFirst, sLast]);
}

//display
for (let iCount = 0; iCount < iNumStudents; iCount++)
{
    console.log(aStudents[iCount]);
}
}