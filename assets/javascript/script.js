var currentTime = document.getElementById('currentDay');

// Function for obtaining current time using jQuary moment() function
var timerInterval = setInterval(function () {
    var actualTime = moment().format("MMMM Do, YYYY");
    currentTime.textContent = actualTime
}, 1000)