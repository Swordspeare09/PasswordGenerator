// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of Special Characters
const SpecialCharArry = "!#$%&+-/~|{)^(}[";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Added Definition for generatePassword function
function generatePassword(){
    

    //These are the prompts and confrims that the user will engage with. 
    var passwordLength = prompt("Enter the length for your new Password. It was to be more than 8 charcters but less than 128 characters.");

    var hasSpecialChars = confirm("Do you want to include to Special Characters?");

    var hasUpperCase = confirm("Do you want to include to Upper Case Characters?");

    var hasLowerCase = confirm("Do you want to include to Lower Case Characters?");

    var hasNumbers = confirm("Do you want to include to Numeric Characters?");

    //Min count for Special, upper, lower and numeric Chars.
    var minCount = 0;

    //Intialized empty Min Character Variables as strings for ease of addition

    var minSChar = "";
    var minUpCase = "";
    var minLwCase = "";
    var minNuChar = "";

    //Built array of functions to hold all the random generated charcters
    var functionArray = [
        function getSpecialChars() {

            return SpecialCharArry[Math.floor(Math.random() * SpecialCharArry.length)];
        },

        function getUpperChars() {

            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },

        function getLowerChars() {

            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },

        function getNumericChars() {

            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        }


    ]

    //Checks for what the user chose in the prompts
    if(hasSpecialChars === true)
    {
        minSChar = functionArray[0]();
        minCount++;
    }

    if (hasUpperCase === true) {

        minUpCase = functionArray[1]();
        minCount++;
    }


    if (hasLowerCase === true) {

        minLwCase = functionArray[2]();
        minCount++;
    }

    if (hasNumbers === true) {

        minNuChar = functionArray[3]();
        minCount++;
    }


    //Empty Initalized string variable
    var randPass ="";

    //Loop for getting random characters
    for (i = 0; i < (parseInt(passwordLength) - minCount); i++)
    {
        var randPick = Math.floor(Math.random() * 4)

        randPass += functionArray[randPick]();
    }

    //This ensures at least one of the users chosen charcters from the prompts are added to the password
    randPass += minLwCase;
    randPass += minUpCase;
    randPass += minSChar;
    randPass += minNuChar;

    return randPass;

}