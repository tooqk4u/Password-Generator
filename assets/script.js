// 1. handle button click, you need to create a click event
// 2. display - window.prompt() to ask the user for length of the password
// 3. validate - only isNumbers and size of password,
// 4. prompt- window.confirm()  to ask user if they want uppercase, lowercase,numbers,s
// 5. Need to randomize confrimed choices
// Assignment Code

let finalPassword = "";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@#$%^&*()_";

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  finalPassword = "";
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start generate password function
    let generatePassword = function () {
// Generate password length
        let passwordLength = prompt("Choose a password length between 8-128");
console.log(passwordLength);
// Validate choice is in correct range and a number
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Please choose a number between 8-128");
// Recursive callback
  generatePassword();
} else {
// Ask user what characters they woud like password to have
  let isUpperCase = confirm("Click OK if you want uppercase letters.");
  let isLowerCase = confirm("Click OK if you want lowercase letters.");
  let isNumbers = confirm("Click OK if you want numbers.");
  let isSpecial = confirm("Click OK if you want special characters.");
  console.log(isUpperCase, isLowerCase, isNumbers, isSpecial);
// Validate a choice is made
    if (isUpperCase === false &&
    isLowerCase === false &&
    isNumbers === false &&
    isSpecial === false) {
    alert("You must chose at least one character for your password. Please try again");    
   }
  }


// Need loop  

// If statements to choose the options
    
if (isLowerCase == true && finalPassword.length < passwordLength) {
    let randomPickedLowerCase = Math.floor(
      Math.random() * lowerCase.length
    );
    let pickALowerCaseLetter = lowerCase.charAt(randomPickedLowerCase);
    finalPassword = finalPassword + pickALowerCaseLetter;
    console.log(finalPassword);
  }
  if (isNumbers == true && finalPassword.length < passwordLength) {
    let randomPickedNumber = Math.floor(Math.random() * numbers.length);
    let pickNumber = numbers.charAt(randomPickedNumber);
    finalPassword = finalPassword + pickNumber;
    console.log(finalPassword);
  }
  if (isSpecial == true && finalPassword.length < passwordLength) {
    let randomPickedSpecial = Math.floor(Math.random() * special.length);
    let pickedSpecial = special.charAt(randomPickedSpecial);
    finalPassword = finalPassword + pickedSpecial;
    console.log(finalPassword);
  }
}