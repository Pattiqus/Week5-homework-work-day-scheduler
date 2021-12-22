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

// Save buttons that save text input to local storage
var nineTextArea = localStorage.getItem("nine-text");
$("#09").val(nineTextArea);
$("#09Submit").on("click", () => {
    var inputText = $("#09").val();
    localStorage.setItem("nine-text", inputText);
    console.log(newText);
});
var tenTextArea = localStorage.getItem("ten-text");
$("#10").val(tenTextArea);
$("#10Submit").on("click", () => {
    var inputText = $("#10").val();
    localStorage.setItem("ten-text", inputText);
    console.log(newText);
});
var elevenTextArea = localStorage.getItem("eleven-text");
$("#11").val(elevenTextArea);
$("#11Submit").on("click", () => {
    var inputText = $("#11").val();
    localStorage.setItem("eleven-text", inputText);
    console.log(newText);
});
var twelveTextArea = localStorage.getItem("twelve-text");
$("#12").val(twelveTextArea);
$("#12Submit").on("click", () => {
    var inputText = $("#12").val();
    localStorage.setItem("twelve-text", inputText);
    console.log(newText);
});
var thirteenTextArea = localStorage.getItem("thirteen-text");
$("#13").val(thirteenTextArea);
$("#13Submit").on("click", () => {
    var inputText = $("#13").val();
    localStorage.setItem("thirteen-text", inputText);
    console.log(newText);
});
var fourteenTextArea = localStorage.getItem("fourteen-text");
$("#14").val(fourteenTextArea);
$("#14Submit").on("click", () => {
    var inputText = $("#14").val();
    localStorage.setItem("fourteen-text", inputText);
    console.log(newText);
});
var fifteenTextArea = localStorage.getItem("fifteen-text");
$("#15").val(fifteenTextArea);
$("#15Submit").on("click", () => {
    var inputText = $("#15").val();
    localStorage.setItem("fifteen-text", inputText);
    console.log(newText);
});
var sixteenTextArea = localStorage.getItem("sixteen-text");
$("#16").val(sixteenTextArea);
$("#16Submit").on("click", () => {
    var inputText = $("#16").val();
    localStorage.setItem("sixteen-text", inputText);
    console.log(newText);
});
var seventeenTextArea = localStorage.getItem("seventeen-text");
$("#17").val(seventeenTextArea);
$("#17Submit").on("click", () => {
    var inputText = $("#17").val();
    localStorage.setItem("seventeen-text", inputText);
    console.log(newText);
});