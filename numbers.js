
/* JS Review Numbers */
/* Comment out code to manipulate */ 

/*

// INTRO

//Calculate how many seconds are in a day
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

document.write('There are ' + secondsPerDay + ' per in a day.');

// CONVERSIONS 

//Convert string values to int values 
var HTMLBadges = prompt('How many HTML badges do you have?');
var CSSBadges = prompt('How many CSS badges do you have?');
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges!');

//Convert string values to float
var string1 = '2.14'
var string2 = '3.15'
var total = parseFloat(string1) + parseFloat(string2);

document.write(total);

// COUNTERS

//Insert numbers into strings using the plus operator 
var questions = 3;
//Countdown using the questions left var
var questionsLeft = ' [' + questions + ' questions left]';
var ajective = prompt('Please type an ajective' + questionsLeft);

//After each prompt countdown by one 
questions -= 1;
//Re-Build the string again
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb' + questionsLeft);
//After each prompty countdown by one 
questions -= 1; 
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type noun' + questionsLeft);

alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + ajective; 
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);



// MATH OBJECT

//Use built in math object methods
document.write(Math.round());

//Return random number between 0 - 1
document.write(Math.random());

//Convert Math.random to int rounded down
document.write(Math.floor(Math.random() * 6));

//Create random die roll 
var dieRoll = Math.floor(Math.random() * 6) +1;
document.write(dieRoll);

*/

// RANDOM NUMBER BETWEEN TWO NUMBERS GENERATOR

//Collect lower number
var input1 = prompt("Please type a starting number");
//Convert string to int 
var bottomNumber = parseInt(input1);

//Collect upper number
var input = prompt("Please type a number");
//Convert string input into int
var topNumber = parseInt(input);

//Generate randome number based on the upper/lower limit 
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
//Generate text output with randomNumber and topNumber
var message = "<p>" 
+ randomNumber + " is a number between " 
+ bottomNumber + " and " 
+ topNumber + ".</p>";
//Write document
document.write(message);