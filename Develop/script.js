// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  console.log(totalArray.length);
  //booleans to show whether each character type should be included. 
  var lowerChoice = false; 
  var upperChoice = false; 
  var numberChoice = false; 
  var specialChoice = false; 

  //Pseudocode

  //Present user series of prompts/confirms
    // length prompt - var lengthChoice
      // let lengthChoice = prompt("What length?");
    // lower confirm - var lowerChoice
    // upper confirm - var upperChoice
    // nums confirm - var numsChoice
    // special confirm -var specialChoice

  //length prompt -> number b/w 8 and 128
    // if/conditional to check if length b/w 8 and 128 
      // if true: continue to confirms
      // if false: send back to length prompt

  lengthChoice = prompt("How long would you like your password to be? Enter a number of characters between 8 and 128.");

  while ((lengthChoice < 8) || (lengthChoice > 128)) {
    lengthChoice = prompt("Invalid input. How long would you like your password to be? Enter a number of characters between 8 and 128.");
  }

  //confirm for lower, upper, nums, special
  
  //Input Validation - correct nums, at least 1 char chosen
    // if/conditional check using || 
      //if true: continue to generate
      //if false: ask confirm

  console.log(lowerChoice);
  lowerChoice = confirm("Press OK to include lowercase letters in your password, press Cancel to exclude them.");
  console.log(lowerChoice);
  if (lowerChoice == true) {
    totalArray = totalArray.concat(lowerArray);
  }

  console.log(upperChoice);
  upperChoice = confirm("Press OK to include uppercase letters in your password, press Cancel to exclude them.");
  console.log(upperChoice);
  if (upperChoice == true) {
    totalArray = totalArray.concat(upperArray);
  }

  console.log(numberChoice);
  numberChoice = confirm("Press OK to include numbers in your password, press Cancel to exclude them.");
  console.log(numberChoice);
  if (numberChoice == true) {
    totalArray = totalArray.concat(numberArray);
  }

  console.log(specialChoice);
  specialChoice = confirm("Press OK to include special characters in your password, press Cancel to exclude them.");
  console.log(specialChoice);
  if (specialChoice == true) {
    totalArray = totalArray.concat(specialArray);
  }
  
  //Randomly generate password string from choices
    //arrays of lower, upper, nums, special
    //array of all chosen characters, concat?
    //choose from the totality array number of chars required (equal to length prompt)
      //for loop, run based on length prompt
      //Math.random() choose index position from array
      //grab from chosen array, add to password array (push?)
      //convert password array to string
      //return string

  //display password in textbox (write password to the page)
}

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

