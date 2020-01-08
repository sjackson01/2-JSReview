
//Add variable
var messageAlert = "Var Message!";

//Add alert 
alert(messageAlert); 

//Current webpage and write command
document.write("<h1>Welcome to JavaScript Basics</h1>");

//Add alert
alert("Thanks for visiting.");

//Add string to log
console.log("Program complete");

*/

//Capture user input and store in a return value 
var visitorName = prompt('What is your name?');

//Add output to alert
alert(visitorName); 

*/

//Prompt visitor to enter their name and assign value to visitor
var visitor = prompt('What is your name?');
//Concatenate visitor and Hello 
var message = 'Hello ' + visitor;
//Complete string 
message += " ,we are very glad that you came to visit";
//Print combined message 
document.write(message);

//Access object.property "passphrase.length"
var passphrase ='Open Sesame';
document.write(passphrase.length);

//Convert string to lower case
document.write(passphrase.toLowerCase());

*/

//Simple shout app 
//Prompt user and assign input to stringToShout
var stringToShout = prompt("What should I shout");
//Convert stringToShout to uppercase and assign to var shout
var shout = stringToShout.toUpperCase();
//Concatenate shout
shout += "!!!";
//Return shout alert 
alert(shout);

*/

var firstQuestion = prompt("Enter an adjective!");

var firstAnswer = "The soup is too " + firstQuestion + "!"; 

document.write(firstAnswer);
