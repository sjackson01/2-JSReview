/* JS Review Numbers */
/* Comment out code to manipulate */ 

//Quiz Exercise
 var answer = prompt('What programming language is the name of a gem?');

 //Test if the value is exactly the same 
 //Convert input string to uppercase 
 if(answer.toUpperCase === 'RUBY'){
    document.write("<p>That's right!</p>");
    }else{
    document.write('<p>That\'s wrong!'); 
}
*/ 

//Random Number Guessing Game
var randomNumber = Math.floor(Math.random() * 6) +1;
var guess = prompt('I am thinkng of a number between 1 and 6. What is it?');
//Convert string received from prompt into int
if(parseInt(guess) === randomNumber){
document.write('<p>You guessed the number!</p>');
}else{
    document.write('<p>Sorry, the number was ' + randomNumber + '</p>');
}