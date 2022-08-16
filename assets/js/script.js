// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword () {


  //array for characters to generate password
  var symbols = [ "!", "#", "$", "%", "&", "@", "*"];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var passwordGeneration = [];
  var passwordFinal = [];

  //prompt for password length
    var length = parseInt(
      window.prompt ("How long would you like your password?")
      );

    if (length < 8 || length > 128) {
      alert ("Password length must be a minimum of 8 characters and maximum of 128 characters.");
      return null;
    }
    
  //var to confirm special characters, numbers, upperCase, lowerCase
    var wantUpperCase = confirm ("Will your password include upper case letters?");
    var wantLowerCase = confirm ("Will your password include lower case letters?");
    var wantSymbols = confirm ("Will your password include special characters (symbols)?");
    var wantNumbers = confirm ("Will your password include numbers?");

  //if statement if none of the criteria has been selected
  if (
    wantUpperCase === false &&
    wantLowerCase === false &&
    wantSymbols === false &&
    wantNumbers === false 
    ) {
      alert("To create password please select at least one character type");
      return null;
    };
//if statement to include the different types of special characters to be pushed to the final password
  if (wantUpperCase){
    passwordGeneration = passwordGeneration.concat(upperCase);
      
    }
    
   if (wantLowerCase){
    passwordGeneration = passwordGeneration.concat(lowerCase);
    
    }
    
    if (wantSymbols){
        passwordGeneration = passwordGeneration.concat(symbols);
    
    }
    
    if (wantNumbers) {
        passwordGeneration = passwordGeneration.concat(numbers);
      console.log(passwordGeneration)
    }
    
    for (var i = 0; i < length ; i++) {
          
        passwordFinal.push (passwordGeneration[Math.floor(Math.random() * passwordGeneration.length)]); 
      }

      return passwordFinal.join("") ;
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// TO DO: GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page