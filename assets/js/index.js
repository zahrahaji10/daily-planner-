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

//~ FUNCTIONS SECTION

// function that renders the time blocks in color of past, present or future when page loads

// function to create HTML for each time block, append to page
const renderTimeBlocks = () => {
  // target the time block container
  $("#time-block-container")
    .append(`<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">09:00am</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">10:00am</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">11:00am</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">12:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">13:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">14:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">15:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">16:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>
<div class="time-blocks d-flex flex-row align-items-center">
  <div class="time-label">17:00pm</div>
  <textarea
    class="text-area form-control"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <div class="button-container">
    <button class="save-button">save</button>
  </div>
</div>`);
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

//? EVENT LISTENER
//event lister for whole document when it loads
$(window).on("load", onReady);

//event for each hour of the day?
