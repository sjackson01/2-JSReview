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

*/

//Comparison Operators (both and &&) (one or ||)
//Quiz Exercise

//Add one to the var for each question answered correctly 
var correct = 0;

var answer1 = prompt('Name a programming language that\'s also a gem?');
//Convert answer to upper case 
//Allows student to put any case answer 
if(answer1.toUpperCase() === 'RUBY');{
    correct += 1; 
}

var answer2 = prompt('Name a programming language that\'s also a snake?');
//Convert answer to upper case 
//Allows student to put any case answer 
if(answer2.toUpperCase() === 'PYTHON');{
    correct += 1; 
}

var answer3 = prompt('Name the language this is also used to style webpages?');
//Convert answer to upper case 
//Allows student to put any case answer 
if(answer3.toUpperCase() === 'CSS');{
    correct += 1; 
}

var answer4 = prompt('Name what language do you use to give structure to a website?');
//Convert answer to upper case 
//Allows student to put any case answer 
if(answer4.toUpperCase() === 'HTML');{
    correct += 1; 
}

var answer4 = prompt('Name what language do you use add interactivity to a webpage?');
//Convert answer to upper case 
//Allows student to put any case answer 
if(answer4.toUpperCase() === 'JavaScript');{
    correct += 1; 
}

//Output results
document.write("You got " + correct + " out of 5 questions correct. </p>");

//Output rank
if(correct === 5){
    document.write("<p><strong>You earned a gold crown!</strong></p>");
}else if(correct >= 3){
    document.write("<p><strong>You earned a silver crown.</strong></p>");
}else if (correct >= 1){
    document.write("<p><strong>You earned a bronze crown.</strong></p>");
}else{
    document.write("<p><strong>You didn't earn any prizes</strong></p>");
}