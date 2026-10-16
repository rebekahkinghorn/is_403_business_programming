/*
type
In the HTML script tag, write the code that prompts the user to enter an employee's name, 
the total number of hours worked for the week, the hourly wage, the tax rate (i.e., 3.2% includes federal, 
state, and local), and FICA (i.e., 7.65%). Store those values to variables.

In the wages.js file, write a function called calcPay that receives as parameters the hours worked, 
hourly wage, tax rate, and FICA rate.

This function will calculate the weekly take-home pay by multiplying the hours worked in the week by the 
hourly wage and rounding to the nearest 10th of a cent. For example, 30.679 would be 30.68. HINT: 
You can use the toFixed() function.

Next, the function should reduce the gross pay amount by the tax rate and the FICA percentage and return 
the rounded take-home pay to the main HTML program. The HTML program should then display the employee's name 
and the returned take-home pay.

Formulas:

        Hours Per Week = 40
        Hourly Wage = $10
        Gross Pay = $400
        Taxes at (3.2%) = $12.80 (Gross Pay * Taxes of .032)
        FICA (7.65%) = $30.60 (Gross Pay * FICA of .0765)
        Take Home Pay = Gross Pay - Taxes - FICA            
        
NOTE: You can try other values for input (i.e., 15 for wage).

When running the HTML file, it should display:

        John Doe worked 40 hours in the week at $10 an hour and took home $356.60.       
*/

//declar vars
let sEmpName;
let fHoursWorked;
let fHourlyWage;
let fTaxRate;
let fFICA; 



// get vars
sEmpName = prompt("What is the employee name? ");
fHoursWorked = parseInt(prompt("Hours worked? "));
fHourlyWage = parseInt(prompt("What is the hourly wage? "));
fTaxRate = parseInt(prompt("What is the tax rate? "));
fFICA = parseInt(prompt("What is the FICA? "));


//write function
function calcPay(iHoursWorked, iHourlyWage, iTaxRate, iFICA)
{
    //def vars
    let fGross;
    let fCalcTaxes;
    let fCalcFICA;
    let fTakeHome;
    
    fGross = fHoursWorked * fHourlyWage;
    fGross.toFixed(2);
    
    //take out taxes... :(
    fCalcTaxes = (fGross * (fTaxRate/100)).toFixed(2);
    fCalcFICA = (fGross * (fFICA/100)).toFixed(2);
    fTakeHome = fGross - fCalcTaxes - fCalcFICA;

    return fTakeHome;
}

fTakeHome = calcPay(fHoursWorked, fHourlyWage, fTaxRate, fFICA)

alert(`${sEmpName} worked ${fHoursWorked} in the week at $${fHourlyWage} and took home ${fTakeHome}.`)

//This function will calculate the weekly take-home pay by multiplying the hours worked in the week by the 
// hourly wage and rounding to the nearest 10th of a cent. For example, 30.679 would be 30.68. HINT: 
// You can use the toFixed() function.
