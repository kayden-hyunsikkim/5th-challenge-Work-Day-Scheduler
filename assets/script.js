// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  let timetable = $("#timetable");
  let userwhattodo9 = $("#todo9");
  let userwhattodo10 = $("#todo10");
  let userwhattodo11 = $("#todo11");
  let userwhattodo12 = $("#todo12");
  let userwhattodo1 = $("#todo1");
  let userwhattodo2 = $("#todo2");
  let userwhattodo3 = $("#todo3");
  let userwhattodo4 = $("#todo4");
  let userwhattodo5 = $("#todo5");

  timetable.on("click", function (event) {
    let button = event.target;
    if (button.matches('button') === true) {
      let Timetable = {
        todo9: userwhattodo9.val(),
        todo10: userwhattodo10.val(),
        todo11: userwhattodo11.val(),
        todo12: userwhattodo12.val(),
        todo1: userwhattodo1.val(),
        todo2: userwhattodo2.val(),
        todo3: userwhattodo3.val(),
        todo4: userwhattodo4.val(),
        todo5: userwhattodo5.val().trim()
      };
      localStorage.setItem("Timetable", JSON.stringify(Timetable));

    }
  })

  function init() {
    let storeTimetable = JSON.parse(localStorage.getItem("Timetable"));
    if (storeTimetable !== null) {
      Timetable = storeTimetable;
    } else {
      return;
    }
    document.querySelector('#todo9').textContent = storeTimetable.todo9;
    document.querySelector('#todo10').textContent = storeTimetable.todo10;
    document.querySelector('#todo11').textContent = storeTimetable.todo11;
    document.querySelector('#todo12').textContent = storeTimetable.todo12;
    document.querySelector('#todo1').textContent = storeTimetable.todo1;
    document.querySelector('#todo2').textContent = storeTimetable.todo2;
    document.querySelector('#todo3').textContent = storeTimetable.todo3;
    document.querySelector('#todo4').textContent = storeTimetable.todo4;
    document.querySelector('#todo5').textContent = storeTimetable.todo5;
  }

  init()




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //



  let timeblock9 = $("#hour-9");
  let timeblock10 = $("#hour-10");
  let timeblock11 = $("#hour-11");
  let timeblock12 = $("#hour-12");
  let timeblock1 = $("#hour-1");
  let timeblock2 = $("#hour-2");
  let timeblock3 = $("#hour-3");
  let timeblock4 = $("#hour-4");
  let timeblock5 = $("#hour-5");


  timeblock9 = 9;
  timeblock10 = 10;
  timeblock11 = 11;
  timeblock12 = 12;
  timeblock1 = 13;
  timeblock2 = 14;
  timeblock3 = 15;
  timeblock4 = 16;
  timeblock5 = 17;


  let currentTime = dayjs().hour();

  if (currentTime > timeblock9) {
    $("#hour-9").attr('class', 'row time-block past');
  } else if (currentTime < timeblock9) {
    $("#hour-9").attr('class', 'row time-block future');
  } else {
    $("#hour-9").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock10) {
    $("#hour-10").attr('class', 'row time-block past');
  } else if (currentTime < timeblock10) {
    $("#hour-10").attr('class', 'row time-block future');
  } else {
    $("#hour-10").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock11) {
    $("#hour-11").attr('class', 'row time-block past');
  } else if (currentTime < timeblock11) {
    $("#hour-11").attr('class', 'row time-block future');
  } else {
    $("#hour-11").attr('class', 'row time-block present');
  }



  if (currentTime > timeblock12) {
    $("#hour-12").attr('class', 'row time-block past');
  } else if (currentTime < timeblock12) {
    $("#hour-12").attr('class', 'row time-block future');
  } else {
    $("#hour-12").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock1) {
    $("#hour-1").attr('class', 'row time-block past');
  } else if (currentTime < timeblock1) {
    $("#hour-1").attr('class', 'row time-block future');
  } else {
    $("#hour-1").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock2) {
    $("#hour-2").attr('class', 'row time-block past');
  } else if (currentTime < timeblock2) {
    $("#hour-2").attr('class', 'row time-block future');
  } else {
    $("#hour-2").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock3) {
    $("#hour-3").attr('class', 'row time-block past');
  } else if (currentTime < timeblock3) {
    $("#hour-3").attr('class', 'row time-block future');
  } else {
    $("#hour-3").attr('class', 'row time-block present');
  }


  if (currentTime > timeblock4) {
    $("#hour-4").attr('class', 'row time-block past');
  } else if (currentTime < timeblock4) {
    $("#hour-4").attr('class', 'row time-block future');
  } else {
    $("#hour-4").attr('class', 'row time-block present');
  }

  if (currentTime > timeblock5) {
    $("#hour-5").attr('class', 'row time-block past');
  } else if (currentTime < timeblock5) {
    $("#hour-5").attr('class', 'row time-block future');
  } else {
    $("#hour-5").attr('class', 'row time-block present');
  }



  //
  // TODO: Add code to display the current date in the header of the page.
  let currentDay = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text(currentDay);

});































