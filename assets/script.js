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
    let generatePassword = function () {}