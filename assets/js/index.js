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
  //testing if function inside inner html works
  {
    timeLabel: "23:00PM",
    key: 23,
  },
  {
    timeLabel: "24:00PM",
    key: 24,
  },
];

//~ FUNCTIONS SECTION

// function to create HTML for each time block, append to page
const renderTimeBlocks = () => {
  // target the time block container and create time blocks
  $.each(workingHours, function (index, workingHour) {
    // get current hour using moment js
    const currentHour = moment().hour();
    console.log(currentHour);
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
    // step 2: running render textarea color fn at each loop to return text color based on conditions
    $(
      "#time-block-container"
    ).append(`<div class="time-blocks d-flex flex-row align-items-center">
        <div id=timeLabel">${workingHour.timeLabel}</div>
        <textarea
          class="text-area form-control ${renderTextareaColor()}"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <div class="button-container">
          <button class="save-button">save</button>
        </div>
        </div>`);
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
