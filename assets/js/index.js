// Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar (done)
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours (done)
// WHEN I view the time blocks for that day
// THEN each time block is color coded to indicate whether it is in the past, present, or future (!)
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//~ Declarations

// declaring each working hour in a variable using an object array
const workingHours = [
  {
    timeLabel: "09:00AM",
    key: 9,
  },
  {
    timeLabel: "10:00AM",
    key: 10,
  },
  {
    timeLabel: "11:00AM",
    key: 11,
  },
  {
    timeLabel: "12:00AM",
    key: 12,
  },
  {
    timeLabel: "13:00PM",
    key: 13,
  },
  {
    timeLabel: "14:00PM",
    key: 14,
  },
  {
    timeLabel: "15:00PM",
    key: 15,
  },
  {
    timeLabel: "16:00PM",
    key: 16,
  },
  {
    timeLabel: "17:00PM",
    key: 17,
  },
];

//~ LOCAL STORAGE

const readFromLocalStorage = (key) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);
  if (parsedData) {
    return parsedData;
  } else {
    return "";
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);

  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

//~ FUNCTIONS SECTION

// function to create HTML for each time block, append to page
const renderTimeBlocks = () => {
  // target the time block container and create time blocks
  $.each(workingHours, function (index, workingHour) {
    // get current hour using moment js
    const currentHour = moment().hour();
    const renderTextareaColor = () => {
      // if current hour is equal to working hour
      if (currentHour === workingHour.key) {
        return "present";
      }
      //if current hour is less than working Hour
      else if (currentHour < workingHour.key) {
        return "future";
        //if current hour greater than  working Hour
      } else if (currentHour > workingHour.key) {
        return "past";
      }
    };

    // step 1: looping through all the working hours array and appending each working hour to time block container
    // step 2: calling fn render text area color inside <textarea> html element to run fn for each loop and return text color based on condition
    $(
      "#time-block-container"
    ).append(`<div class="time-blocks d-flex flex-row align-items-center">
        <div id=timeLabel">${workingHour.timeLabel}</div>
        <textarea
          class="text-area form-control ${renderTextareaColor()}"
          id="floatingTextarea2"
          style="height: 100px"
        >${readFromLocalStorage(workingHour.key)}</textarea>
        <div class="button-container">
          <button class="save-button">save</button>
        </div>
        </div>`);
  });
  // targeting all buttons
  const buttons = document.querySelectorAll(".button-container");
  // targeting text area elements
  const textAreas = document.querySelectorAll(".text-area");
  // looping trough each button and attaching an event listener
  buttons.forEach((btn, index) => {
    $(btn).on("click", () => {
      // if text area is saved when not empty
      if (textAreas[index].value != "") {
        // render the alert and text box color
        textAreas[index].classList.add("success-alert");
        // call fn to store notes to LS
        writeToLocalStorage(workingHours[index].key, textAreas[index].value);
      } else {
        // add alert message to text area section
        textAreas[index].classList.add("danger-alert");
        textAreas[index].placeholder =
          "You can not save an empty section, please insert information to save";
      }
    });
  });
};

// function to target the current date section
const renderDate = () => {
  // get current date from moment js and format date/time
  const dateAndTime = moment().format("dddd, MMMM Do, YYYY hh:mm A");
  //set the text.content to in the <p> to update the date
  $("#currentDay").append(dateAndTime);
};

// First function to execute when page loads
const onReady = () => {
  // first action on this function is to call renderDate fn
  renderDate();
  // then it calls the renderTimeBlock fn
  renderTimeBlocks();
};

//~ EVENT LISTENER
//event lister for whole document when it loads
$(window).on("load", onReady);
