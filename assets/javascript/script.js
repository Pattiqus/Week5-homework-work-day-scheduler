var currentDate = document.getElementById('currentDay');
var currentTime = document.getElementById('dynamiClock');

// variable for obtaining current date and displaying to HTML
var actualDate = moment().format("dddd Do MMMM , YYYY");
    currentDate.textContent = actualDate;

// variable for obtaining current time
var actualTime = moment().format("LTS");

// Function for displaying current time to HTML which updates dynamically
var timerInterval = setInterval(function () {
    var actualTime = moment().format("LTS");
    currentTime.textContent = actualTime;
}, 1000);

// function for changing input column color
var workHour = document.getElementById('9AM');


var colorChange = function () {

    // Obtain current time
    var currentHour = moment().format('H');

    // Target correct child element

    var inputElements = $("input");

    // looping through all class input areas
    for (var i = 0; i < inputElements.length; i++) {

        // get parent element ID as strings
        var elementID = inputElements[i];

        // obtain each element by ID

        var morphID = document.getElementById(inputElements[i].id)

        // clear old styling
        $(inputElements[i].id).removeClass(".present .past .future");

        // apply class changes based on the tasks whereabouts in the timeline

        if (elementID < currentHour) {
            $(morphID).addClass("past");
        }
    
        else if (elementID = currentHour) {
            $(morphID).addClass("present")
        }
    
        else {
            $(morphID).addClass("future")
        }
    }
};

setInterval(colorChange(), 1000);