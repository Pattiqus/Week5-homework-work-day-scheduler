var currentDate = document.getElementById('currentDay');
var currentTime = document.getElementById('dynamiClock');

// variable for obtaining current date and displaying to HTML
var actualDate = moment().format("dddd Do MMMM , YYYY");
    currentDate.textContent = actualDate;

// Function for displaying current time to HTML which updates dynamically
var timerInterval = setInterval(function () {
    var actualTime = moment().format("LTS");
    currentTime.textContent = actualTime;
}, 1000);

var colorChange = function () {

    // Obtain current time
    var currentHour = moment().format('HH');

    // Target all input elements

    var inputElements = $(".description");

    // looping through all input element areas
    for (var i = 0; i < inputElements.length; i++) {

        // get each elements ID as a string
        var elementID = inputElements[i].id;

        // obtain each element by ID

        var morphID = document.getElementById(inputElements[i].id);

        // clear old styling
        $(inputElements[i].id).removeClass(".present .past .future");

        // apply class changes based on the tasks whereabouts in the timeline

        if (elementID < currentHour) {
            $(morphID).addClass("past");
        }
    
        else if (elementID > currentHour) {
            $(morphID).addClass("future");
        }
    
        else {
            $(morphID).addClass("present");
        }
    }
};

setInterval(colorChange(), 1000 * 5);


/**
 * Function: setCalendarValues()
 */
var setCalendarValues = function() {
    // # Retrieve: Each time Input
    var timeInputs = $('input.time-input');

    // # Loop: Through each time input
    for( var curentInput = 0, totalTimeInputs = timeInputs.length; curentInput < totalTimeInputs; curentInput++ ) {

        // # Define: Current TIme Input
        var currentTimeInput = $( timeInputs[ curentInput ] );
        // # Retrieve: Identifier
        var timeIdentifier = currentTimeInput.attr('data-time-identifier');
        
        // # Retrieve: Value from Local Storage
        var localStorageValue = localStorage.getItem( timeIdentifier );

        // # Set: Value
        currentTimeInput.val( localStorageValue );
    }
};

setCalendarValues();

/**
 *  Function: timeInputClickFunction
 *  Description: Function for saving to localStorage dynamically
 * 
 */
var timeInputClickFunction = function( clickEvent ) {

    // # Define: Current Time Input
    var currentSubmit = $( this );

    // # Define: Input 
    var currentInput = currentSubmit.siblings('input.time-input');

    // # Retrieve: Current Value
    var inputValue = currentInput.val();

    // # Retrieve: Storage Identifier for input
    var currentInputIdentifier = currentInput.attr('data-time-identifier');

    // # Set: Local Storage
    localStorage.setItem(currentInputIdentifier, inputValue);

};


/**
 *  Loop: Through each button and bind event listener
 */
var submitButtons = $('button.saveBtn');
for( var submit = 0, totalSubmits = submitButtons.length; submit < totalSubmits; submit++ ) {

    // # Define: Current submit button in the loop
    var currentSubmitButton = $( submitButtons[ submit ] );

    // # Bind: Function to submit button
    currentSubmitButton.on('click', timeInputClickFunction);

}

