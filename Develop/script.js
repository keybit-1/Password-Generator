// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character type arrays
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password based on user criteria
function generatePassword() {
  var passwordLength = getPasswordLength();
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecialChars = confirm("Do you want to include special characters?");

  var selectedCharTypes = getSelectedCharTypes(includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

  while (selectedCharTypes.length === 0) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Do you want to include lowercase letters?");
    includeUppercase = confirm("Do you want to include uppercase letters?");
    includeNumeric = confirm("Do you want to include numbers?");
    includeSpecialChars = confirm("Do you want to include special characters?");
    selectedCharTypes = getSelectedCharTypes(includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomCharType = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    var randomChar = getRandomCharacter(randomCharType);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get password length from the user
function getPasswordLength() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length! Please enter a number between 8 and 128:"));
  }

  return length;
}

// Get selected character types based on user's choices
function getSelectedCharTypes(includeLowercase, includeUppercase, includeNumeric, includeSpecialChars) {
  var selectedCharTypes = [];

  if (includeLowercase) {
    selectedCharTypes.push("lowercase");
  }
  if (includeUppercase) {
    selectedCharTypes.push("uppercase");
  }
  if (includeNumeric) {
    selectedCharTypes.push("numeric");
  }
  if (includeSpecialChars) {
    selectedCharTypes.push("special");
  }

  return selectedCharTypes;
}

// Get a random character from the specified character type
function getRandomCharacter(charType) {
  switch (charType) {
    case "lowercase":
      return lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    case "uppercase":
      return uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    case "numeric":
      return numericChars[Math.floor(Math.random() * numericChars.length)];
    case "special":
      return specialChars[Math.floor(Math.random() * specialChars.length)];
    default:
      return "";
  }
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

