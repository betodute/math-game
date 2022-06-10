$(document).ready(function() { 
  var timeRemaining = 10;
  
  var startTimer = setInterval(function(){
    timeRemaining -= 1;
    $('.timer').html(timeRemaining);
    if (timeRemaining === 0) {
      clearInterval(startTimer);
    }
  }, 1000)



})