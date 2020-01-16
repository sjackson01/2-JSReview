/* JS Review Numbers */
/* Comment out code to manipulate */ 

/*

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
//Defualt guess false 
var correctGuess = false;

//Generate randome number
var randomNumber = Math.floor(Math.random() * 6) +1;

//Promt user to guess a number between 1 - 6
var guess = prompt('I am thinkng of a number between 1 and 6. What is it?');

//Convert string received from prompt into int
//Check if guess is less/greater than random number
if(parseInt(guess) === randomNumber){
correctGuess = true; 
    }else if(parseInt(guess) < randomNumber ) {
        var guessMore = prompt('Try again, the number is higher than ' + guess);
        if(parseInt(guessMore) === randomNumber){
            correctGuess = true; 
        }
    }else if( parseInt(guess) > randomNumber) {
        var guessLess = prompt('Try again, the number is lower than ' + guess);
        if(parseInt(guessLess) === randomNumber){
            correctGuess = true;
        }
    }

 //Display answer    
if(correctGuess === true){
    document.write('<p>You guessed the number!</p>');
    }else{
        document.write('<p>Sorry, the number was ' + randomNumber + '.</p>');
    }

