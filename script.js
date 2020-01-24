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
    
    var passwordLength = prompt("Enter the length for your new Password. It was to be more than 8 charcters but less than 128 characters.");

    var hasSpecialChars = confirm("Do you want to include to Special Characters?");

    var hasUpperCase = confirm("Do you want to include to Upper Case Characters?");

    var hasLowerCase = confirm("Do you want to include to Lower Case Characters?");

    var hasNumbers = confirm("Do you want to include to Numeric Characters?");

    //Min count for Special, upper, lower and numeric Chars.
    var minCount = 0;


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


    if(hasSpecialChars === true)
    {
        var minSChar = functionArray[0]();
        minCount++;
    }

    if (hasUpperCase === true) {

        var minUpCase = functionArray[1]();
        minCount++;
    }


    if (hasLowerCase === true) {

        var minLwCase = functionArray[2]();
        minCount++;
    }

    if (hasNumbers === true) {

        var minNuChar = functionArray[3]();
        minCount++;
    }


    for(i = 0; i < (passwordLength.length - minCount); i++)
    {



    }


//Saved first draft of Random character functions
    // function getSpecialChars() {

    //     return SpecialCharArry[Math.floor(Math.random() * SpecialCharArry.length)];
    // }

    // function getUpperChars() {
        
    //     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    // }

    // function getLowerChars() {

    //     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    // }

    // function getNumericChars() {

    //     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    // }

}