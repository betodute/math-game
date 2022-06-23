$(document).ready(function() { 

  $("#userForm").on('submit', function(event) {
    event.preventDefault();
    checkAnswer();
  });

  $('.start-game').on('click', function() {
    $('.game-over').css("display", "none");
    $('.try-again').css("display", "none");
    startGame();
  })

  problemLvlOne();
})

// Application Starts

var answer = 0;
var timeRemaining = 10;
var gameActive = 0;
var score = 0;

var checkAnswer = () => {
  var userAnswer = parseInt($('#userInput').val());
  $('#userInput').val('');
  if (answer === userAnswer ) {
    $('.try-again').css("display", "none");
    timeRemaining += 2;
    addScore();
    problemLvlOne();
  } else {
    tryAgain();
  };
};

var startGame = () => {
  timeRemaining = 10;
  gameActive = 1;
  // I know the following function name is too long but it's worth 3000 cute points!
  timerControlStation()
} 

var timerControlStation = () => {
    var startTimer = setInterval(function(){
    timeRemaining -= 1;
    $('.timer').html(timeRemaining);
    if (timeRemaining <= 0) {
      gameOver();
      clearInterval(startTimer);
    }
    }, 1000)
};

var createProblem = (maxNum) => {
  var firstNum = randomNum(maxNum);
  var secondNum = randomNum(maxNum);
  answer = firstNum + secondNum;
  return `${firstNum} + ${secondNum} =`
};

var addScore = () => {
  score += 1;
  $('.score').html(score);
}


var tryAgain = function() {
  $('.try-again').css("display", "block");
}

var gameOver = function() {
  gameActive = 0;
  score = 0;
  $('.game-over').css("display", "block");
}

var problemLvlOne = function () {
  $('.problem').html(createProblem(10));
};

var randomNum = (max) => {
  return Math.floor(Math.random() * max);
}


