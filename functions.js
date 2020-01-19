/* JS Review Functions */
/* Comment out code to manipulate */ 


//Create random number function
function getRandomNumber(){
    var randomNumber = Math.floor( Math.random() +6) + 1;
    return randomNumber;
}    

alert( getRandomNumber());

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





