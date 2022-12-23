// Assignment code here
function generatePassword() {
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChars = [];


  // Receive inputs from user via prompts

  numberOfChars = prompt("Please specify how many characters (between 8 to 128) you want for your password.");
  if (numberOfChars < 8 || numberOfChars > 128) {
    return "Please choose a password that is between 8 and 128 characters.";
  } else if (isNaN(numberOfChars)) {
    numberOfChars = prompt("Please put in a valid number.");
  }
  else {
    alert("Your password will be " + numberOfChars + " characters long.");
  }

  hasLowercase = confirm("Do you want to include lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will include lowercase characters.");
  }
  else {
    alert("Your password will not include lowercase characters.");
  }

  hasUppercase = confirm("Do you want to include uppercase characters?");
  if (hasUppercase) {
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will not include uppercase characters.");
  }

  hasNumbers = confirm("Do you want to include numeric characters?");
  if (hasNumbers) {
    alert("Your password will include numeric characters.");
  }
  else {
    alert("Your password will NOT include numeric characters.");
  }

  hasSpecial = confirm("Do you want to include special characters?");
  if (hasSpecial) {
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will not include special characters.");
  }

  if (hasNumbers === false && hasLowercase === false && hasUppercase === false && hasSpecial === false) {
    return "Please use at least one valid character in your password.";
  };

  if (hasNumbers) {
    possibleChars = possibleChars.concat(numericChars);
  }
  if (hasLowercase) {
    possibleChars = possibleChars.concat(lowercaseChars);
  }
  if (hasUppercase) {
    possibleChars = possibleChars.concat(uppercaseChars);
  }
  if (hasSpecial) {
    possibleChars = possibleChars.concat(specialChars);
  }

  let generatedPassword = " "
  for (let i = 0; i < numberOfChars; i++) {
    let randomNumber = [Math.floor(Math.random() * possibleChars.length)];
    generatedPassword = generatedPassword + possibleChars[randomNumber];
  }
  return generatedPassword;
};

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
