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

// Application Starts

var randomNum = (max) => {
  return Math.floor(Math.random() * max);
  console.log('hit function')
}

var createProblem = (maxNum) => {
  return `${randomNum(maxNum)} + ${randomNum(maxNum)}`
};

var instance = createProblem(10);

console.log(instance);

