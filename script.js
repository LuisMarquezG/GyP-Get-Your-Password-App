// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
//add to readme the explanation of this logic => create vars which are containing prompts
function getPasswordOptions() {
  //This is the prompt for the length of the password
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters");
  //These are the prompt for character types
  //add to readme 
  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include lowercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // console.log(includeLowerCase)
  //If the previous vars works ok, try adding emojis

  //This is for validating the input and ensure at least one character type is selected
  if (passwordLength => 8 && passwordLength <= 128) {
    alert("Password length must be between 8 and 128 characters.");
    return; // what?
  } else if (includeLowerCase || includeUpperCase || includeNumeric || includeSpecial) {
    alert("At least one character type must be selected.")
    return; // try leave just return;
  }

  //I will put the returns fron the user into an object, the key and its value will be the vars that I created before.
  return {
    length: passwordLength,
    includeLowercase: includeLowerCase,
    includeUppercase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  }







}

// Function for getting a random element from an array*
function getRandom(arr) {

}

// Function to generate password with user input*
function generatePassword() {
  console.log("Button is working OK!")//Just for testing in console that the button is working.





  return "Your password will be printed here" //Provisional message

}










// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);