// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  document.getElementById("password").innerHTML = passwordText;
}

function generatePassword() {
  //Write all your code here.
  var lengthChoice = 0;
  //arrays for the different character types. 
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  var totalArray = [];
  var password = [];
  console.log(totalArray.length);
  //booleans to show whether each character type should be included. 
  var lowerChoice = false; 
  var upperChoice = false; 
  var numberChoice = false; 
  var specialChoice = false; 
  var rand;

  //length prompt -> number b/w 8 and 128
  lengthChoice = prompt("How long would you like your password to be? Enter a number of characters between 8 and 128.");

  //Input check, if the user chooses and invalid number ask for a new input until the one they give is valid
  while ((lengthChoice < 8) || (lengthChoice > 128)) {
    lengthChoice = prompt("Invalid input. How long would you like your password to be? Enter a number of characters between 8 and 128.");
  }

  //confirm for lower, upper, nums, special, concatenate the corresponding array if the user does want that char type

  lowerChoice = confirm("Press OK to include lowercase letters in your password, press Cancel to exclude them.");
  if (lowerChoice == true) {
    totalArray = totalArray.concat(lowerArray);
  }

  upperChoice = confirm("Press OK to include uppercase letters in your password, press Cancel to exclude them.");
  if (upperChoice == true) {
    totalArray = totalArray.concat(upperArray);
  }

  numberChoice = confirm("Press OK to include numbers in your password, press Cancel to exclude them.");
  if (numberChoice == true) {
    totalArray = totalArray.concat(numberArray);
  }

  specialChoice = confirm("Press OK to include special characters in your password, press Cancel to exclude them.");
  if (specialChoice == true) {
    totalArray = totalArray.concat(specialArray);
  }
  
//In the case that the user picks none of the character types, break and invite to try again
if (!(lowerChoice || upperChoice || numberChoice || specialChoice)) {
  window.alert("You must choose some characters to be included in your password. Try again!");
}

  //for loop to traverse the entire length of the password
  for(var i = 0; i<lengthChoice; i++){
    //generate a random number to take a random character from totalArray
    min = Math.ceil(0);
    max = Math.floor(totalArray.length);
    rand = Math.floor(Math.random() * (max - min) + min);
    password[i] = totalArray[rand];
  }
    
  //convert to a string w/o commas instead of a char array
  var output = password.join("");
  // document.getElementById("password").innerHTML = output;
  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

