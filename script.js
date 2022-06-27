$(document).ready(function() { 

  $("#userInput").on('keyup', function() {
    if (gameActive === 0) {
      startGame();
      checkAnswer();
    } else {
      checkAnswer();
    }
  });

  $('.start-game').on('click', function() {
    score = 0;
    startGame();
    $('.start-game').css("display", "none");
  })

  problemLvlOne();
});

// Application Starts

var gameActive = 0;
var answer = 0;
var timeRemaining = 0;
var score = 0;

var checkAnswer = () => {
  var userAnswer = parseInt($('#userInput').val());
  if (answer === userAnswer ) {
    addScore();
    $('#userInput').val('');
    problemLvlOne();
  }
};

var startGame = () => {
  gameActive = 1;
  timeRemaining = 10;
  timerStation()
} 

var timerStation = () => {
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
  timeRemaining += 3;
  $('.score').html(score);
}

var gameOver = function() {
  gameActive = 0;
  $('.start-game').css("display", "block");
}

var problemLvlOne = function () {
  $('.problem').html(createProblem(10));
};

var randomNum = (max) => {
  return Math.floor(Math.random() * max);
}