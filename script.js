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

var emojiCharacters = [
  '😀', '😬', '😁', '😂', '😃', '😄', '🤣', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤', '😓', '😭', '🤩', '😵', '😲', '🤯', '🤐', '😷', '🤕', '🤒', '🤮', '🤢', '🤧', '😴', '💤', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠', '👽', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🤲', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '🤘', '🤟', '👌', '👈', '👉', '👆', '👇', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '🤳', '💅', '👄', '👅', '👂', '👃', '👁', '👀', '🧠', '👤', '👥', '🗣', '👶', '🧒', '👦', '👧', '🧑', '👨', '🧔', '👱‍♂️', '👩', '👱‍♀️', '🧓', '👴', '👵', '👲', '👳‍♀️', '👳‍♂️', '🧕', '👮‍♀️', '👮‍♂️', '👩‍🚒', '👨‍🚒', '👷‍♀️', '👷‍♂️', '👩‍🏭', '👨‍🏭', '👩‍🔧', '👨‍🔧', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎤', '👨‍🎤', '👩‍🎨', '👨‍🎨', '👩‍🏫', '👨‍🏫', '👩‍🎓', '👨‍🎓', '👩‍💼', '👨‍💼', '👩‍💻', '👨‍💻', '👩‍🔬', '👨‍🔬', '👩‍🚀', '👨‍🚀', '👩‍⚕️', '👨‍⚕️', '👩‍⚖️', '👨‍⚖️', '👩‍✈️', '👨‍✈️', '💂‍♀️', '💂‍♂️', '🕵️‍♀️', '🕵️‍♂️', '🤶', '🎅', '👼', '👸', '🤴', '👰', '🤵‍♀️', '🤵', '🕴️‍♀️', '🕴', '🧙‍♀️', '🧙‍♂️', '🧝‍♀️', '🧝‍♂️', '🧚‍♀️', '🧚‍♂️', '🧞‍♀️', '🧞‍♂️', '🧜‍♀️', '🧜‍♂️', '🧛‍♀️', '🧛‍♂️', '🧟‍♀️', '🧟‍♂️', '🙇‍♀️', '🙇‍♂️', '💁‍♀️', '💁‍♂️', '🙅‍♀️', '🙅‍♂️', '🙆‍♀️', '🙆‍♂️', '🤷‍♀️', '🤷‍♂️', '🙋‍♀️', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🙎‍♀️', '🙎‍♂️', '🙍‍♀️', '🙍‍♂️', '💇‍♀️', '💇‍♂️', '💆‍♀️', '💆‍♂️', '🤰', '🤱', '🚶‍♀️', '🚶‍♂️', '🏃‍♀️', '🏃‍♂️', '💃', '🕺', '👯‍♀️', '👯‍♂️', '👫', '👬', '👭', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👦', '👩‍👧', '👩‍👦‍👦', '👩‍👧‍👧', '👨‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👦‍👦', '👨‍👧‍👧', '👚', '👕', '🧥', '👖', '👔', '👗', '👙', '👘', '💄', '💋', '👣', '🧦', '👠', '👡', '👢', '👞', '👟', '🧢', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '🧣', '🧤', '💍', '🌂'
];


//Prompts Logic  => To understand this logic please go to README.MD
// Function to prompt user for password options  
function getPasswordOptions() {
  //This is the prompt for the length of the password
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters");

  //These are the prompt for character types
  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  var includeEmoji = confirm("Include emoji characters?")

  //This is for validating the input and ensure at least one character type is selected.  => To understand this logic please go to README.MD------------------------
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  else if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial && !includeEmoji) {
    alert("At least one character type must be selected.");
    return;
  } else { };

  //I will put the returns from the user into an object, the key and its value will be the vars that I created before.
  return {
    length: passwordLength,
    includeLowercase: includeLowerCase,
    includeUppercase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
    includeEmoji: includeEmoji
  };
}


//Getting Random Logic  => To understand this logic please go to README.MD------------------------------------------------------------------------------------------
// Function for getting a random element from an array. 
// The logic is try to generate with the function a valid random index for the array passed as an argument and then returns the element corresponding to that index.
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


//Password Generator Logic.=> To understand this logic please go to README.MD---------------------------------------------------------------------------------------
// Function to generate password with user input. 
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return; // return if user input is invalid
  } else { }

  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  if (options.includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.includeEmoji) {
    possibleCharacters = possibleCharacters.concat(emojiCharacters);
    guaranteedCharacters.push(getRandom(emojiCharacters));
  }

  // Shuffle the guaranteed characters to ensure they appear in a random order. 
  var remainingLength = options.length - guaranteedCharacters.length;
  for (var i = 0; i < remainingLength; i++) {
    var randomCharacter = getRandom(possibleCharacters);
    guaranteedCharacters.push(randomCharacter);
  }

  // Return the generated password as a string
  return guaranteedCharacters.join('');

  // console.log("Button is working OK!")//Just for testing in console that the button is working.
  // return "Your password will be printed here" //Provisional message
}


// Code given done---------------------------------------------------------------------------.

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