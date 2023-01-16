
$(function () {

  // saving what user type in timeblock in local storage when user click save button. 
  let timetable = $("#timetable");
  let userwhattodo9 = $("#todo9");
  let userwhattodo10 = $("#todo10");
  let userwhattodo11 = $("#todo11");
  let userwhattodo12 = $("#todo12");
  let userwhattodo1 = $("#todo13");
  let userwhattodo2 = $("#todo14");
  let userwhattodo3 = $("#todo15");
  let userwhattodo4 = $("#todo16");
  let userwhattodo5 = $("#todo17");

  timetable.on("click", function (event) {
    let button = event.target;
    if (button.matches('button') === true) {
      let Timetable = {
        todo9: userwhattodo9.val(),
        todo10: userwhattodo10.val(),
        todo11: userwhattodo11.val(),
        todo12: userwhattodo12.val(),
        todo13: userwhattodo1.val(),
        todo14: userwhattodo2.val(),
        todo15: userwhattodo3.val(),
        todo16: userwhattodo4.val(),
        todo17: userwhattodo5.val().trim()
      };
      localStorage.setItem("Timetable", JSON.stringify(Timetable));

    }
  })


  // getting data from local storage which is saved and save in timeblock after reloading page.
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
    document.querySelector('#todo13').textContent = storeTimetable.todo13;
    document.querySelector('#todo14').textContent = storeTimetable.todo14;
    document.querySelector('#todo15').textContent = storeTimetable.todo15;
    document.querySelector('#todo16').textContent = storeTimetable.todo16;
    document.querySelector('#todo17').textContent = storeTimetable.todo17;

  }
  init()



  // giving present,past,future class each compare to currenttime
  let currentTime = dayjs().hour();

  for (i = 9; i < 18; i++) {
    if (currentTime > i) {
      $(`#hour-${i}`).attr('class', 'row time-block past');
    }
    else if (currentTime < i) {
      $(`#hour-${i}`).attr('class', 'row time-block future');
    }
    else {
      $(`#hour-${i}`).attr('class', 'row time-block present');
    }
  }

  // showing current day
  let currentDay = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text(currentDay);

})