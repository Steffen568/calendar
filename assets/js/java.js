// container enclosing all schedule elements
var containerElement = $('.container');

// time array
var timeArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
var currentTime = moment().hour() - 9;
console.log(currentTime) 

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

        // create input text box > save input to local storage
        var textInput = $('<textarea>');
            textInput.attr('class', 'col-8 col-sm-10 description text-area-input');
            textInput.addClass(timeClass)
            textInput.text(localStorage.getItem('btn' + i));
            rowDiv.append(textInput);

        // create save button
        var saveButton = $('<button>');
            saveButton.attr('class', 'col-2 col-sm-1 fas fa-save saveBtn');
            saveButton.attr('id', 'btn' + i)
            rowDiv.append(saveButton)
    }
        
}



function saveInput() {
    localStorage.setItem($(this).attr('id'), $(this).siblings('.text-area-input').val() )
    
    $(this).transfer( {
        to: $($(this)),
      } );
}

window.onload = scheduelList();
$(".saveBtn").on("click", saveInput);