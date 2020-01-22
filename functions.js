/* JS Review Functions */
/* Comment out code to manipulate */ 

/*

//Create random number function
//Add parameter that sets upper limit for random number
function getRandomNumber( upper ){
    var randomNumber = Math.floor( Math.random() * upper) + 1;
    return randomNumber;
}    

alert(getRandomNumber(6));

//Validate form field
function isEmailEmpty(){
    var field = document.getElementById('email');
    if (field.value === ''){
        return true;
    }else{
        return false;
    }
}

//Display message if field empty 
var fieldTest = isEmailEmpty();
if(fieldTest === true){
    alert('Please provide your email address');
}

*/

//Simple retangle function
function getArea(width, length, unit){
    var area = width * length;
    return area + " " + unit; 
} 

document.write(getArea(10,20, 'sq ft'));

*/

//Generate number between two values
function getRandomNumber(lower, upper){
    if(isNaN(lower) || isNaN(upper)) {
        throw new Error('One of the values is not a number');
    }else{
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
}

console.log(getRandomNumber(1, 100));

alert(getRandomNumber(nine, 6));