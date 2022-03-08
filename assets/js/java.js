// container enclosing all schedule elements
var containerElement = $('.container');

// time array
var timeArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
var currentTime = moment().hour() - 9; 

// headline containing current date and time
var currentDate = $('<h1>');
currentDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
containerElement.append(currentDate);

// creating scheduel row elements and past, present, future classes
function scheduelList() {
    let rowDiv = $('<div>');
        rowDiv.attr('class', 'row');
        containerElement.append(rowDiv);
    
    let timeLabel = $('<label>');
        timeLabel.attr('class', 'col-2 col-sm-1 hour');
        timeLabel.text(timeArr[i]);
        rowDiv.append(timeLabel);

    let textInput = $('<textInput>');
        textInput.attr('class', 'col-8 col-sm-10 description' + timeClass);
        textInput.text(localStorage.getItem('btn' + i));
        rowDiv.append(textInput);
    const saveButton = $('<button>');
        saveButton.attr('class', 'col-sm-1 saveBtn ')
}