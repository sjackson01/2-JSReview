
/* JS Review Numbers */
/* Comment out code to manipulate */ 

//Calculate how many seconds are in a day
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

document.write('There are ' + secondsPerDay + ' per in a day.');

//Convert string values to int values 
var HTMLBadges = prompt('How many HTML badges do you have?');
var CSSBadges = prompt('How many CSS badges do you have?');
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges!');

*/

//Convert string values to float
var string1 = '2.14'
var string2 = '3.15'
var total = parseFloat(string1) + parseFloat(string2);

document.write(total);s