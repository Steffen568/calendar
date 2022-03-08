// container enclosing all schedule elements
var containerElement = $('.container');

// time array
var timeArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
var currentTime = moment().hour(); 

// headline containing current date and time
var currentDate = $('<h1>');
currentDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
containerElement.append(currentDate);


// creating scheduel row elements and past, present, future classes
function scheduelList() {

    // for loop generating schedule blocks
    for (i = 0; i < 9; i++) {
        if (i < currentTime) {
            var timeClass = 'past';
        } else if (i === currentTime) {
            var timeClass = 'present';
        } else if (i > currentTime) {
            var timeClass = 'future';
        }
        
        // create row div assign attributes
        var rowDiv = $('<div>');
            rowDiv.attr('class', 'row');
            containerElement.append(rowDiv);
        
        // create time label
        var timeLabel = $('<label>');
            timeLabel.attr('class', 'col-2 col-sm-1 time-block hour');
            timeLabel.text(timeArr[i]);
            rowDiv.append(timeLabel);

        // create input text box > save input to loval storage
        var textInput = $('<textInput>');
            textInput.attr('class', 'col-8 col-sm-10 description' + timeClass);
            textInput.text(localStorage.getItem('btn' + i));
            rowDiv.append(textInput);

        // create save button
        var saveButton = $('<button>');
            saveButton.attr('class', 'saveBtn');
            saveButton.attr('id', 'btn' + i)
            rowDiv.append(saveButton)
    }
        
}

window.onload = scheduelList();