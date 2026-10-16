//Rebekah Kinghorn
//bus programming
//practice OOP!
//review from python
//big brain



//CHAPTER 18 OOP----------------------------------



//a simple example with static values and a print stmt
class Employee 
{
    employeeId = '12345';
    firstName = 'Jamar';
    lastName = "Smith";
    hourlyWage = '15.00';


    // method
    getFullName()
    {
        return this.firstName + this.lastName;
    }


    //method
    checkWage()
    {
        let bReturn;

        if (fWage >= 15 && fWage <= 30)
        {
            this.hourlyWage = fWage;
            bReturn = true;
        }
        else
        {
            this.hourlyWage = 0;
            bReturn = false;
        }

        return bReturn;
    }
}


function doIt()
{
    let oEmp = new Employee();


    console.log(oEmp.firstName + "'s hourly wage is " + oEmp.hourlyWage)

}

doIt()





//a more in-depth example with more methods

//make Student class
class Student 
{
    studentID;
    firstName;
    lastName;
    gpa;

    //return fullname 
    getFullName()
    {
        return this.firstName + this.lastName;
    }

    //check if gpa is within limits
    //if so, record the inputted gpa and return true
    //the parameter you can put in for evaluation is fGpa
    checkGpa(fGpa)
    {
        let bReturn;

        if (fGpa >= 1.00 && fGpa <= 4.00)
        {
            this.gpa = fGpa;
            bReturn = true;
        }
        else
        {
            this.gpa = 0;
            bReturn = false;
        }

        return bReturn;
    }
}

function doStudent()
{
    let oStud1 = new Student();
    let oStud2 = new Student();
    let bCheckgpa;

    oStud1.firstName = "John";
    oStud1.lastName = "Smith";

    oStud2.firstName = "Jane";
    oStud2.lastName = "Doe";

    //put in an fGpa to the checkGpa method and get a true/false returned value
    bCheckgpa = oStud1.checkGpa(6);
    if (bCheckgpa === false)
    {
        console.log("This gpa is not valid: " + oStud1.gpa)
    }

    //another try at it!
    bCheckgpa = oStud2.checkGpa(3);
    if (bCheckgpa === false)
    {
        console.log("This gpa is not valid: " + oStud2.gpa)
    }


}

//this will both create the students AND check the gpas I inputted
doStudent()
//bc we haven't yet used custom constructors and instead use doStudent() to make the objects, _
//there are no student objects born until we run doStudent()!





//custom constructor practice
//but this example still uses static value for the pet
class Pet 
{
    constructor()
    {
        this.name = "Johnny";
        this.type = "cat";
        this.color = "black";
    }

    getDetails()
    {
        return this.name + " is a " + this.color + " " + this.type + ".";
    }
}


//this function will create a pet
//it will also log the result of the method: getDetails
function createPets()
{
    let oPet1 = new Pet();
    console.log(oPet1.getDetails())
}

createPets()





//more custom constructor practice_
//but with more dynamic values!
class MorePets
{
    constructor(sName, sBreed, sType)
    {
        this.name = sName;
        this.breed = sBreed;
        this.type = sType;
    }

    getDetails()
    {
        return this.name + " is a " + this.type + " " + this.breed + ". Yay!";
    }
}

function nextTry()
{
    let newPet1 = new MorePets("Adam", "Dog", "Fluffy")
    let newPet2 = new MorePets("Moses", "Cat", "Hairless")

    console.log(newPet1.getDetails() + "\n" + newPet2.getDetails())

}

//call nextTry to make the pets and call their methods
nextTry()