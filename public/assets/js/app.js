$("#newExerciseSubmit").click(function(e){
  e.preventDefault()
    $.post("/NewExercise",
    {
      date: $("#date").val().trim(),
      time: $("#time").val().trim(),
      type: $("#type").val().trim(),
      distance: $("#distance").val().trim(),
      duration: $("#duration").val().trim()
    },
    function(data, status){

      //calculating pace
var calcHours = parseInt(`${data.duration}`.substring(0, 2));
var calcMinutes = parseInt(`${data.duration}`.substring(3, 5));
var calcSeconds = parseInt(`${data.duration}`.substring(6, 8));
var rawPace = ((calcHours*3600) + (calcMinutes*60) + (calcSeconds))/data.distance;
var h = Math.floor(rawPace/3600);

if (h < 10){
var hh = 0 + (h).toString();
}

else{
hh = h;
}

var m = Math.floor((rawPace - (h*3600))/60);

if (m < 10){
var mm = 0 + (m).toString();
}

else{
mm = m;
}

var s = Math.floor(rawPace - (m*60));

if (s < 10){
var ss = 0 + (s).toString();
}

else{
ss = s;
}

var pace= hh+ ":" + mm + ":" + ss;
//appending to list
      $("#destination").append(`<li>
      <div>${data.type} for ${data.distance} miles</div>
      <div>${data.date} at ${data.time}</div>
      <div>${data.duration}</div>
      <div> pace: ${pace}/mi</div>
      </li>`);
      alert("success");
    });
  });