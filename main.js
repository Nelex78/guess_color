/*

mastermind

*/


// variables
var minVal = 1;
var maxVal = 7;
var guessElems = '';
var guessResults = '';
var results = '<div></div>';
var resultsTrue = '<div class="color_black"></div>';
var resultsFalse = '<div class="color_white"></div>';
var userCombination = [];
var mainCombination = [];
var number;
var correct_number_correct_spot = 0;
var correct_number_wrong_spot = 0;


document.querySelector('.choice').className += ' disabled';
document.querySelector('#check').className += ' disabled';

// generate random combination
function generateCombination(min, max){
    mainCombination = [];
    
    while(mainCombination.length < 4){
        number = Math.floor(Math.random() * (max - min)) + min;

            mainCombination.push(number);             

    }

    return mainCombination;
         
}
//get value from buttons and create user combination
document.querySelectorAll('.choice button').forEach(function(element){
    
    element.addEventListener('click', function(event){
        
        correct_number_correct_spot = 0;
        correct_number_wrong_spot = 0;
        
        userCombination.push(parseInt(event.target.textContent, 10));
//        console.log(userCombination);

        guessElems += '<div class="guess' + ' ' + event.target.className + '">' + event.target.textContent + '</div>';
        document.querySelector('.guess_wrapper').innerHTML = guessElems;


        if(userCombination.length === 4){
            document.querySelector('.choice').className += ' disabled';
            document.querySelector('#check').classList.remove('disabled');
        }             
        
        return userCombination;

    });
});

// check colors

function checkCombination(){

    for(var i = 0; i < 4; i++){

      if(userCombination[i] === mainCombination[i]){

          correct_number_correct_spot++;

      } else if(userCombination.indexOf(mainCombination[i]) !== -1){

          correct_number_wrong_spot++;

      } 

    }
    
    
//    console.log(correct_number_wrong_spot + ' wrong spot');
//    console.log(correct_number_correct_spot + ' correct spot');
    
    // show results wrong/correct spot
    
    
    var quessNumber = 4 - (correct_number_correct_spot + correct_number_wrong_spot);
    
    for(var cs = 1; cs <= correct_number_correct_spot; cs++){
        document.querySelector('.result_wrapper').innerHTML += resultsTrue;
    }
    for(var ws = 1; ws <= correct_number_wrong_spot; ws++){
        document.querySelector('.result_wrapper').innerHTML += resultsFalse;
        results[i].className = 'color_white';
    }  
    for(var qn = 0; qn < quessNumber; qn++){
        document.querySelector('.result_wrapper').innerHTML += results;
    }

      
    if(correct_number_correct_spot === 4){
        
        document.querySelector('.choice').className += ' disabled';
        document.querySelector('#check').className += ' disabled';
        
    } else {
        
        document.querySelector('.choice').classList.remove('disabled');
        document.querySelector('#check').className += ' disabled';
        userCombination = [];
        correct_number_wrong_spot = 0;
        correct_number_correct_spot = 0;
        
    }
    
    if(userCombination.join('') === mainCombination.join('')){
        alert('Your guess is correct');
    }
    
    


} // END checkCombination function

// start game
function startGame(){
    minVal = 1;
    maxVal = 7;
    userCombination = [];
    mainCombination = [];
    correct_number_correct_spot = 0;
    correct_number_wrong_spot = 0;
    guessElems = '';
    document.querySelector('.guess_wrapper').innerHTML = '';
    document.querySelector('.result_wrapper').innerHTML = '';
    document.querySelector('.choice').classList.remove('disabled');
    console.log(generateCombination(minVal, maxVal));
}

document.querySelector("#new-game").addEventListener("click", startGame);
document.querySelector("#check").addEventListener("click", checkCombination);




