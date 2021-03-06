//store the types of characters to put in password
var possilbeCharacters = [];

//array having one of each picked character
var guaranteedCharacters = [];

//function to prompt password options when ready
function getPasswordOptions() {
  //variable to store length from user input
  var length = parseInt(
    prompt(" How many characters do you want your password to be? ")
  );

  //condition to check the user chose a number for password length.

  if (isNaN(length) === true) {
    alert("password length must be a number chosen");

    return;
  }

  // ensuring password is ATLEAST 8 chars in length
  if (length < 8) {
    alert(" Password lenght must be AT LEAST 8 characters ");
    return;
  }

  //ensuring characters are NO MORE than 128 charaters in length
  if (length > 128) {
    alert("password length MUST BE less than 129 characters");
    return;
  }

  //variable ensuring the use of special chars
  var hasSpecialCharacters = confirm(
    "OK confirms inclusion of special character(s) in password"
  );

  //variable ensuring the use of numbers in chars
  var hasNumberCharacters = confirm(
    " OK confirms inclusion of numbers in password"
  );

  //variable ensuring the use of uperrcase letters in chars
  var hasUpperCaseCharacters = confirm(
    " OK confirms inclusion of uppercase characters in password"
  );

  //variable ensuring the use of Lowercase letters in chars
  var hasLowerCaseCharacters = confirm(
    " OK confirms inclusion of lowercase characters in password"
  );

  //checking if user has included specific characters

  if (
    hasSpecialCharacters === false &&
    hasNumberCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasLowerCaseCharacters === false
  ) {
    alert(" MUST SELECT AT LEAST ONE CHARACTER TYPE ");
    return;
  }

  //Storing user input and selection

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumberCharacters: hasNumberCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
  };
  return passwordOptions;
}

//Function for Randomizing Arrays
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// generating the password itself
function generatePassword() {
  var options = getPasswordOptions();
  //store password as it comes together
  var result = [];

  //condition that adds array for special characters in
  //push new random spec char to guaranteed char
  addAvailableCharacters(options.hasSpecialCharacters, specialCharacters);

  //condition that adds array for numbers
  // adds a random num char to guaranteed chars
  addAvailableCharacters(options.hasNumberCharacters, numberCharacters);

  //condition that adds array for lowercase
  // adds a random lowercase char to guaranteed chars
  addAvailableCharacters(options.hasLowerCaseCharacters, lowerCaseCharacters);

  //condition that adds array for uppercase
  // adds a random uppercase char to guaranteed chars
  addAvailableCharacters(options.hasUpperCaseCharacters, upperCaseCharacters);

  //forloop for password length from the options randomly selecting
  for (var i = 0; i < options.length; i++) {
    var possilbeCharacter = getRandom(possilbeCharacters);

    result.push(possilbeCharacter);
  }

  //add atleast one guaranteed character
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //turn the results into a string and write the password
  return result.join("");
}
function addAvailableCharacters(userSelected, characterArray) {
  if (userSelected) {
    possilbeCharacters = possilbeCharacters.concat(characterArray);
    guaranteedCharacters.push(getRandom(characterArray));
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
