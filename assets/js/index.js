//~ FUNCTIONS SECTION

// function to create HTML for each time block, append to page
const renderTimeBlocks = () => {};

// function to target the current date section
const renderDate = () => {
  // get current date from moment js and format date/time
  let dateAndTime = moment().format("dddd, MMMM Do, YYYY -- hh:mm A");
  //set the text.content to in the <p> to update the date
  $("dateAndTime").append(currentDay);
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
