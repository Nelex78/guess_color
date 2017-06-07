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
var tempCombination = [];
var number;
var correct_number_correct_spot = 0;
var correct_number_wrong_spot = 0;


document.querySelector('.choice').className += ' disabled';
document.querySelector('#check').className += ' disabled';

// generate random combination
function generateCombination(min, max){
    tempCombination = [];
    
    while(tempCombination.length < 4){
        number = Math.floor(Math.random() * (max - min)) + min;

            tempCombination.push(number);             

    }

    return tempCombination;
}
//get value from buttons and create user combination
document.querySelectorAll('.choice button').forEach(function(element){
    
    element.addEventListener('click', function(event){
        
        correct_number_correct_spot = 0;
        correct_number_wrong_spot = 0;
        
        userCombination.push(parseInt(event.target.textContent, 10));
        console.log(userCombination);

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
  
  if(userCombination[i] === tempCombination[i]){
      
        document.querySelector('.result_wrapper').innerHTML += resultsTrue;
        correct_number_correct_spot++;
      
  } else if(userCombination[i] !== tempCombination[i] && userCombination.includes(tempCombination[i]) === true){
 
        document.querySelector('.result_wrapper').innerHTML += resultsFalse;
        results[i].className = 'color_white';
        correct_number_wrong_spot++;

  } else if(userCombination[i] !== tempCombination[i] && userCombination.includes(tempCombination[i]) === false){
      
        document.querySelector('.result_wrapper').innerHTML += results;
      
  }
  
}

    console.log(correct_number_wrong_spot + ' wrong spot');
    console.log(correct_number_correct_spot + ' correct spot');
    
    if(correct_number_correct_spot === 4){
        
        document.querySelector('.choice').className += ' disabled';
        document.querySelector('#check').className += ' disabled';
        
    } else {
        
        document.querySelector('.choice').classList.remove('disabled');
//        document.querySelector('#check').classList.remove('disabled');
        document.querySelector('#check').className += ' disabled';
        userCombination = [];
        correct_number_wrong_spot = 0;
        correct_number_correct_spot = 0;
        
    }
    


}

// reset game
function resetGame(){
    minVal = 1;
    maxVal = 7;
    userCombination = [];
    tempCombination = [];
    correct_number_correct_spot = 0;
    correct_number_wrong_spot = 0;
    guessElems = '';
    document.querySelector('.guess_wrapper').innerHTML = '';
    document.querySelector('.result_wrapper').innerHTML = '';
    document.querySelector('.choice').classList.remove('disabled');
    
}

// start game
function startGame(){
    
    resetGame();
    console.log(generateCombination(minVal, maxVal));


}
document.querySelector("#new-game").addEventListener("click", startGame);
document.querySelector("#check").addEventListener("click", checkCombination);




